import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';
import { Spinner } from './common';

class EmployeeList extends Component {
	componentWillMount(){
		this.state = {employeesLoaded: false};
		this.props.employeesFetch();
		this.createDataSource(this.props);		
	}

	componentWillReceiveProps(nextProps){
		// nextProps are the next set of props that this component
		// will be rendered with this.props is still the old set props

		this.createDataSource(nextProps);	
	}

	createDataSource({employees}){
		this.setState({employeesLoaded: true});

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}	

	renderRow(employee){
		return <EmployeeListItem employee={employee} />
	}

	render() {
		if(this.state.employeesLoaded){
			if(this.dataSource.getRowCount()){
				return (
					<ListView 
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={this.renderRow}
					/>
				);
			}
			return <Text style={{textAlign:'center'}}>Your employees list is empty.</Text>;
		}

		return <Spinner/>;
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);