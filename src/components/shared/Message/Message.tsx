import React from 'react';
import { MessageValue } from '../../../types/store';
import './Message.css';

interface MessageProps {
	message: MessageValue;
	openModal(img: string, editable: boolean): void;
}

interface MessageState {
	imgs: Array<React.ReactElement>;
}

export default class Message extends React.PureComponent<MessageProps, MessageState> {
	state = {
		imgs: []
	}
	render(): React.ReactElement {
		return (
			<div className="bodyMessage">
				<div className="textMessage">
					{this.props.message.text}
					<div style={{
						maxHeight: '100px',
						display: 'flex'
					}}>
						{this.state.imgs}
					</div>
				</div>
			</div>
		);
	}

	componentDidMount(): void {
		const { files } = this.props.message;
		Object.keys(files).forEach(
			key => {
				const reader = new FileReader();
				reader.readAsDataURL(files[key]);
				reader.onloadend = (): void => {
					const id = Date.now();
					this.setState(prevState => ({
						imgs: prevState.imgs.concat(
							<img
								src={`${reader.result}`}
								className="imageMessage"
								alt=""
								key={key}
								onClick={(): void => this.props.openModal(String(reader.result), false)} />)
					})
					);
				};
			}
		);
	}
}