import React from 'react'
import { Menu , Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledMenu = styled(Menu)`
    &&&{
        background: rgba(255, 255, 255, 0.98);
        border:none;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        z-index:20000;
    }
`

const StyledLogo = styled(Image)`
    &&&{
        width:20px;
        height:20px;
    }
`
const StyledHeader = styled(Menu.Item)`
    &&&{
        @media all and (max-width:50em){
            display: none;
        }
`

export {
    StyledMenu,
    StyledLogo,
    StyledHeader,
}