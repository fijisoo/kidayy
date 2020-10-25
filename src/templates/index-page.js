import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../modules/BlogRoll";
import { getDayOfAWeek, getTimeOfADay } from "../utlis/dates";

const Clock = () => {
  const [clock, setClock] = useState(() => new Date().toLocaleTimeString());

  const titleText = `It's ${getDayOfAWeek[new Date().getDay()]} ${getTimeOfADay(
    new Date().getHours()
  )}`.toUpperCase();

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        color: "white",
        lineHeight: "1",
        padding: "0.25em",
        justifyContent: "center",
        fontSize: "24px",
      }}
    >
      {titleText}
      <span
        style={{
          display: "flex",
          fontSize: "12px",
        }}
      >
        {clock}
      </span>
    </h1>
  );
};

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          // backgroundImage: `url(${
          //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // })`,
          marginBottom: "0",
          paddingBottom: 0,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Clock />
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/*<div className="content">*/}
                {/*  <div className="tile">*/}
                {/*    <h1 className="title">{mainpitch.title}</h1>*/}
                {/*  </div>*/}
                {/*  <div className="tile">*/}
                {/*    <h3 className="subtitle">{mainpitch.description}</h3>*/}
                {/*  </div>*/}
                {/*  <div className="columns">*/}
                {/*      <div className="column is-12">*/}
                {/*          <h3 className="has-text-weight-semibold is-size-2">*/}
                {/*              {heading}*/}
                {/*          </h3>*/}
                {/*          <p>{description}</p>*/}
                {/*      </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                >
                  {/*<h3 className="has-text-weight-semibold is-size-2">*/}
                  {/*  Latest stories*/}
                  {/*</h3>*/}
                  <BlogRoll />
                </div>
                infinity scroll ? infinity icon for infinity scroll how about
                making switcher between backgrounded gallerylike thing and blog
                section ??? kinda bad but to consider timer? like a clock with a
                countdown to next day (ie. 04:20 -> indie rock) in a future ->
                load on prerender templates content (i.e. pages/about) - maybe
                host it somewhere and just fetch. Think about first render so we
                may need metadata on the first fetch locally and just load a
                skeleton -> then load internet and push content.
                ⚡🐓️-techno/electronic 🔥🐁-rap 🦩-classic -shoegaze -dream pop
                -
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
