const express = require('express');
const assert = require('assert');
const next = require('next');
const { join } = require('path');
const sitemapAndRobots = require('./sitemapAndRobots')

const server = express();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const config = require('./config');
const render = require('./render');

const cachedRoutes = [

];

app.prepare().then(() => {
  const Renderer = render(app);
  sitemapAndRobots({ server })
  if (!dev) {
    server.get('*', (_, res, next) => {
      res.setHeader('Cache-Control', 'max-age=86400, immutable');
      next();
    });
  }

  cachedRoutes.forEach(route => {
    server.get(route, (req, res) => Renderer(req, res, route));
  });

  server.get('/service-worker.js', ServiceWorker(app));

  server.get('*', (req, res) => {
    return handle(req, res);
  });
});

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '../', 'build', 'service-worker.js');

  app.serveStatic(req, res, filePath);
};

server.listen(config.PORT, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${config.PORT}`);
});
