import { useEffect, useState } from 'react'
import images from '../../assets/images'
import { Container, LeftContainer, Img, CenterContainer, RightContainer } from './styles'
import theme from '../../utils/theme'

const Navbar = () => {
    const [showSmallLogo, setShowsmallLogo] = useState(false)

    const handleSidebar = () => {
        const sidebar = document.querySelector('[data-identifier="sms-sidebar"]')
        const x = sidebar.getBoundingClientRect().x
        const animation = x < 0 ? theme.animation.slideInLeftJS : theme.animation.slideOutLeftJS

        sidebar.animate(animation, theme.animation.defaultAnimationSetting)
    }

    useEffect(() => {
        if (window.innerWidth <= 991) {
            setShowsmallLogo(true)
        }
    }, [])

    return (
        <Container>
            <LeftContainer>
                <Img src={images.icons.handburger} alt="menu" $menuBtn onClick={handleSidebar} />
                <Img src={!showSmallLogo ? images.logo : images.logo_small} alt="logo" /> | School
                Name
            </LeftContainer>
            <CenterContainer></CenterContainer>
            <RightContainer></RightContainer>
        </Container>
    )
}

export default Navbar
