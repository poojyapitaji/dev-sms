import pubsub from 'sweet-pubsub'

const showToast = ({ type, data }) => {
    return new Promise((resolve) => {
        pubsub.emit('show-toast', { type, data, resolve })
    })
}

const toast = {
    success: (data) => showToast({ type: 'success', data }),
    info: (data) => showToast({ type: 'info', data }),
    warning: (data) => showToast({ type: 'warning', data }),
    danger: (data) => showToast({ type: 'danger', data }),
}

export default toast
