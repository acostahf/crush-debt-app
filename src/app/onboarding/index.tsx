import {
	ContentContainer,
	HeaderContainer,
	PageContainer,
	SectionContainer,
} from "@/components/ui/Containers";
import { Link, router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { en } from "@/constants";

export default function Page() {
	const { subtitle, title, buttons } = en.onboarding.welcome;
	return (
		<PageContainer>
			<ContentContainer>
				<HeaderContainer>
					<Text className={`text-lg`}>{title}</Text>
					<Text className={`font-bold text-3xl text-center`}>
						{subtitle}
					</Text>
				</HeaderContainer>
				<SectionContainer>
					<Button
						title={buttons.startNow}
						onPress={() => router.replace("/onboarding/personal")}
					/>
					<Button
						title={buttons.register}
						onPress={() => router.replace("/onboarding/personal")}
					/>
				</SectionContainer>
			</ContentContainer>
		</PageContainer>
	);
}
