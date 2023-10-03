import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

import App from './App';
import NunitoSans from './NunitoSans.ttf'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'NunitoSans';
    src: local(${NunitoSans});
  }

  *{margin:0;padding:0;color:inherit;font-family:NunitoSans}
  *, :after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
  html, body {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
