import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface AppContextType {
	isLoading: boolean;
	user: any;
}
