import { View } from "react-native";
import React from "react";
interface ContainerProps {
	className?: string;
	children?: Array<JSX.Element> | JSX.Element;
}

const SectionWrapper = ({ className, children }: ContainerProps) => {
	const defaultStyles =
		"container flex-col justify-center h-full w-full items-center";
	return <View className={`${defaultStyles} ${className}`}>{children}</View>;
};

export default SectionWrapper;
