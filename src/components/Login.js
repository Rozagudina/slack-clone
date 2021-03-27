import { Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import { auth, provider } from "../firebase";

function Login() {
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};
	return (
		<Logincontainer>
			<LogininInnerContainer>
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg
"
				/>
				<h1>Sign in to Slack</h1>
				<Button type="submit" onClick={signIn}>
					Sign in with Google
				</Button>
			</LogininInnerContainer>
		</Logincontainer>
	);
}

export default Login;
const Logincontainer = styled.div`
	background-color: #f8f8f8;
	height: 100vh;
	display: grid;
	place-items: center;
`;
const LogininInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba (0, 0, 0, 0.24);
	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}
	> Button {
		margin-top: 50px;
		text-align: inherit !important;
		background-color: #0a8d48 !important;
		color: white;
	}
`;
