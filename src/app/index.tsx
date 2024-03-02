import {
	ContentContainer,
	HeaderContainer,
	PageContainer,
} from "@/components/ui/Containers";
import { Link, Redirect, Stack, router } from "expo-router";
import React from "react";

export default function Page() {
	// TODO: replace with auth check
	// const user = true;
	// if (user) {
	// 	return <Redirect href="/dashboard" />;
	// }

	return <HomeScreen />;
}

export const HomeScreen = () => {
	return (
		<PageContainer>
			<ContentContainer className="px-9">
				<HeaderContainer>
					<Link href={"/login"}>Login</Link>
					<Link href={"/onboarding"}>Create Account</Link>
				</HeaderContainer>
			</ContentContainer>
		</PageContainer>
	);
};
