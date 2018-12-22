import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";
import Container from "../components/Container";

export default () => (
  <Layout>
    <Head>
      <link rel="canonical" href="https://jeremymade.com/typography" />
      <title>Typography - Jeremy Smith</title>
    </Head>
    <Container padding>
      <article>
        <h1>
          Daniel ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          eligendi, repudiandae iusto ratione repellat ipsa reiciendis tempore
          dolorum debitis dolores quasi facilis minus obcaecati blanditiis? Quia
          magnam ullam obcaecati aliquid.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          voluptates distinctio expedita dolores, molestiae ullam quidem
          necessitatibus nam! In error tempora ipsa iusto quae? Fugit dolore
          expedita fuga! A, voluptates.
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          blanditiis exercitationem quae qui doloribus autem veniam dolorum
          repudiandae sequi quibusdam nisi aperiam ullam, facilis ducimus
          veritatis eius temporibus consequuntur explicabo!
        </h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          repellendus laborum possimus quas voluptatibus accusamus maxime
          recusandae. Vitae itaque, magni quam in facere consectetur nulla id
          provident? Cum, pariatur dicta.
        </h4>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut
          voluptatibus laborum officiis animi sunt consectetur, enim eos,
          repudiandae perferendis officia? Aspernatur ullam, autem distinctio
          dolore praesentium unde accusamus provident?
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          repellat exercitationem nulla non ea in inventore officiis perferendis
          nam nemo expedita reiciendis, impedit adipisci quaerat. Inventore ex
          eveniet possimus eius quibusdam nulla magnam! Fuga a dolor molestiae
          amet. Alias, eius? Omnis obcaecati at quae porro eaque facere ullam,
          corporis praesentium hic voluptatum, nobis dolorem cupiditate veniam
          sapiente fugit aperiam, consequatur non dolores. Ipsum error unde nisi
          provident dolor dolore asperiores voluptates impedit laudantium? Eum
          laboriosam omnis quam ab? Recusandae possimus, quaerat accusantium,
          maxime fugiat, amet nam quae in exercitationem quo modi sapiente
          doloribus nesciunt officia iure odio error rerum earum.
        </p>
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            cumque non quis soluta animi consequuntur excepturi blanditiis id,
            quaerat debitis iusto sit totam laboriosam? Odit nam natus quos
            necessitatibus mollitia.
          </strong>
        </p>
        <p>
          <em>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            odit vel doloribus atque id non optio voluptates facere, quis animi
            ipsam porro eum tempora consequuntur earum sit esse numquam
            accusamus!
          </em>
        </p>
        <p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            alias quidem cupiditate tenetur eum voluptas nobis, fuga porro
            voluptate dolor totam debitis excepturi quae ex perspiciatis quasi.
            Hic, beatae dolorem!
          </small>
        </p>
        <blockquote>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          recusandae cupiditate dolor repellendus alias quaerat nostrum, ut
          dignissimos ipsa nemo unde ad ex blanditiis asperiores vero placeat
          delectus quod ab.
        </blockquote>
        <p>
          You can use the following code
          <code className="language-css">{`.testing {font-size: 1em;}`}</code>
          to get the same effect. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Natus in sint quasi numquam ad voluptatem,
          doloremque ratione veniam totam eius, ullam facere officiis hic modi
          minima dicta error recusandae nisi.
        </p>
      </article>
    </Container>

    <style jsx global>
      {`
        article {
        }
      `}
    </style>
  </Layout>
);
