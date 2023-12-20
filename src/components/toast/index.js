import { useEffect, useState } from 'react'
import pubsub from 'sweet-pubsub'
import { v4 as uuidv4 } from 'uuid'
import ReactDOM from 'react-dom'
import { CloseIcon, Container, InfoImg, ProgressBar, Text, ToastContainer } from './styles'
import images from '../../assets/images'
import theme from '../../utils/theme'

const Toast = ({
    position = 'top-right',
    withCloseIcon = false,
    timeout = 5000,
    autoClose = true,
    showIcons = true,
    withProgress = false,
    ...rest
}) => {
    const [toasts, setToasts] = useState([])

    const $root = document.getElementById('root')

    const toastImages = {
        success: images.icons.check_badge,
        warning: images.icons.shield_exclamation,
        info: images.icons.information_circle,
        danger: images.icons.x_circle,
    }

    const toastCloseAnimation = {
        'top-right': theme.animation.slideOutRightSmallJS,
        'top-left': theme.animation.slideOutLeftSmallJS,
        'bottom-left': theme.animation.slideOutLeftSmallJS,
        'bottom-right': theme.animation.slideOutRightSmallJS,
        'top-center': theme.animation.slideOutUpSmallJS,
        'bottom-center': theme.animation.slideOutDownSmallJS,
    }

    const addToast = (toast) => {
        const id = uuidv4()
        const newToast = {
            id,
            ...toast,
        }
        setToasts((prevToast) => (prevToast ? [newToast, ...prevToast] : [newToast]))

        if (autoClose) {
            setTimeout(() => {
                removeToast(id)
            }, timeout)
        }
    }

    const removeToast = (id) => {
        setToasts((prevToasts) => {
            const toastElement = document.getElementById(id)

            if (toastElement) {
                const ani = toastElement.animate(
                    toastCloseAnimation[position],
                    theme.animation.defaultAnimationSetting,
                )

                ani.onfinish = () => {
                    const filteredToasts = prevToasts.filter((t) => t.id !== id)
                    setToasts(filteredToasts)
                }
            }

            return prevToasts
        })
    }

    const generateToast = (toast) => {
        return (
            <Container {...rest} id={toast.id} key={toast.id} $position={position}>
                {showIcons && <InfoImg src={toastImages[toast.type]} alt="" />}
                <Text $showIcon={showIcons} $closeIcon={withCloseIcon} $progress={withProgress}>
                    {toast?.data}
                </Text>
                {withCloseIcon && (
                    <CloseIcon
                        src={images.icons.close}
                        alt=""
                        title="Close"
                        onClick={() => removeToast(toast?.id)}
                    />
                )}
                {withProgress && autoClose && (
                    <ProgressBar $animationDuration={timeout} $color={toast.type} />
                )}
            </Container>
        )
    }

    useEffect(() => {
        pubsub.on('show-toast', addToast)
        return () => {
            pubsub.off('show-toast', addToast)
        }
    }, [])

    return (
        toasts.length > 0 &&
        ReactDOM.createPortal(
            <ToastContainer $position={position}>
                {toasts.map((toast) => generateToast(toast))}
            </ToastContainer>,
            $root,
        )
    )
}

export default Toast
