import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import cn from 'classnames';
import './image.scss';

const Image = ({ imageInfo, className}) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img className={cn(className, 'image-responsive')} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img className={cn(className, 'image-responsive')} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img className={cn(className, 'image-responsive')} src={image} alt={alt} />

  return null
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default Image
