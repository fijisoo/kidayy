import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import "../templates/styles/all.sass";
import useSiteMetadata from "../components/SiteMetadata";
import { withPrefix } from "gatsby";
import { useHover } from "../utlis/hooks/hoverHook";

const TemplateWrapper = ({ children }) => {
  const [hovered, eventHandlers] = useHover();
  const { title, description } = useSiteMetadata();

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { logoHovered: hovered });
  });
  return (
    <div className="layerWrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar useHover={[hovered, eventHandlers]} />
      <div>{childrenWithProps}</div>
      {/*<Footer />*/}
    </div>
  );
};

export default TemplateWrapper;
