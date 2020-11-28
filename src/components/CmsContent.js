import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => {
  // console.log("htmlContent: ", content, className);

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

const CmsContent = ({ content, className }) => {
  // console.log("CmsContent: ", content, className);
  return <div className={className}>{content}</div>;
};

CmsContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = CmsContent.propTypes;

export default CmsContent;
