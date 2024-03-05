import { useEffect, useState } from "react";
import "../styles/global.css";
import { Slot, useRouter } from "expo-router";
import { auth } from "@/services/firebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";

export default function Layout() {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	useEffect(() => {
		if (user) {
			router.replace("/(app)/dashboard");
		} else {
			router.replace("/(public)/welcome");
		}
	}, [user]);

	return <Slot />;
}
