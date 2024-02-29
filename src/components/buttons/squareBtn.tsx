import React from "react";
import { Pressable, Text, View } from "react-native";

interface SquareBtnProps {
	arr: string[];
	item: string | string[];
	setItem: (value: string) => void;
	multiple?: boolean;
}

const SquareBtn = ({ arr, item, setItem, multiple }: SquareBtnProps) => {
	if (multiple) {
		return (
			<View className={styles.container}>
				{arr.map((option, index) => (
					<Pressable
						key={`${option}-${index}`}
						className={`${styles.default} ${
							item.includes(option) ? styles.active : styles.inactive
						}`}
						onPress={() => setItem(option)}
					>
						<Text className={styles.text}>{option}</Text>
					</Pressable>
				))}
			</View>
		);
	} else {
		return (
			<View className={styles.container}>
				{arr.map((option, index) => (
					<Pressable
						key={`${option}-${index}`}
						className={`${styles.default} ${
							item === option ? styles.active : styles.inactive
						}`}
						onPress={() => setItem(option)}
					>
						<Text className={styles.text}>{option}</Text>
					</Pressable>
				))}
			</View>
		);
	}
};

const styles = {
	container: `flex-row flex-wrap justify-center items-center`,
	default: `w-1/3 p-2 h-32 m-2 justify-center items-center rounded-lg border-2`,
	active: `bg-blue-400 border-blue-400`,
	inactive: `bg-blue-200 border-transparent`,
	text: `text-center px-2`,
};

export default SquareBtn;
