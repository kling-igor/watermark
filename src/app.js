import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { GlobalStyle } from './style'

const ContainerStyle = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #293742;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  /* user-select: none;
  pointer-events: none; */
`

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <ContainerStyle>
          <div
            style={{
              fontFamily: 'terminatorFont',
              letterSpacing: '10px',
              fontSize: '6em',
              color: 'rgba(53,62,66, 1)',
              textShadow: '0px -1px 0px rgba(255,255,255,.5)'
            }}
          >
            VISION
          </div>
        </ContainerStyle>
      </>
    )
  }
}
