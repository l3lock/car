import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
// import 'react-image-gallery/styles/css/image-gallery-no-icon.css'

import GalleryArrow from './GalleryArrow'
import GalleryFullscreenButton from './GalleryFullscreenButton'

import styled from 'styled-components'

const GalleryStyle = styled.div`
  .image-gallery-slides {
    background: #ffffff;
  }

  .image-gallery-thumbnails {
    padding: .5rem 0;
    /* overflow-x: scroll; */

    &-wrapper {
      background: #f2f2f2;
      padding: 0 1rem;
    }
  }

  .image-gallery-thumbnail {
    transition: none;
    width: 260px;

    @media (max-width: 1024px) {
      width: 160px;
    }

    &.active {
      border: 1px solid #000;
    }
  }
`

const LeftNav = (onClick, disabled) => {
  return <GalleryArrow disabled={disabled} onClick={onClick} leftSide />
}

const RightNav = (onClick, disabled) => {
  return <GalleryArrow disabled={disabled} onClick={onClick} />
}

const Gallery = (props) => {
  return (
    <GalleryStyle>
      <ImageGallery
        {...props}
        renderLeftNav={LeftNav}
        renderRightNav={RightNav}
        renderFullscreenButton={GalleryFullscreenButton}
      />
    </GalleryStyle>
  )
}

export default Gallery
