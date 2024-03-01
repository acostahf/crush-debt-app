export const en = {
	FormContent: {
		login: {
			title: "Login",
			btnPrimaryText: "Login",
			subtext: "Don't have an account?",
			subtextLinkText: "Sign Up",
			subtextLinkPath: `/onboarding/register`,
		},
		register: {
			title: "Sign Up",
			btnPrimaryText: "Sign Up",
			subtext: "Already have an account?",
			subtextLinkText: "Login",
			subtextLinkPath: "/login",
		},
	},
	onboarding: {
		goals: {
			title: "Select Your Goals",
			goalsList: [
				"Save Money",
				"Invest",
				"Pay Off Debt",
				"Travel More",
				"Retire Early",
			],
		},
		welcome: {
			title: "You got this",
			subtitle: "Let's Crush Debt together",
			buttons: {
				startNow: "Start Now",
				register: "TEST REGISTER",
			},
		},
		obligations: {
			title: "Household Obligations",
			subtitle: "How many dependents do you have?",
			options: ["1", "2", "3", "4", ">=5"],
		},
		personal: {
			title: "Personal Information",
			inputs: {
				username: "Username",
				age: "Age",
			},
		},
		plan: {
			title: "Choose Your Plan",
			methods: ["Snowball Method", "Avalanche Method"],
		},
		time: {
			title: "Time Allocation",
			inputs: {
				working: "Hours Spent Working",
				free: "Hours of Free Time",
				familyAndFriends: "Time with Friends & Family",
			},
		},
	},
};
