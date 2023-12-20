import { useEffect, useRef, useState } from 'react'
import {
    ArrowContainer,
    Container,
    Img,
    Option,
    OptionsContainer,
    SelectContainer,
    SelectedText,
} from './styles'
import images from '../../../assets/images'
import useOutsideClick from '../../../hooks/useOutsideClick'

const Select = ({
    onChange = () => {},
    options = [],
    defaultSelected = undefined,
    disabled = false,
    placeholder = 'Select',
    size = 'normal',
    variant = 'secondary',
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const $selectConatinerRef = useRef(null)
    const $optionsContainerRef = useRef(null)

    useOutsideClick($optionsContainerRef, () => hanleCloseOptions())

    useEffect(() => {
        if (defaultSelected) {
            if (options.length > 0) {
                const foundData = options.find((option) => option.value === defaultSelected)
                if (foundData) {
                    setSelectedOption(foundData)
                }
            }
        }
    }, [defaultSelected])

    useEffect(() => {
        if (isOpen) {
            const container = $selectConatinerRef.current
            if (container) {
                const height = container.getBoundingClientRect().height
                const width = container.getBoundingClientRect().width
                const x = container.getBoundingClientRect().x
                const y = container.getBoundingClientRect().y
                const optionContainer = $optionsContainerRef.current
                optionContainer.style.width = `${width}px`
                optionContainer.style.marginTop = `${height}px`
                optionContainer.style.top = `${y + 10}px`
            }
        }
    }, [isOpen])

    const hanleCloseOptions = () => {
        const optionsContainer = $optionsContainerRef.current
        if (optionsContainer) {
            const animation = optionsContainer.animate(
                [
                    { transform: `translateY(0)`, opacity: 1 },
                    { transform: `translateY(-10px)`, opacity: 0 },
                ],
                {
                    duration: 200,
                    easing: 'ease-in-out',
                    fill: 'forwards',
                },
            )
            animation.onfinish = () => setIsOpen(false)
        }
    }

    const handleSelectToggle = () => {
        if (!isOpen) {
            setIsOpen(true)
        } else {
            hanleCloseOptions()
        }
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        onChange(option)
        hanleCloseOptions()
    }

    const handleSlelectClear = () => {
        setSelectedOption(null)
        onChange(null)
        hanleCloseOptions()
    }

    return (
        <Container ref={$selectConatinerRef} $disabled={disabled}>
            <SelectContainer size={size} $variant={variant} {...rest}>
                <SelectedText
                    size={size}
                    $variant={variant}
                    $notSelected={!selectedOption}
                    onClick={handleSelectToggle}
                >
                    {selectedOption ? selectedOption.label : placeholder}
                </SelectedText>
                <ArrowContainer>
                    {selectedOption && !disabled && (
                        <Img
                            src={images.icons.close}
                            alt="clear select"
                            size={size}
                            onClick={handleSlelectClear}
                        />
                    )}
                    <Img
                        src={images.icons.arrow_down}
                        alt="arrow down"
                        size={size}
                        $isOpen={isOpen}
                        onClick={handleSelectToggle}
                        $arrow={true}
                    />
                </ArrowContainer>
            </SelectContainer>
            {isOpen && (
                <OptionsContainer ref={$optionsContainerRef} size={size} $variant={variant}>
                    {options.length > 0 &&
                        options.map((option, index) => (
                            <Option
                                $variant={variant}
                                size={size}
                                key={index + Date.now()}
                                onClick={() => handleOptionChange(option)}
                            >
                                {option.label}
                            </Option>
                        ))}
                </OptionsContainer>
            )}
        </Container>
    )
}

export default Select
