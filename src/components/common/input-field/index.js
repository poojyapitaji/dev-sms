import { InputField } from './styles'

const Input = ({
    size = 'normal',
    variant = 'primary',
    type = 'text',
    placeholder = '',
    ...rest
}) => {
    return (
        <InputField
            type={type}
            placeholder={placeholder}
            size={size}
            $variant={variant}
            {...rest}
        />
    )
}

export default Input
