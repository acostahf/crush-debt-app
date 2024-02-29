import { Text } from "react-native";
import React from "react";
import {
	ContentContainer,
	HeaderContainer,
	ScreenContainer,
} from "@/components/ui/Containers";

const login = () => {
	return (
		<ScreenContainer>
			<ContentContainer className="px-10">
				<HeaderContainer>
					<Text>LOGIN FORM HERE...</Text>
				</HeaderContainer>
			</ContentContainer>
		</ScreenContainer>
	);
};

export default login;
