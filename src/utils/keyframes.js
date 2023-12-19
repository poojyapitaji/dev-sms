// Styled Components Keyframes
import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOutKeyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const slideInUpKeyframes = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOutUpKeyframes = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`

const slideInDownKeyframes = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOutDownKeyframes = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

const slideInLeftKeyframes = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOutLeftKeyframes = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`

const slideInRightKeyframes = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOutRightKeyframes = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

const slideInReverseKeyframes = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const slideOutReverseKeyframes = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.7);
    opacity: 0;
  }
`

const toastKeyframes = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideInUpSmallKeyframes = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOutUpSmallKeyframes = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
`

const slideInDownSmallKeyframes = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOutDownSmallKeyframes = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(10px);
    opacity: 0;
  }
`

const slideInLeftSmallKeyframes = keyframes`
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOutLeftSmallKeyframes = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
`

const slideInRightSmallKeyframes = keyframes`
  from {
    transform: translateX(10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOutRightSmallKeyframes = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(10px);
    opacity: 0;
  }
`

export default {
    fadeIn: css`
        ${fadeInKeyframes} 0.3s ease-in-out
    `,
    fadeOut: css`
        ${fadeOutKeyframes} 0.3s ease-in-out
    `,
    slideInUp: css`
        ${slideInUpKeyframes} 0.3s ease-in-out
    `,
    slideOutUp: css`
        ${slideOutUpKeyframes} 0.3s ease-in-out
    `,
    slideInDown: css`
        ${slideInDownKeyframes} 0.3s ease-in-out
    `,
    slideOutDown: css`
        ${slideOutDownKeyframes} 0.3s ease-in-out
    `,
    slideInLeft: css`
        ${slideInLeftKeyframes} 0.3s ease-in-out
    `,
    slideOutLeft: css`
        ${slideOutLeftKeyframes} 0.3s ease-in-out
    `,
    slideInRight: css`
        ${slideInRightKeyframes} 0.3s ease-in-out
    `,
    slideOutRight: css`
        ${slideOutRightKeyframes} 0.3s ease-in-out
    `,
    slideInReverse: css`
        ${slideInReverseKeyframes} 0.3s ease-in-out
    `,
    slideOutReverse: css`
        ${slideOutReverseKeyframes} 0.3s ease-in-out
    `,
    toast: css`
        ${toastKeyframes} 0.3s ease-in-out
    `,
    slideInUpSmall: css`
        ${slideInUpSmallKeyframes} 0.3s ease-in-out
    `,
    slideOutUpSmall: css`
        ${slideOutUpSmallKeyframes} 0.3s ease-in-out
    `,
    slideInDownSmall: css`
        ${slideInDownSmallKeyframes} 0.3s ease-in-out
    `,
    slideOutDownSmall: css`
        ${slideOutDownSmallKeyframes} 0.3s ease-in-out
    `,
    slideInLeftSmall: css`
        ${slideInLeftSmallKeyframes} 0.3s ease-in-out
    `,
    slideOutLeftSmall: css`
        ${slideOutLeftSmallKeyframes} 0.3s ease-in-out
    `,
    slideInRightSmall: css`
        ${slideInRightSmallKeyframes} 0.3s ease-in-out
    `,
    slideOutRightSmall: css`
        ${slideOutRightSmallKeyframes} 0.3s ease-in-out
    `,
}
