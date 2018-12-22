import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import TerminalWindow from "../components/TerminalWindow";

const previews = {
  ghr: "/static/da-band.jpg",
  typebomb: "/static/da-band.jpg",
  rsi: "/static/da-band.jpg"
};

class HomePage extends Component {
  state = {
    swapped: false,
    overlay: ""
  };

  componentDidMount() {
    // preload images for hover effect
    Object.keys(previews).map(p => {
      let img = document.createElement("img");
      // img.onload = console.log(`${p} loaded`)
      img.src = previews[p];
    });
  }

  swap = img => {
    this.setState({
      swapped: true,
      overlay: img
    });
    // console.log(`hi ${img}`)
  };

  reset = () => {
    this.setState({
      swapped: false,
      overlay: ""
    });
  };

  render() {
    // This giant list makes the writing down below actually readable.
    // =====================================================================
    const ghrLink = (
      <Link href="https://goathouserecords.bandcamp.com">
        <a
          onMouseEnter={() => this.swap(previews.ghr)}
          onMouseLeave={this.reset}
          children="ecommerce website and apparel"
          className="out"
        />
      </Link>
    );

    const typebombLink = (
      <Link href="/project/samsung-retail">
        <a
          onMouseEnter={() => this.swap(previews.typebomb)}
          onMouseLeave={this.reset}
          children="font pairing web app"
        />
      </Link>
    );

    const rsiLink = (
      <Link href="/project/samsung-dotcom">
        <a
          onMouseEnter={() => this.swap(previews.rsi)}
          onMouseLeave={this.reset}
          children="WordPress blog"
        />
      </Link>
    );

    const github = (
      <a href="https://github.com/0str1ch" className="out" children="Github" />
    );

    const instagram = (
      <a
        href="https://instagram.com/jeremy_made_it"
        className="out"
        children="Instagram"
      />
    );

    const reddit = (
      <a
        href="https://www.reddit.com/user/NaughtyOstrich"
        className="out"
        children="Reddit"
      />
    );

    // Page starts here. Yikes 👀
    // His recent work includes a {eqxLink} for Equinox and an interactive{' '}
    //    {retailLink} and {dotcomLink} for Samsung.
    // =====================================================================
    return (
      <Layout>
        <article className="introduce">
          <h1>Hi.</h1>
          <p>
            Jeremy Smith is a front-end web developer and product designer in
            Tampa.
          </p>
          <p>
            His most recent work includes creating the {typebombLink} Typebomb,
            designing an {ghrLink} for Goat House Records, developing a Star
            Citizen {rsiLink}, and an unannounced open-source typography
            library.
          </p>
          <p>
            You can browse and git clone some of his open source projects on{" "}
            {github}, or say hi on {instagram} or {reddit}.
          </p>
        </article>
        <section className="PhotoWrap">
          {this.state.swapped && (
            <img className="OverlayImage" src={this.state.overlay} alt="" />
          )}
          <img
            className="BaseImage"
            src="/static/working.svg"
            alt="Hi, there."
          />
        </section>
        <style jsx global>
          {`
            .PhotoWrap {
              align-self: center;
              display: grid;
              grid-template: 1fr / 1fr;
              will-change: transform, opacity;
              animation: fadeup 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 0.61s 1
            normal both running;
            }

            .PortfolioImage {
              width: 100%;
              height: auto;
              object-fit: cover;
            }

            .BaseImage {
              height: auto;
              object-position: center top;
              grid-column: 1 / span 1;
              grid-row: 1 / span 1;
            }

            .OverlayImage {
              grid-column: 1 / span 1;
              grid-row: 1 / span 1;
              z-index: 2;
              align-self: center;
              justify-self: center;
              width: 128%;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default HomePage;
