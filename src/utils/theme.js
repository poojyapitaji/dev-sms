import Color from 'color'
import keyframes from './keyframes'

// Common spacing values
const spacingSm = '4px'
const spacingNormal = '8px'
const spacingLg = '16px'
const spacingXl = '20px'

// Common margin values
const marginSm = spacingSm
const marginNormal = spacingNormal
const marginLg = spacingLg
const marginXl = spacingXl

// Common padding values
const paddingSm = spacingSm
const paddingNormal = spacingNormal
const paddingLg = spacingLg
const paddingXl = spacingXl

// Define color variables
const colorPrimary = '#0E3861'
const colorSuccess = '#008744'
const colorDanger = '#FF1A1A'
const colorWarning = '#FFB946'
const colorSecondary = '#F8F9FB'
const colorInfo = '#2A4F6E'
const colorGray = '#00000033'

const colorText = {
    darkest: '#202040',
    dark: '#545764',
    medium: '#6B6F80',
    light: '#A2A5B9',
    link: colorPrimary,
    white: '#FFFFFF',
    black: '#000000',
    info: '#1B6775',
}

const colorBackground = {
    darkPrimary: '#0E3861',
    medium: '#D8D8D8',
    light: '#A2A5B9',
    lightest: '#EFEFEF',
    lightPrimary: '#BFD7EA',
    lightSuccess: '#D9F4DD',
    white: '#FFFFFF',
    info: colorInfo,
}

const colorBorder = {
    lightest: '#D8D8D8',
    light: '#A2A5B9',
    inputFocus: '#6D9BF1',
    info: colorInfo,
}

const theme = {
    colors: {
        primary: colorPrimary,
        success: colorSuccess,
        danger: colorDanger,
        warning: colorWarning,
        secondary: colorSecondary,
        info: colorInfo,
        lightGray: colorGray,
        text: colorText,
        background: colorBackground,
        border: colorBorder,
    },

    breakpoints: {
        xs: 0,
        sm: '575.98px',
        md: '767.98px',
        lg: '991.98px',
        xl: '1199.92px',
        xxl: '1399.98px',
    },

    zIndex: {
        alert: 10002,
        modal: 10001,
        dropdown: 101,
        overlay: 150,
    },

    font: {
        regular: 'font-family: Roboto-Regular, sans-serif; font-weight: 400;',
        medium: 'font-family: Roboto-Medium, sans-serif; font-weight: 500;',
        bold: 'font-family: Roboto-Bold, sans-serif; font-weight: 700;',
        black: 'font-family: Roboto-Black, sans-serif; font-weight: 900;',
    },

    size: {
        sm: 'height: 14px; width: 14px;',
        normal: 'height: 16px; width: 16px;',
        lg: 'height: 20px; width: 20px;',
        xl: 'height: 32px; width: 32px;',
    },

    spacing: {
        sm: spacingSm,
        normal: spacingNormal,
        lg: spacingLg,
        xl: spacingXl,
    },

    margin: {
        sm: marginSm,
        normal: marginNormal,
        lg: marginLg,
        xl: marginXl,
    },

    padding: {
        sm: paddingSm,
        normal: paddingNormal,
        lg: paddingLg,
        xl: paddingXl,
    },

    fontSize: {
        sm: `calc(${paddingSm} * 3)`,
        normal: `calc(${paddingSm} * 4)`,
        lg: `calc(${paddingSm} * 5)`,
        xl: `calc(${paddingSm} * 6)`,
    },

    borderRadius: {
        sm: '3.2px',
        normal: '4px',
        lg: '4.8px',
        xl: '5.6px',
    },

    boxShadow: {
        medium: '0 5px 10px 0 rgba(0, 0, 0, 0.1);',
        dropdown: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;',
        subtle: '0 2px 4px rgba(0, 0, 0, 0.1)',
        strong: '0 6px 12px rgba(0, 0, 0, 0.2)',
        outline: '0 0 0 4px rgba(100, 100, 255, 0.3)',
    },

    overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
    },

    animation: keyframes,

    transition: 'transition: all 0.3s ease-in-out',

    mixin: {
        darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
        lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
        rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
        truncateText: 'overflow: hidden; white-space: nowrap; text-overflow: ellipsis;',
        clickable: 'cursor: pointer; user-select: none;',
        hardwareAccelerate: 'transform: translateZ(0);',
        cover: 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;',
        fixed: 'position: fixed; top: 0; right: 0; bottom: 0; left: 0;',
        center: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
        flexCenter: 'display:flex; align-items: center; justify-content: center;',
        scrollableY: 'overflow-x: hidden; overflow-y: auto; -webkit-overflow-scrolling: touch;',
        backgroundImage: (imageURL) => `
      background-image: url('${imageURL}');
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    `,
        link: (colorValue = colorPrimary) => `
      cursor: pointer;
      color: ${colorValue};
      ${theme.font.weights.medium}
      &:hover, &:visited, &:active {
          color: ${colorValue};
      }
      &:hover {
          text-decoration: underline;
      }
    `,
    },

    typographyScale: {
        h1: '32px',
        h2: '24px',
        h3: '20px',
        h4: '18px',
        h5: '16px',
        h6: '14px',
    },

    opacity: {
        low: '0.7',
        medium: '0.8',
        high: '0.9',
    },

    input: {
        focusBorder: 'border: 2px solid #6D9BF1;',
        errorBorder: 'border: 2px solid #FF1A1A;',
    },

    lineHeight: {
        normal: '1.5',
        heading: '1.2',
    },

    disabled: 'opacity: 0.5; cursor: not-allowed; pointer-events: none;',

    grid: {
        columns: 12,
        gutter: '16px',
    },

    iconSize: {
        small: '16px',
        medium: '24px',
        large: '32px',
    },

    tagColors: {
        primary: colorPrimary,
        success: colorSuccess,
        danger: colorDanger,
        warning: colorWarning,
        info: colorInfo,
    },
}

export default theme
