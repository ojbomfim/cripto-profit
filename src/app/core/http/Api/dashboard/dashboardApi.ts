import { API } from '../api'

export class DashboardApi {
	public static fees = (params) => {
		return `${API}/results/fees/${params}`
	}

	public static results = () => {
		return `${API}/results`
	}

	public static orderInfo = () => {
		return `${API}/orderInfo`
	}

	public static averageInfo = () => {
		return `${API}/averageInfo`
	}
}
