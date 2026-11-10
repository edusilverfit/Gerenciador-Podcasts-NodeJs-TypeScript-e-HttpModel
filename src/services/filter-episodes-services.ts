import { FilterPodcastModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (requestUrl?: string):Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }


    const url = new URL(requestUrl ?? "/", "http://localhost");
    const podcastName = url.searchParams.get("p") ?? "";

    const data = await repositoryPodcast(podcastName);


    responseFormat.statusCode = 
        data.length !== 0 ? statusCode.OK : statusCode.NOCONTENT

    responseFormat.body = data;

    return responseFormat;
};