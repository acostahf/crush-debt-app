import { auth } from "@/services/firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

export const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// await emailVerification();
		const user = userCredential.user;
		return user;
	} catch (error) {
		throw error;
	}
};

export const login = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		return user;
	} catch (error) {
		console.log("User not Logged In", error);
		throw error;
	}
};

// export const emailVerification = async () => {
// 	const user = auth.currentUser;
// 	try {
// 		await sendEmailVerification(user, {
// 			url: "http://localhost:3000/",
// 		}).then(() => {
// 			console.log("Email Verified");
// 		});
// 	} catch (error) {
// 		console.log("Email not Verified", error);
// 		throw error;
// 	}
// };
