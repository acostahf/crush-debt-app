import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";

const Goals = () => {
	const goals = [
		{ id: "save", label: "Save Money" },
		{ id: "invest", label: "Invest" },
		{ id: "debt", label: "Pay Off Debt" },
		{ id: "travel", label: "Travel More" },
		{ id: "retire", label: "Retire Early" },
	];

	const [selectedGoals, setSelectedGoals] = useState([]);

	const toggleGoal = (goalId) => {
		if (selectedGoals.includes(goalId)) {
			setSelectedGoals(selectedGoals.filter((id) => id !== goalId));
		} else {
			setSelectedGoals([...selectedGoals, goalId]);
		}
	};

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">Select Your Goals</Text>

			<View className="flex-row flex-wrap justify-center items-center">
				{goals.map((goal) => (
					<Pressable
						key={goal.id}
						className={`w-40 h-40 m-2 justify-center items-center rounded-lg border-2 ${
							selectedGoals.includes(goal.id)
								? "bg-blue-400 border-blue-400"
								: "bg-blue-200 border-transparent"
						}`}
						onPress={() => toggleGoal(goal.id)}
					>
						<Text className="text-center px-2">{goal.label}</Text>
					</Pressable>
				))}
			</View>

			<NextStepBtn />
		</View>
	);
};

export default Goals;
