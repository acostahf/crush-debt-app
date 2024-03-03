import {
	ContentContainer,
	HeaderContainer,
	PageContainer,
} from "@/components/ui/Containers";
import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";
import Dashboard from "./(tabs)/dashboard";

export default function Page() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	return <>{user ? <AuthenticatedScreen /> : <HomeScreen />}</>;
}

export const HomeScreen = () => {
	return (
		<PageContainer>
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
		</PageContainer>
	);
};

export const AuthenticatedScreen = () => {
	return (
		<PageContainer>
			<Dashboard />
		</PageContainer>
	);
};
