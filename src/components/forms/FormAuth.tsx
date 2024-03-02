import { Text, View, Pressable, Button } from "react-native";
import { useForm } from "react-hook-form";
import Constants from "expo-constants";
import colors from "../../styles/colors";
import { IFormAuthProps } from "@/types";
import { en } from "@/constants";
import { FormType } from "@/types/enums";
import {
	ContentContainer,
	HeaderContainer,
	SectionContainer,
} from "../ui/Containers";
import { router } from "expo-router";
import CustomInput from "../inputs/CustomInput";
import { onSubmitAuth } from "@/utils";

const FormAuth = ({
	type = FormType["login"],
	title = en.FormContent[type].title,
}: IFormAuthProps) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const FormContent = en.FormContent;

	return (
		<SectionContainer>
			<HeaderContainer>
				<Text className={styles.headerText}>{title}</Text>
			</HeaderContainer>
			<ContentContainer className={styles.container}>
				<CustomInput
					name="email"
					placeholder="email"
					control={control}
					rules={FormContent.validation.email.rules}
				/>
				<CustomInput
					name="password"
					placeholder="password"
					control={control}
					secureTextEntry
					rules={FormContent.validation.password.rules}
				/>
				<View className={styles.buttonContainer}>
					<Button
						onPress={handleSubmit((data) => onSubmitAuth(type, data))}
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
	container: `flex flex-col items-center gap-10 pt-${Constants.statusBarHeight} max-w-350`,
	headerText: `font-bold text-3xl text-center`,
	buttonContainer: "flex flex-col justify-center items-center gap-2",
};

export default FormAuth;
