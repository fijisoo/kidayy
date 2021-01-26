import React from "react";
import { Clock } from "../components/Clock";
import BlogRoll from "../modules/BlogRoll";
import Layout from '../modules/Layout'

import "./styles/index-page.scss";

export const IndexPageTemplate = () => {
  return (
    <div>
      <div className="header-banner">
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                >
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const IndexPage = () => {

  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  );
};

export default IndexPage;
