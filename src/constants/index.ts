export const en = {
	FormContent: {
		validation: {
			newPassword: {
				rules: {
					required: "Password is required",
					minLength: {
						value: 6,
						message: "Password must be at least 6 characters",
					},
					pattern: {
						value:
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
						message:
							"Password must contain at least one uppercase letter, one lowercase letter,one number and one special character",
					},
				},
			},
			password: {
				rules: {
					required: "Password is required",
				},
			},
			email: {
				rules: {
					required: "Email is required",
					pattern: {
						value: /\S+@\S+\.\S+/,
						message: "Invalid email",
					},
				},
			},
		},
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
