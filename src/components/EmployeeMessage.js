import Communications from 'react-native-communications';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class EmployeeMessage extends Component {
	constructor(){
		super();
		this.state = {text:''};
	}

	sendMessage() {
		Communications.text(this.props.employee.phone, this.state.text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Text>{this.props.employee.name}</Text>
				</CardSection>
				<CardSection>
					<Input 
						multiline
						placeholder="Enter your text"
						autoCorrect={true}value={this.props.text}
						onChangeText={ value => this.setState({text: value}) }
					/>
				</CardSection>
				<CardSection>
					<Button whenPress={this.sendMessage.bind(this)}>
						Send Text
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeMessage;