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

const generateSlideKeyframes = (startTranslate, endTranslate) => keyframes`
    from {
        transform: ${startTranslate};
        opacity: 0;
    }
    to {
        transform: ${endTranslate};
        opacity: 1;
    }
`

const slideInUpKeyframes = generateSlideKeyframes('translateY(100%)', 'translateY(0)')
const slideOutUpKeyframes = generateSlideKeyframes('translateY(0)', 'translateY(-100%)')
const slideInDownKeyframes = generateSlideKeyframes('translateY(-100%)', 'translateY(0)')
const slideOutDownKeyframes = generateSlideKeyframes('translateY(0)', 'translateY(100%)')
const slideInLeftKeyframes = generateSlideKeyframes('translateX(-100%)', 'translateX(0)')
const slideOutLeftKeyframes = generateSlideKeyframes('translateX(0)', 'translateX(-100%)')
const slideInRightKeyframes = generateSlideKeyframes('translateX(100%)', 'translateX(0)')
const slideOutRightKeyframes = generateSlideKeyframes('translateX(0)', 'translateX(100%)')
const slideInUpSmallKeyframes = generateSlideKeyframes('translateY(10px)', 'translateY(0)')
const slideOutUpSmallKeyframes = generateSlideKeyframes('translateY(0)', 'translateY(-10px)')
const slideInDownSmallKeyframes = generateSlideKeyframes('translateY(-10px)', 'translateY(0)')
const slideOutDownSmallKeyframes = generateSlideKeyframes('translateY(0)', 'translateY(10px)')
const slideInLeftSmallKeyframes = generateSlideKeyframes('translateX(-10px)', 'translateX(0)')
const slideOutLeftSmallKeyframes = generateSlideKeyframes('translateX(0)', 'translateX(-10px)')
const slideInRightSmallKeyframes = generateSlideKeyframes('translateX(10px)', 'translateX(0)')
const slideOutRightSmallKeyframes = generateSlideKeyframes('translateX(0)', 'translateX(10px)')

const oldKeyframes = {
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

const newKeyframes = {
    fadeInJS: [{ opacity: 0 }, { opacity: 1 }],
    fadeOutJS: [{ opacity: 1 }, { opacity: 0 }],
    slideInUpJS: [
        { transform: 'translateY(100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
    ],
    slideOutUpJS: [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-100%)', opacity: 0 },
    ],
    slideInDownJS: [
        { transform: 'translateY(-100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
    ],
    slideOutDownJS: [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(100%)', opacity: 0 },
    ],
    slideInLeftJS: [
        { transform: 'translateX(-100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ],
    slideOutLeftJS: [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(-100%)', opacity: 0 },
    ],
    slideInRightJS: [
        { transform: 'translateX(100%)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ],
    slideOutRightJS: [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(100%)', opacity: 0 },
    ],
    slideInUpSmallJS: [
        { transform: 'translateY(10px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
    ],
    slideOutUpSmallJS: [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-10px)', opacity: 0 },
    ],
    slideInDownSmallJS: [
        { transform: 'translateY(-10px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
    ],
    slideOutDownSmallJS: [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(10px)', opacity: 0 },
    ],
    slideInLeftSmallJS: [
        { transform: 'translateX(-10px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ],
    slideOutLeftSmallJS: [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(-10px)', opacity: 0 },
    ],
    slideInRightSmallJS: [
        { transform: 'translateX(10px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ],
    slideOutRightSmallJS: [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(10px)', opacity: 0 },
    ],
}

const defaultAnimationSetting = {
    duration: 200,
    easing: 'ease-in-out',
    fill: 'forwards',
}

export default { ...oldKeyframes, ...newKeyframes, defaultAnimationSetting }
