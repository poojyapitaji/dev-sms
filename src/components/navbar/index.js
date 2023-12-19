import { useEffect, useState } from 'react'
import images from '../../assets/images'
import { Container, LeftContainer, Img, CenterContainer, RightContainer } from './styles'

const Navbar = () => {
    const [showSmallLogo, setShowsmallLogo] = useState(false)

    const handleSidebar = () => {
        const sidebar = document.querySelector('[data-identifier="sms-sidebar"]')
        const x = sidebar.getBoundingClientRect().x

        const animationStart = x < 0 ? '-100%' : '0'
        const animationEnd = x < 0 ? '0' : '-100%'

        sidebar.animate(
            [
                { transform: `translateX(${animationStart})` },
                { transform: `translateX(${animationEnd})` },
            ],
            {
                duration: 200,
                easing: 'ease-in-out',
                fill: 'forwards',
            },
        )
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
