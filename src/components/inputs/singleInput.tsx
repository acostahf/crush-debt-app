import { View, Text, TextInput } from "react-native";
import React from "react";
import { SingleInputProps } from "@/types";

const SingleInput = ({ set, value, label }: SingleInputProps) => {
	return (
		<View className={styles.container}>
			<Text className={styles.label}>{label}</Text>
			<TextInput
				className={styles.input}
				onChangeText={set}
				value={value}
			/>
		</View>
	);
};

const styles = {
	container: `mb-4 w-full`,
	label: `mb-2`,
	input: `text-base p-2 border border-gray-300 rounded-lg w-full`,
};

export default SingleInput;
