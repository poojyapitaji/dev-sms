import { useEffect, useRef, useState } from 'react'
import { Container, ContantContainer } from './styles'
import theme from '../../utils/theme'

const Dropdown = ({ renderLink = () => {}, renderContent = () => {}, offSet = 'top-left' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [linkPosition, setLinkPosition] = useState({})

    const $containerRef = useRef(null)
    const $contantRef = useRef(null)

    const handleToggel = () => {
        if (isOpen) {
            closeWithAnimation()
        } else {
            setIsOpen(true)
        }
    }

    const handleClose = (e) => {
        if (e.target.getAttribute('data-dropdown-link')) {
            return
        }
        closeWithAnimation()
    }

    const closeWithAnimation = () => {
        const contant = $contantRef.current
        if (contant) {
            const animation = contant.animate(
                theme.animation.slideOutUpSmallJS,
                theme.animation.defaultAnimationSetting,
            )
            animation.onfinish = () => {
                setIsOpen(false)
            }
        }
    }

    useEffect(() => {
        if (isOpen) {
            const container = $containerRef.current
            if (container) {
                const firstChild = container?.childNodes[0]
                if (firstChild) {
                    setLinkPosition(firstChild.getBoundingClientRect())
                }
            }
        }
    }, [isOpen])

    useEffect(() => {
        window.addEventListener('mousedown', handleClose)
        return () => {
            window.removeEventListener('mousedown', handleClose)
        }
    }, [])

    return (
        <Container ref={$containerRef}>
            {renderLink({ toggle: handleToggel })}
            {isOpen && (
                <ContantContainer $position={offSet} $linkPosition={linkPosition} ref={$contantRef}>
                    {renderContent({ close: handleClose })}
                </ContantContainer>
            )}
        </Container>
    )
}

export default Dropdown
