import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;

  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    ::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 8px;
    color: blue;
}

    
{
  "failure": "#ED4B9E",
  "primary": "#1FC7D4",
  "primaryBright": "#53DEE9",
  "primaryDark": "#0098A1",
  "secondary": "#7645D9",
  "success": "#31D0AA",
  "warning": "#FFB237",
  "binance": "#F0B90B",
  "background": "#FAF9FA",
  "backgroundDisabled": "#E9EAEB",
  "contrast": "#191326",
  "invertedContrast": "#FFFFFF",
  "input": "#eeeaf4",
  "inputSecondary": "#d7caec",
  "tertiary": "#EFF4F5",
  "text": "#452A7A",
  "textDisabled": "#BDC2C4",
  "textSubtle": "#8f80ba",
  "borderColor": "#E9EAEB",
  "card": "#FFFFFF",
  "gradients": {
    "bubblegum": "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)"
  }
}


    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
