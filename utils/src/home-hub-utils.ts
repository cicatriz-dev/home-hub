import { FormValues } from './types';

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {
	console.log('Hello World! Módulo utililitário');
}

export const loginFunction = (data: FormValues) => {
	const authId = data.email.replace('@', '').replace('.', '').codePointAt(0);
	localStorage.setItem('auth', JSON.stringify(data));
	return location.replace(`/dashboard/${authId}/`);
};
