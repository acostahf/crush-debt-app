import {
	ContentContainer,
	HeaderContainer,
	ScreenContainer,
} from "@/components/ui/Containers";
import { Link, Stack } from "expo-router";
import React from "react";

export default function Page() {
	return <HomeScreen />;
}

export const HomeScreen = () => {
	return (
		<ScreenContainer>
			<Stack.Screen
				options={{
					headerRight: () => <Link href={"/login"}>Login</Link>,
				}}
			/>
			<ContentContainer className="px-9">
				<HeaderContainer>
					<Link href={"/onboarding"}>Create Account</Link>
				</HeaderContainer>
			</ContentContainer>
		</ScreenContainer>
	);
};
