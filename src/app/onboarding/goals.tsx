import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NextStepBtn from "@/components/buttons/NextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/SquareBtn";
import { en } from "@/constants";

const Goals = () => {
	const { data, setGoals } = useOnboardingStore();
	const { goals } = data;
	const { goalsList, title } = en.onboarding.goals;
	const [selectedGoals, setSelectedGoals] = useState(goals);

	const toggleGoal = (goal) => {
		if (selectedGoals.includes(goal)) {
			setSelectedGoals(selectedGoals.filter((g) => g !== goal));
		} else {
			setSelectedGoals([...selectedGoals, goal]);
		}
	};

	useEffect(() => {
		setGoals(selectedGoals);
	}, [selectedGoals]);

	return (
		<View className={styles.container}>
			<Text className={styles.title}>{title}</Text>
			<SquareBtn
				arr={goalsList}
				item={goals}
				setItem={toggleGoal}
				multiple
			/>
			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-2xl font-bold mb-2`,
};

export default Goals;
