import { API } from '../api'

export class UserApi {
	public static getUserInfo() {
		return `${API}/user/getUserInfo`
	}
	public static chartProftxBTC(params?: string) {
		return `${API}/user/chartProfitxBTC${params}`
	}
	public static chartPositionXTime(params?: string) {
		return `${API}/user/chartPositions${params}`
	}
	public static chartGainxLose(params?: string) {
		return `${API}/user/chartGains${params}`
	}
	public static chartPositionxTime() {
		return `${API}/user/chartPositionxTime`
	}
	public static btcChanges() {
		return `${API}/user/btcChanges`
	}

	public static piechartInfoFreeUser() {
		return `${API}/user/pieChartInfoFreeUser`
	}

	public static pieChartInfoPPP() {
		return `${API}/user/pieChartInfoPosition`
	}
}
