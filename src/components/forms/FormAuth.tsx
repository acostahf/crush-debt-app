import { Text, View, TextInput, Pressable, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import colors from "../../styles/colors";
import { login, signUp } from "@/services/auth";
import { IFormAuthProps, IFormFieldsRegister } from "@/types";
import { User } from "firebase/auth";
import { FormContent } from "@/constants";
import { FormType } from "@/types/enums";
import {
	ContentContainer,
	HeaderContainer,
	SectionContainer,
} from "../ui/Containers";
import { router } from "expo-router";

const FormAuth = ({
	type = FormType["login"],
	title = FormContent[type].title,
}: IFormAuthProps) => {
	const {
		register,
		setValue,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = async (data: IFormFieldsRegister) => {
		try {
			if (data) {
				let res: User | null;
				console.log(JSON.stringify(data));
				switch (type) {
					case FormType["login"]:
						res = await login(data.email, data.password);
						break;

					case FormType["register"]:
						res = await signUp(data.email, data.password);
						break;
					default:
						break;
				}
				console.log("User Data:", res);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onChange = (arg) => {
		return {
			value: arg.nativeEvent.text,
		};
	};

	return (
		<SectionContainer>
			<HeaderContainer>
				<Text className={styles.headerText}>{title}</Text>
			</HeaderContainer>
			<ContentContainer className={styles.container}>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="name@example.com"
							placeholderTextColor={colors.neutral[500]}
							className={styles.input}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
						/>
					)}
					name="email"
					rules={{ required: true }}
				/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="password"
							placeholderTextColor={colors.neutral[500]}
							className={styles.input}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
						/>
					)}
					name="password"
					rules={{ required: true }}
				/>
				<View className={styles.buttonContainer}>
					<Button
						onPress={handleSubmit(onSubmit)}
						title={FormContent[type].btnPrimaryText}
					/>
					<View className="flex w-full flex-row justify-start items-center gap-2">
						<Text>{FormContent[type].subtext}</Text>
						<Pressable
							onPress={() =>
								router.replace(`${FormContent[type].subtextLinkPath}`)
							}
						>
							<Text style={{ color: colors.neutral[500] }}>
								{FormContent[type].subtextLinkText}
							</Text>
						</Pressable>
					</View>
				</View>
			</ContentContainer>
		</SectionContainer>
	);
};

const styles = {
	container: `flex flex-col gap-10 justify-center items-center pt-${Constants.statusBarHeight} max-w-350`,
	headerText: `font-bold text-3xl text-center`,
	input: `border-1 bg-white border-${colors.neutral[300]} p-5 text-${colors.neutral[700]} rounded-4 w-full`,
	buttonContainer: "flex flex-col justify-center items-center gap-2",
};

export default FormAuth;
