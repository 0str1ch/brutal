import Link from 'next/link'
import Layout from '../components/Layout'
import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import Expander from '../components/expander-menu'
import { Spring } from 'react-spring'

export default () => (
  <Layout title="Jeremy Smith">
    <Head>
      <link rel="canonical" href="https://jeremymade.com" />
    </Head>
    <Container grid col_2_1 row_1>
      <div className="grid-item-wrapper">
        <div className="grid-item-container">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => <div style={props}>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla magnam eum veniam ipsum culpa soluta dolorem
            optio mollitia illum, a, quos quidem? Minus eum itaque tenetur eius nisi exercitationem sapiente!
          </h1>
					</div>}
          </Spring>
        </div>
      </div>
      <div className="grid-item-wrapper">
        <div className="grid-item-container border">
          <img src="/static/pick-me-elon.svg" alt="" />
        </div>
        <div className="grid-item-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, numquam consectetur vero harum libero in
            nesciunt enim, totam, voluptatem dolorum illum? Praesentium debitis deleniti pariatur expedita nam aperiam
            ducimus sapiente. Dolorem consectetur incidunt aut illo modi consequuntur expedita suscipit ullam.
            Voluptatem quia itaque iusto maxime, doloremque aut libero, repudiandae vero, cupiditate voluptates dolores.
          </p>
        </div>
      </div>
    </Container>
    <Container grid col_1 row_1>
      <div className="grid-item-wrapper">
        <div className="marquee-item-container">
          <h1>Work. Play. Fuck. Repeat.</h1>
        </div>
      </div>
    </Container>
    <Container grid col_2 row_1>
      <div className="grid-item-wrapper">
        <div className="grid-item-container">
        </div>
      </div>
      <div className="grid-item-wrapper">
        <div className="grid-item-container" />
      </div>
    </Container>
    <Container grid col_1 row_1>
      <div className="grid-item-wrapper">
        <div className="grid-item-container">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At beatae nostrum delectus adipisci totam veniam
            cupiditate vero iusto. Odit reiciendis sint, dolorem quo deserunt eveniet autem blanditiis, id ex velit
            laudantium facilis dicta, provident impedit explicabo harum. Commodi, culpa sapiente?
          </h1>
        </div>
      </div>
    </Container>
    <style jsx global>{`
      .grid-item-container {
        padding: 1.5rem;
      }

      .border {
        border-bottom: 4px solid #000;
      }

      .rc-marquee {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
      }

      .rc-marquee-text {
        display: inline;
      }
    `}</style>
  </Layout>
)
