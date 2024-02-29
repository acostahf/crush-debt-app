import { create } from "zustand";

interface OnboardingStore {
	data: {
		username: string;
		age: string;
		workingHours: string;
		freeHours: string;
		familyAndFriendsHours: string;
		obligations: string;
		goals: string[];
		plan: string;
	};
	clear: () => void;
	setUsername: (value: string) => void;
	setAge: (value: string) => void;
	setWorkingHours: (value: string) => void;
	setFreeHours: (value: string) => void;
	setFamilyAndFriendsHours: (value: string) => void;
	setObligations: (value: string) => void;
	setGoals: (value: string[]) => void;
	setPlan: (value: string) => void;
}

const useOnboardingStore = create<OnboardingStore>((set, get) => ({
	data: {
		username: "",
		age: "",
		workingHours: "",
		freeHours: "",
		familyAndFriendsHours: "",
		obligations: "",
		goals: [],
		plan: "",
	},
	clear: () =>
		set({
			data: {
				username: "",
				age: "",
				workingHours: "",
				freeHours: "",
				familyAndFriendsHours: "",
				obligations: "",
				goals: [],
				plan: "",
			},
		}),
	setUsername: (state) =>
		set({ data: { ...get().data, username: state } }),
	setAge: (state) => set({ data: { ...get().data, age: state } }),
	setWorkingHours: (state) =>
		set({ data: { ...get().data, workingHours: state } }),
	setFreeHours: (state) =>
		set({ data: { ...get().data, freeHours: state } }),
	setFamilyAndFriendsHours: (state) =>
		set({ data: { ...get().data, familyAndFriendsHours: state } }),
	setObligations: (state) =>
		set({ data: { ...get().data, obligations: state } }),
	setGoals: (state) => {
		set({ data: { ...get().data, goals: state } });
	},
	setPlan: (state) => set({ data: { ...get().data, plan: state } }),
}));

export default useOnboardingStore;
