import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";
import useOnboardingStore from "@/store/onboardingStore";

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
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">Select Your Goals</Text>

			<View className="flex-row flex-wrap justify-center items-center">
				{goalsList.map((goal, i) => (
					<Pressable
						key={`goal ${i}`}
						className={`w-40 h-40 m-2 justify-center items-center rounded-lg border-2 ${
							selectedGoals.includes(goal)
								? "bg-blue-400 border-blue-400"
								: "bg-blue-200 border-transparent"
						}`}
						onPress={() => toggleGoal(goal)}
					>
						<Text className="text-center px-2">{goal}</Text>
					</Pressable>
				))}
			</View>

			<NextStepBtn />
		</View>
	);
};

export default Goals;
