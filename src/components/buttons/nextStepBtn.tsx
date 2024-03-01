import { View, Text, Button } from "react-native";
import React from "react";
import { router, usePathname } from "expo-router";
import { OnboardingSteps } from "@/types/enums";

const NextStepBtn = () => {
	const pathname = usePathname();
	const parsePathname = pathname.split("/").pop();

	const handleNext = () => {
		const nextStep = OnboardingSteps[OnboardingSteps[parsePathname] + 1];
		if (OnboardingSteps[parsePathname] === 5) {
			router.push("/dashboard");
			return;
		}
		router.push(`/onboarding/${nextStep}`);
	};

	return <Button title="Next" onPress={handleNext} />;
};

export default NextStepBtn;
