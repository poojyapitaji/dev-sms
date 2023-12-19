import { useEffect, useState } from 'react'
import pubsub from 'sweet-pubsub'
import { v4 as uuidv4 } from 'uuid'
import ReactDOM from 'react-dom'
import { CloseIcon, Container, InfoImg, Text, ToastContainer } from './styles'
import images from '../../assets/images'
import theme from '../../utils/theme'

const Toast = ({ position = 'top-right', withCloseIcon = false, timeout = 5000, ...rest }) => {
    const [toast, setToast] = useState([])

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
        setToast((prevToast) => (prevToast ? [...prevToast, newToast] : [newToast]))
        setTimeout(() => {
            removeToast(id)
        }, timeout)
    }

    const removeToast = (id) => {
        const toastElement = document.getElementById(id)
        if (toastElement) {
            const ani = toastElement.animate(
                toastCloseAnimation[position],
                theme.animation.defaultAnimationSetting,
            )
            ani.onfinish = () => {
                const filtredToast = toast.filter((t) => t.id !== id)
                setToast(filtredToast)
            }
        }
    }

    const generateToast = (toast) => {
        return (
            <Container {...rest} id={toast.id} key={toast.id} $position={position}>
                <InfoImg src={toastImages[toast.type]} alt="" />
                <Text>{toast?.data}</Text>
                {withCloseIcon && (
                    <CloseIcon
                        src={images.icons.close}
                        alt=""
                        title="Close"
                        onClick={() => removeToast(toast?.id)}
                    />
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
        toast.length > 0 &&
        ReactDOM.createPortal(
            <ToastContainer $position={position}>
                {toast.map((toast) => generateToast(toast))}
            </ToastContainer>,
            $root,
        )
    )
}

export default Toast
