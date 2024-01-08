import { ActionButton, Img } from './styles'

const Button = ({
    size = 'normal',
    variant = 'secondary',
    loadingText = 'Please wait...',
    isLoading = false,
    rounded = false,
    icon = undefined,
    iconSize = 'normal',
    iconPosition = 'left',
    buttonStyle = {},
    children = null,
    ...rest
}) => {
    return (
        <ActionButton
            size={size}
            $variant={variant}
            $rounded={rounded}
            style={buttonStyle}
            {...rest}
        >
            {icon && iconPosition === 'left' && <Img src={icon} size={iconSize} alt="" />}
            {isLoading ? loadingText : children}
            {icon && iconPosition === 'right' && <Img src={icon} size={iconSize} alt="" />}
        </ActionButton>
    )
}

export default Button
