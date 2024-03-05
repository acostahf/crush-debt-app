import { auth, db } from "@/services/firebaseConfig";
import { OnboardingProps } from "@/types";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (props: OnboardingProps) => {
	const { email, password } = props;
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// await emailVerification();
		const user = userCredential.user;

		// Add user document in Firestore
		const userRef = doc(db, "users", user.uid);
		await setDoc(userRef, {
			...props,
			createdAt: new Date(),
		});
		return user;
	} catch (error) {
		console.log("User not Registered", error);
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

export const signout = async () => {
	try {
		const resp = await auth.signOut();
		console.log("User Logged Out", resp);
	} catch (error) {
		console.log("User not Logged Out", error);
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
