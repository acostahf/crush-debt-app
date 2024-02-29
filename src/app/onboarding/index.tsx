import NextStepBtn from "@/components/buttons/NextStepBtn";
import {
	ContentContainer,
	HeaderContainer,
	PageContainer,
	SectionContainer,
} from "@/components/ui/Containers";
import { Link, router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";

export default function Page() {
	return (
		<PageContainer>
			<ContentContainer>
				<HeaderContainer>
					<Text className={`text-lg`}>You got this</Text>
					<Text className={`font-bold text-3xl text-center`}>
						Let's Crush Debt together
					</Text>
				</HeaderContainer>
				<SectionContainer>
					<Button
						title="Start Now"
						onPress={() => router.replace("/onboarding/welcome")}
					/>
					<Button
						title="TEST REGISTER"
						onPress={() => router.replace("/onboarding/register")}
					/>
				</SectionContainer>
			</ContentContainer>
		</PageContainer>
	);
}
