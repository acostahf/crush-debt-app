import NextStepBtn from "@/components/buttons/nextStepBtn";
import React from "react";
import { View, Text, Button } from "react-native";
import { signUp } from "@/services/auth";

const Welcome = () => {
	const handleSignUP = async () => {
		console.log("signing up");
		try {
			const resp = await signUp("testname@email.com", "testpassword");
			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View>
			<Text>welcome</Text>
			<Button title="signup" onPress={() => handleSignUP()} />
			<NextStepBtn />
		</View>
	);
};

const styles = {
	container: `flex-1 items-center justify-center p-4 bg-white`,
	title: `text-4xl font-bold text-center mb-6`,
	subtitle: `text-lg text-center mb-8`,
};

export default Welcome;
