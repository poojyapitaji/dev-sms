import { ActionButton, Img } from './styles'

const Button = ({
    size = 'normal',
    variant = 'secondary',
    text = undefined,
    loadingText = 'Please wait...',
    isLoading = false,
    rounded = false,
    icon = undefined,
    iconSize = 'normal',
    buttonStyle = {},
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
            {icon && <Img src={icon} size={iconSize} alt="" />}
            {isLoading ? loadingText : text && text}
        </ActionButton>
    )
}

export default Button
