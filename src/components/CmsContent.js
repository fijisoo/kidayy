import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const CmsContent = ({ content, className }) => (
  <div className={className}>{content}</div>
)

CmsContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = CmsContent.propTypes

export default CmsContent
