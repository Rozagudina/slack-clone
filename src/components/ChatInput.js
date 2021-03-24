import styled from "styled-components";
import React from "react";
import { Button } from "@material-ui/core";

function ChatInput({ channelName, channelId }) {
	const sendMessage = (e) => {
		e.preventDefualt();
	};

	return (
		<ChatInputContainer>
			<form>
				<input type="text" placeholder={"Message #room"} />
				<Button type="Submit" onClick={sendMessage}>
					Send'
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div``;
