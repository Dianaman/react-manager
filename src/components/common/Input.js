import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input  = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline }) => {
	const { inputStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			{renderLabel(label)}
			<TextInput
				secureTextEntry={secureTextEntry}
				multiline={multiline}
				numberOfLines={multiline ? 4 : 1}
				placeholder={placeholder}
				style={inputStyle}
				autoCorrect={false}
				value={ value }
				onChangeText={ onChangeText }
			/>
		</View>
	)
}

const styles = {
	inputStyle: {
		fontSize:18,
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

const renderLabel = (label) =>{
	if(label){
		return <Text style={styles.labelStyle}>{ label }</Text>;
	}
}

export { Input };