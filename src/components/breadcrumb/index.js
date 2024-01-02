import { Arrow, Container, Link } from './styles'
import images from '../../assets/images'
import { Fragment } from 'react'

const Breadcrumb = ({
    options = [],
    size = 'normal',
    divider = null,
    customDivider = false,
    color = 'primary',
}) => {
    const currentPathname = window.location.pathname

    const handleClick = (e) => {
        e.preventDefault()

        if (e?.target?.href) {
            const path = e.target.getAttribute('href')
            window.history.pushState({}, '', path)
        }
    }

    const generateCrumbs = () => {
        return options.map((option, index) => {
            const path = `/${options.slice(0, index + 1).join('/')}`
            const active = currentPathname === option

            return (
                <Fragment key={option + index}>
                    <Link
                        href={path}
                        $size={size}
                        onClick={handleClick}
                        $color={color}
                        $active={active}
                    >
                        {option[0].toUpperCase() + option.slice(1).toLowerCase()}
                    </Link>
                    {customDivider
                        ? divider
                        : index !== options.length - 1 && (
                              <Arrow src={images.icons.arrow_right} alt="" $size={size} />
                          )}
                </Fragment>
            )
        })
    }

    return options.length ? <Container $color={color}>{generateCrumbs()}</Container> : null
}

export default Breadcrumb
