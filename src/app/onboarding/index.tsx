import {
	ContentContainer,
	HeaderContainer,
	ScreenContainer,
	SectionContainer,
} from "@/components/ui/Containers";
import React from "react";
import { Text } from "react-native";

const StartScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<HeaderContainer>
					<Text className={`text-lg`}>You got this</Text>
					<Text className={`font-bold text-3xl text-center`}>
						Let's Crush Debt together
					</Text>
				</HeaderContainer>
				<SectionContainer>
					<Text>OPTIONS HERE...</Text>
				</SectionContainer>
			</ContentContainer>
		</ScreenContainer>
	);
};
export default StartScreen;
