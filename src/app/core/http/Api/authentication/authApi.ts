import { API } from '../api'

export class AuthApi {
	public static Login = () => {
		return `${API}/login`
	}
}
