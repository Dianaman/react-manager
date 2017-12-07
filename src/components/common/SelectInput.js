import React from 'react';
import { View, Text, Picker } from 'react-native';

const SelectInput  = ({ label, onValueChange, selectedValue, items }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	const renderItems = () => {
		const pickerItems = [];
		items.forEach(item => {
			pickerItems.push( 
				<Picker.Item key={item.value} label={item.label} value={item.value}/> 
			);
		});

		return pickerItems;
	}

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{ label }</Text>
			<Picker
				selectedValue={selectedValue}
				onValueChange={onValueChange}
				style={inputStyle}
			>
				{renderItems()}
			</Picker>
		</View>
	)
}


const styles = {
	inputStyle: {
		flex:2
	},
	labelStyle: {
		fontSize:18,
		flex:1,
		paddingLeft:20
	},
	containerStyle:{
		flex:1,
		display:'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export { SelectInput };