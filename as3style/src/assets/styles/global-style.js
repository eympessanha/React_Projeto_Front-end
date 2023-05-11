import { createGlobalStyle } from 'styled-components'
import As3Background from '../images/As3.jpg'

const globalStyle = createGlobalStyle`

  * {
   padding: 0;
   margin: 0; 
  }

  body { 
    padding: 0;
    margin: 0;
    background: url(${As3Background});
    height: 100%;
    width: 100%;
  }
`

export default globalStyle

