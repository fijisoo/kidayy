import React from "react";
import axios from "axios";

import Layout from "../modules/Layout";
import { Clock } from "../components/Clock";

import "./styles/index-page.scss";

export const IndexPageTemplate = ({
  logoHovered,
}) => {
  axios.get("/.netlify/functions/getCurrentPlayingSong").then(() => {});

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
               TEST
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
