import styled from "styled-components";
import React, { chatRef, useState } from "react";
import { Button } from "@material-ui/core";
import { db,auth } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState("");
    const[user]=useAuthState (auth)
    console.log(channelId);

	const sendMessage = (e) => {
        e.preventDefault();//prevents refresh
        if(!channelId) {

            return false;
            // console.log(channelId);
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
					message: input,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					user: user.displayName,
					userImage:user.photoURL,
						// "https://avatars.slack-edge.com/2020-11-17/1506538311347_a2df58c2713d8c9ce7c1_72.jpg",
        });
        setInput('');

    };
    chatRef?.current?.scrollIntoView({
			behavior: "smooth",
		});

	return (
		<ChatInputContainer>
			<form>
				<input value={input} onChange={(e) =>setInput(e.target.value)} placeholder={"Message #room"} />
				<Button type="Submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60px;
        border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}
    > form > button{
        display:none !important;
    }
`;
