import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Input, Button, SelectInput } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeSave } from '../actions';

class EmployeeCreate extends Component {
	onButtonPress(){
		if(this.props.employee){
			this.props.employeeSave(
				this.props.name,
				this.props.phone,
				this.props.shift,
				this.props.employee.uid
			);
		} else {
			this.props.employeeCreate(
				this.props.name, 
				this.props.phone, 
				this.props.shift = this.props.shift || 'Monday'
			);
		}
	}

	componentWillMount(){
		if(this.props.employee){
			_.each(this.props.employee, (value, prop) =>{
				this.props.employeeUpdate({prop, value});
			});
		}
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Maria Alejandra Romero"
						value={this.props.name}
						onChangeText={ value => this.props.employeeUpdate({prop: 'name', value}) }
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="011 4335 3355"
						value={this.props.phone}
						onChangeText={ value => this.props.employeeUpdate({prop: 'phone', value}) }
					/>
				</CardSection>
				<CardSection>
					<SelectInput
						label="Shift"
						selectedValue={this.props.shift}
						onValueChange={value=>this.props.employeeUpdate({prop:'shift', value})}
						items={DAYS}
					/>
				</CardSection>
				<CardSection>
					<Button whenPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
};

const DAYS = [{
	value: "Monday",
	label: "Monday"
},{
	value: "Tuesday",
	label: "Tuesday"
},{
	value: "Wednesday",
	label: "Wednesday"
},{
	value: "Thursday",
	label: "Thursday"
},{
	value: "Friday",
	label: "Friday"
},{
	value: "Saturday",
	label: "Saturday"
},{
	value: "Sunday",
	label: "Sunday"
}]

const mapStateToProps = (state) => {
	return {
		name: state.employeeForm.name,
		phone: state.employeeForm.phone,
		shift: state.employeeForm.shift
	};
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, employeeSave })(EmployeeCreate);