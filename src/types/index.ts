import { SVGProps } from "react";
import { FormType } from "./enums";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};
export interface AppContextType {
	isLoading: boolean;
	user: any;
}
export type IFormAuthProps = {
	title?: string;
	type?: FormType;
};

export interface SquareBtnProps {
	arr: string[];
	item: string | string[];
	setItem: (value: string) => void;
	multiple?: boolean;
}

export interface SingleInputProps {
	set: (value: string) => void;
	value: string;
	label: string;
}
