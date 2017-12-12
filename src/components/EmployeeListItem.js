import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {
	goToEdit(){
		Actions.employeeAdmin({employee: this.props.employee});
	}

	messageEmployee(){
		Actions.employeeMessage({employee: this.props.employee});
	}

	render(){
		const { name } = this.props.employee;

		return(
			<TouchableWithoutFeedback 
				onPress={this.messageEmployee.bind(this)}
				onLongPress={this.goToEdit.bind(this)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>
							{name}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);

	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default EmployeeListItem;