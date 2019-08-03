import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization:
				'Client-ID 7ec34d16f48c52c61e373784bc96c1b4c2f38beec7db507b4064495a946f9265'
			}
});