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

export default Welcome;
