import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Header = () => {
	const [user, loading] = useAuthState(auth);
	return (
		<HeaderContainer>
			{/* <h1>slack</h1> */}
			{/* Header Left  */}
			<HeaderLeft>
				<HeaderAvatar
					onClick={() =>auth.signOut()}
					alt={user?.displayName}
					src={user?.photoURL} />
				<AccessTimeIcon />
			</HeaderLeft>
			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search" />
			</HeaderSearch>

			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
};
export default Header;
const HeaderRight = styled.div`
	cursor: pointer;
	flex: 0.3;
	display: flex;
	align-items: flex-end;
	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	text-align: center;
	background-color: #421f44;
	border-radius: 6px;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;
	> input {
		border: none;
		text-align: center;
		background-color: transparent;
		min-width: 30vw;
		outline: none;
		color: white;
	}
`;

const HeaderContainer = styled.div`
	color: red;
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--purple);
	color: white;
`;
const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;
	> .MuiSvgIcon-root {
		margin-right: 30px;
		margin-left: auto;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		color: var(--purple);
		opacity: 0.8;
	}
`;
