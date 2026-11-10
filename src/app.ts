import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controllers";
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";



export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
        const url = new URL(request.url ?? "/", "http://localhost");

        if (request.method === httpMethod.GET && url.pathname === Routes.LIST) {
            await getListEpisodes(request, response);
            return;
        }

        if (request.method === httpMethod.GET && url.pathname === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
            return;
        }

        response.writeHead(404, { "Content-type": "application/json" });
        response.end(JSON.stringify({ message: "Rota não encontrada" }));
    }
