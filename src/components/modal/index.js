import { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Body, Container, Footer, Header, Overlay } from './styles'
import useOutsideClick from '../../hooks/useOutsideClick'
import theme from '../../utils/theme'

const Modal = ({
    renderLink = () => {},
    renderContent = () => {},
    renderHeader = () => {},
    renderFooter = () => {},
    outSideClickClose = false,
    showHeader = true,
    showFooter = false,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const $overlayRef = useRef(null)
    const $modalRef = useRef(null)

    useOutsideClick($modalRef, () => handleModalClose(), outSideClickClose)

    const $root = document.getElementById('root')

    const handleModalOpen = () => setIsOpen(true)

    const handleModalClose = () => {
        const overlay = $overlayRef.current
        if (overlay) {
            const modal = $modalRef.current
            overlay.animate(theme.animation.fadeOutJS, theme.animation.defaultAnimationSetting)
            if (modal) {
                const mo = modal.animate(
                    theme.animation.zoomOutSmallJS,
                    theme.animation.defaultAnimationSetting,
                )
                mo.onfinish = () => {
                    setIsOpen(false)
                }
            }
        }
    }

    return (
        <>
            {renderLink({ open: handleModalOpen })}
            {isOpen &&
                ReactDOM.createPortal(
                    <Overlay ref={$overlayRef}>
                        <Container ref={$modalRef}>
                            {showHeader && (
                                <Header>{renderHeader({ close: handleModalClose })}</Header>
                            )}
                            <Body>{renderContent({ close: handleModalClose })}</Body>
                            {showFooter && (
                                <Footer>{renderFooter({ close: handleModalClose })}</Footer>
                            )}
                        </Container>
                    </Overlay>,
                    $root,
                )}
        </>
    )
}

export default Modal
