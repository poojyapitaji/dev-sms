import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay } from './styles'

const Modal = ({ renderLink = () => {}, renderContent = () => {} }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const $overlayRef = useRef(null)
    const $modalRef = useRef(null)

    const $root = document.getElementById('root')

    useEffect(() => {
        if (isClosing) {
            const timeoutId = setTimeout(() => {
                setIsClosing(false)
                setIsOpen(false)
            }, 290)

            return () => clearTimeout(timeoutId)
        }
    }, [isClosing])

    const handleModalOpen = () => setIsOpen(true)

    const handleModalClose = () => setIsClosing(true)

    return (
        <>
            {renderLink({ open: handleModalOpen })}
            {isOpen &&
                ReactDOM.createPortal(
                    <Overlay ref={$overlayRef} $isClosing={isClosing}>
                        <Container ref={$modalRef} $isClosing={isClosing}>
                            {renderContent({ close: handleModalClose })}
                        </Container>
                    </Overlay>,
                    $root,
                )}
        </>
    )
}

export default Modal
