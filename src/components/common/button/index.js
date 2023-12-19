import { ActionButton, Img } from './styles'

const Button = ({
    size = 'normal',
    variant = 'secondary',
    text = undefined,
    loadingText = 'Please wait...',
    isLoading = false,
    rounded = false,
    icon = undefined,
    ...rest
}) => {
    return (
        <ActionButton size={size} $variant={variant} $rounded={rounded} {...rest}>
            {icon && <Img src={icon} size={size} alt="" />}
            {isLoading ? loadingText : text && text}
        </ActionButton>
    )
}

export default Button
