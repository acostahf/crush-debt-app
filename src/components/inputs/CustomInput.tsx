import { Text, TextInput, View } from "react-native";
import React from "react";
import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import colors from "@/styles/colors";

interface ICustomInputProps {
	control: any;
	name: string;
	placeholder: string;
	secureTextEntry?: boolean;
	rules?:
		| Omit<
				RegisterOptions<FieldValues, string>,
				"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
		  >
		| undefined;
}
const CustomInput = ({
	control,
	name,
	placeholder,
	secureTextEntry,
	rules = {},
}: ICustomInputProps) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error },
			}) => (
				<>
					<View className={styles.inputContainer}>
						<TextInput
							placeholder={placeholder}
							placeholderTextColor={colors.neutral[500]}
							onChangeText={(value) => onChange(value)}
							value={value}
							onBlur={onBlur}
							className={error ? styles.input.error : styles.input.default}
							secureTextEntry={secureTextEntry}
						/>
						{error && (
							<Text className={styles.inputError}>{error.message}</Text>
						)}
					</View>
				</>
			)}
		/>
	);
};

const styles = {
	inputContainer: `w-full`,
	input: {
		default: `border bg-white border-neutral-300 p-5 text-color-neutral-700 rounded-4`,
		error: `border bg-white p-5 text-color-neutral-700 rounded-4 border-red-500`,
	},
	inputError: `text-red-500 text-xs py-1`,
};

export default CustomInput;
