import { View, Text, TextInput } from "react-native";
import React from "react";

interface SingleInputProps {
	set: (value: string) => void;
	value: string;
	label: string;
}

const SingleInput = (props: SingleInputProps) => {
	const { set, value, label } = props;
	return (
		<View className="mb-4 w-full">
			<Text className="mb-2">{label}</Text>
			<TextInput
				className="text-base p-2 border border-gray-300 rounded-lg w-full"
				keyboardType="numeric"
				onChangeText={set}
				value={value}
			/>
		</View>
	);
};

export default SingleInput;
