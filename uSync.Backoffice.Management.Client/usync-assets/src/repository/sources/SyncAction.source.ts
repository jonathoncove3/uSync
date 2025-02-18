import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';
import { ActionsService, PerformActionRequest } from '@jumoo/uSync';

export class uSyncActionDataSource {
	#host: UmbControllerHost;

	constructor(host: UmbControllerHost) {
		this.#host = host;
	}

	async getActions() {
		return (await tryExecuteAndNotify(this.#host, ActionsService.getActions())).data
			?.data;
	}

	async performAction(request: PerformActionRequest) {
		return (
			await tryExecuteAndNotify(
				this.#host,
				ActionsService.performAction({
					body: request,
				}),
			)
		).data?.data;
	}

	async downloadFile(requestId: string) {
		return (
			await tryExecuteAndNotify(
				this.#host,
				ActionsService.download({
					query: {
						requestId: requestId,
					},
				}),
			)
		).data?.data;
	}

	async processUpload(fileId: string) {
		return (
			await tryExecuteAndNotify(
				this.#host,
				ActionsService.processUpload({
					query: {
						tempKey: fileId,
					},
				}),
			)
		).data?.data;
	}
}
