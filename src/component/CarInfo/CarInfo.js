import React from 'react'
import Gallery from '../Gallery/Gallery'
import CarPrice from './CarPrice'

import styled, { css } from 'styled-components'

const CarInfoStyle = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #000;

  width: 60%;
  min-width: 400px;
  margin-top: 20px;

  h2 {
    margin: 0;
    font-weight: normal;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

const CarInfoWrapper = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;

  ${(props) => props.space && css`flex-grow: 1;`};
`

const RequestButton = styled.button`
  background: #000;
  color: #fff;
  padding: 1.3rem;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
`

const CarInfo = (props) => {
  const { gallerySetting, modalPrice = 0, exteriorColorPrice = 0, wheelsPrice = 0, destinationCharge = 0 } = props

  const optionalPrice = exteriorColorPrice + wheelsPrice

  return (
    <CarInfoStyle>
      <CarInfoWrapper>
        <h2>R8 Coupe</h2>
        <p>5.2 FSI RWS</p>
      </CarInfoWrapper>
      <Gallery {...gallerySetting} />
      <CarInfoWrapper space>
        <CarPrice modalPrice={modalPrice} optionalPrice={optionalPrice} destinationCharge={destinationCharge} />
      </CarInfoWrapper>
      <CarInfoWrapper>
        <RequestButton>Request a quote</RequestButton>
      </CarInfoWrapper>
    </CarInfoStyle>
  )
}

export default CarInfo
