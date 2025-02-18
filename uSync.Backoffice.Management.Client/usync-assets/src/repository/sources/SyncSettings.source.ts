import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';
import { SettingsService } from '@jumoo/uSync';

export class uSyncSettingsDataSource {
	#host: UmbControllerHost;

	constructor(host: UmbControllerHost) {
		this.#host = host;
	}

	async getSettings() {
		return (await tryExecuteAndNotify(this.#host, SettingsService.getSettings())).data
			?.data;
	}

	async getHandlerSettings(setName: string) {
		return (
			await tryExecuteAndNotify(
				this.#host,
				SettingsService.getHandlerSetSettings({ query: { id: setName } }),
			)
		).data?.data;
	}

	async getAddons() {
		return await tryExecuteAndNotify(this.#host, SettingsService.getAddOns());
	}
}
