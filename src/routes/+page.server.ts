import type { Actions } from './$types';
import { API_KEY } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const query = form.get('query');
		const field = form.get('field');
		const result = await fetch(`https://api.api-ninjas.com/v1/exercises?${field}=${query}`, {
			method: 'GET',
			headers: { 'X-Api-Key': API_KEY, 'content-type': 'appication/json' }
		}).then((data) => {
			return data.json();
		});

		return { result };
	}
};
