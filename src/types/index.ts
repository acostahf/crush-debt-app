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
export interface IFormFieldsRegister {
	email: string;
	password: string;
}
