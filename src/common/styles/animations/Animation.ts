import {keyframes} from "styled-components";


export const showDescription = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const hiddenDescription = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`


//============ For Loader ================//
export const dotLoader = keyframes`
  50% {
    transform: translateX(96px);
  }
`

export const dotsLoader = keyframes`
  50% {
    transform: translateX(-32px)
  }
`

//============ Effect Name ================//
export const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`