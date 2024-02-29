import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";
import SquareBtn from "@/components/buttons/squareBtn";

const Goals = () => {
	const { data, setGoals } = useOnboardingStore();
	const { goals } = data;
	const goalsList = [
		"Save Money",
		"Invest",
		"Pay Off Debt",
		"Travel More",
		"Retire Early",
	];

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
			<Text className={styles.container}>Select Your Goals</Text>

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
	title: `text-2xl font-bold mb-6`,
};

export default Goals;
