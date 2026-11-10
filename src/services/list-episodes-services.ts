import { FilterPodcastModel as PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    const data = await repositoryPodcast();

    return {
        statusCode: data.length > 0 ? statusCode.OK : statusCode.NOCONTENT,
        body: data,
    };
};