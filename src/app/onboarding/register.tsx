import React from "react";
import { PageContainer } from "@/components/ui/Containers";
import FormAuth from "@/components/forms/FormAuth";
import { FormType } from "@/types/enums";

const register = () => {
	return (
		<PageContainer>
			<FormAuth type={FormType["register"]} />
		</PageContainer>
	);
};

export default register;
