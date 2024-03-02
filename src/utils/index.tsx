import { login, signUp } from "@/services/auth";
import { FormType } from "@/types/enums";
import { router } from "expo-router";
import { User } from "firebase/auth";

export const onSubmitAuth = async (type: FormType, data: any) => {
	try {
		console.log(data);
		if (data) {
			let res: User | null;
			switch (type) {
				case FormType["login"]:
					res = await login(data.email, data.password);
					console.log(res);
					break;

				case FormType["register"]:
					res = await signUp(data.email, data.password);
					//TODO: redirect to onbaording flow if successful or move to end of stack
					if (res) {
						router.replace("/onboarding/personal");
					}
					break;
				default:
					break;
			}
		}
	} catch (error) {
		console.log(error);
	}
};
