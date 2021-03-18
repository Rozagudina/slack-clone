import React from "react"
import styled from "styled-components"
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const Header = () => {
    return (
        <HeaderContainer>
            {/* <h1>slack</h1> */}
            {/* Header Left  */}
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon/>

            </HeaderLeft>

            {/* Header Search */}

            {/* Header Right */}
 
        </HeaderContainer>
    )
}
export default Header;

const HeaderContainer = styled.div
`display:flex;
`;
const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;

