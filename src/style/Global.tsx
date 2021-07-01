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
    background: #0a0c09;
    border-radius: 8px;
}

svg{
  fill:black;
}
.bXmglq {
    fill: #1c2715;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.dMOJrm {
    fill: #090c07;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 24px;
}
.cEtRJ {
    fill: #000000;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 0.5rem;
}
.ikxpXH {
    color: #2a40a9;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
.esrmSe {
    color: #000000;
    -webkit-transition: color 0.4s;
    transition: color 0.4s;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.iWUjVO:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: #0e150a;
    border-color: currentColor;
}
.iWUjVO {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #064a90;
    border: 0;
    border-radius: 16px;
    box-shadow: inset 0px -1px 0px rgb(14 14 44 / 40%);
    color: #FFFFFF;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 32px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 16px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.fOeSGB svg {
    fill: #0b0e08;
}
.hCuDoJ svg {
    fill: #000000;
}
.ihhlgZ svg {
    fill:#0c4aaf;
}
.iTPAiR svg {
    fill: #0c4aaf;
}
.iTPAiR {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
    background-color: transparent;
    color: #0c4aaf;
    box-shadow: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.ihhlgZ {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
    background-color: transparent;
    color: #c1dec0;
    box-shadow: inset 4px 0px 0px #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.QWTBH {
    color: #2b7bb9;
    -webkit-transition: color 0.4s;
    transition: color 0.4s;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.bvehrX {
    fill: #0a5996;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.jNEQeN {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #464646;
    border: 0;
    border-radius: 16px;
    box-shadow: inset 0px -1px 0px rgb(14 14 44 / 40%);
    color: #FFFFFF;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 32px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 16px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.fGouMX {
    fill: #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 24px;
}
.fFFYzO {
    color: #2b7bb9;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
.fHKjWg {
    fill: #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 0.5rem;
}
.gqTATM {
    color: #2b7bb9;
    padding: 0 8px;
    border-radius: 8px;
}
.sfsuA {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    border-radius: 16px;
    box-shadow: none;
    color: #2b7bb9;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 48px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 24px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.iTUSoV {
    color: #2b7bb9;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
}
.guZXHX {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    padding: 0 32px;
    font-size: 14px;
    background-color: #FAF9FA;
    color: #2b7bb9;
    box-shadow: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.TnFgu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #2b7bb9;
    -webkit-transition: opacity 0.4s;
    transition: opacity 0.4s;
    opacity: 0.6;
    z-index: 10;
    pointer-events: initial;
}
.kocznU {
    color: #353547;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
}
.gRlWmt {
    color: #2b7bb9;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-right: 16px;
}
.jDwzDQ {
    color: #353547;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
}
.AEvTY {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #EFF4F5;
    border: 0;
    border-radius: 16px;
    box-shadow: none;
    color: #2b7bb9;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 32px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 16px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.jQXCFk {
    color: #2b7bb9;
    padding: 0 8px;
    border-radius: 8px;
}
.bwZPEs:focus:not(:active) {
    box-shadow: 0 0 0 2px #2b7bb9;
}
.gZyJwS {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #353547;
    border: 0;
    border-radius: 16px;
    box-shadow: none;
    color: #0765af;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 32px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 16px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.iZUUPD {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid #2b7bb9;
    border-radius: 16px;
    box-shadow: none;
    color: #2b7bb9;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 32px;
    line-height: 1;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: 0;
    padding: 0 16px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    opacity: 1;
}
.kvfKRF {
    color: #2b7bb9;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
}
.gpdARc {
    color: #2b7bb9;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
}
.eEIRyX {
    color: #2b7bb9;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    margin-right: 16px;
}
.gZdWXm {
    fill: #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 4px;
}
.fIzImq {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #2b7bb9;
}
.hzQaIT {
    fill: #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.cKnHOz {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    padding: 0 32px;
    font-size: 14px;
    background-color: #343135;
    color: #0c4aaf;
    box-shadow: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.gqzsdD {
    fill: #3c3742;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 6px;
}
.dWRnUb {
    fill: #2b7bb9;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
