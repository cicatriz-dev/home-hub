type FormValues = {
	email: string;
	password: string;
};

export const loginFunction = (data: FormValues) => {
	const authId = data.email.replace('@', '').replace('.', '').codePointAt(0);
	localStorage.setItem('auth', JSON.stringify(data));
	location.replace(`/dashboard/${authId}/`);
};

export const checkIsAuthenticated = () => {
	const auth = localStorage.getItem('auth');
	if (!auth) {
		return { authInfo: undefined, isAuthenticated: false };
	}
	const authObj = JSON.parse(auth);
	return { authInfo: authObj, isAuthenticated: true };
};
