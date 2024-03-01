import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
	className?: string;
	children?: Array<React.JSX.Element> | React.JSX.Element;
}

export const PageContainer = ({ className, children }: ContainerProps) => {
	const defaultStyles = "container mx-auto";
	return (
		<SafeAreaView className={`${defaultStyles} ${className}`}>
			{children}
		</SafeAreaView>
	);
};
export const SectionContainer = ({
	className,
	children,
}: ContainerProps) => {
	const defaultStyles = "px-5 py-10";
	return (
		<View className={`${defaultStyles} ${className}`}>{children}</View>
	);
};
export const ContentContainer = ({
	className,
	children,
}: ContainerProps) => {
	const defaultStyles = "py-10";
	return (
		<View className={`${defaultStyles} ${className}`}>{children}</View>
	);
};
export const HeaderContainer = ({
	className,
	children,
}: ContainerProps) => {
	const defaultStyles =
		"flex flex-col justify-center items-center text-center px-10 py-10";
	return (
		<View className={`${defaultStyles} ${className}`}>{children}</View>
	);
};
