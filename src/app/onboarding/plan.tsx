import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import NextStepBtn from "@/components/buttons/nextStepBtn";

const Plan = () => {
	const [selectedMethod, setSelectedMethod] = useState("");

	const methods = [
		{ id: "snowball", label: "Snowball Method" },
		{ id: "avalanche", label: "Avalanche Method" },
	];

	return (
		<View className="flex-1 items-center justify-center p-4 bg-white">
			<Text className="text-2xl font-bold mb-6">Choose Your Plan</Text>

			<View className="flex-row justify-center items-center">
				{methods.map((method) => (
					<Pressable
						key={method.id}
						className={`w-40 h-40 m-2 justify-center items-center rounded-lg border-2 ${
							selectedMethod === method.id
								? "bg-blue-400 border-blue-400"
								: "bg-blue-200 border-transparent"
						}`}
						onPress={() => setSelectedMethod(method.id)}
					>
						<Text className="text-center px-2">{method.label}</Text>
					</Pressable>
				))}
			</View>

			<NextStepBtn />
		</View>
	);
};

export default Plan;
