import React from "react";
import Layout from "../modules/Layout";
import { Clock } from "../components/Clock";
import UnderConstruction from "../components/UnderConstruction";

import "./styles/index-page.scss";
import { AppendRoot } from "../components/AppendRoot";

export const IndexPageTemplate = ({ logoHovered }) => {
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            height: "100%",
          }}
        >
          {typeof window !== "undefined" && (
            <AppendRoot>
              <UnderConstruction logoHovered={logoHovered} />
            </AppendRoot>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            color: "white",
            bottom: "30px",
            left: 0,
            width: "100%",
            fontFamily: "Archivo Black",
            filter: "blur(0.5px)",
          }}
        >
          WORK IN PROGRESS
        </div>
      </section>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
