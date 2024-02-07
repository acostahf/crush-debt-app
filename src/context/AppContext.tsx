import { AppContextType } from "@/types";
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		try {
			setUser({ name: "John Doe" });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				isLoading: isLoading,
				user: user,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error(
			"useAppContext must be used within AppContextProvider"
		);
	}
	return context;
};
