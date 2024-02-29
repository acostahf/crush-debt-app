import { create } from "zustand";

interface OnboardingStore {
	username: string;
	age: string;
	workingHours: string;
	freeHours: string;
	familyAndFriendsHours: string;
	obligations: string;
	goals: string[];
	plan: string;
}

const useOnboardingStore = create<OnboardingStore>((set) => ({
	username: "",
	age: "",
	workingHours: "",
	freeHours: "",
	familyAndFriendsHours: "",
	obligations: "",
	goals: [],
	plan: "",
}));

export default useOnboardingStore;
