import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { contentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/podcast-transfer-model";


const DEFAULT_CONTENT = { "Content-type": contentType.JSON };

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes();

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.end(content.statusCode === 204 ? undefined : JSON.stringify(content.body));
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.end(content.statusCode === 204 ? undefined : JSON.stringify(content.body));
};