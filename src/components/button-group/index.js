import { Conatainer } from './styles'

const ButtonGroup = ({ children }) => {
    return children && <Conatainer $childrenCount={children.length}>{children}</Conatainer>
}

export default ButtonGroup
