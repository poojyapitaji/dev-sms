import pubsub from 'sweet-pubsub'
import { v4 as uuidv4 } from 'uuid'

const toast = {
    success: (data) => pubsub.emit('show-toast', { type: 'success', data }),
    info: (data) => pubsub.emit('show-toast', { type: 'info', data }),
    warning: (data) => pubsub.emit('show-toast', { type: 'warning', data }),
    danger: (data) => pubsub.emit('show-toast', { type: 'danger', data }),
}

export default toast
