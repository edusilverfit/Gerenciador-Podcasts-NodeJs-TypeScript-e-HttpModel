"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var http = __toESM(require("http"));

// src/repositories/podcasts-repository.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var pathData = import_path.default.join(__dirname, "../repositories/podcasts.json");
var repositoryPodcast = (podcastName) => __async(null, null, function* () {
  const language = "utf-8";
  const rawdata = import_fs.default.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawdata);
  if (podcastName) {
    jsonFile = jsonFile.filter((podcast) => podcast.podcastName === podcastName);
  }
  return jsonFile;
});

// src/services/list-episodes-services.ts
var serviceListEpisodes = () => __async(null, null, function* () {
  const data = yield repositoryPodcast();
  return {
    statusCode: data.length > 0 ? 200 /* OK */ : 204 /* NOCONTENT */,
    body: data
  };
});

// src/services/filter-episodes-services.ts
var serviceFilterEpisodes = (requestUrl) => __async(null, null, function* () {
  var _a;
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const url = new URL(requestUrl != null ? requestUrl : "/", "http://localhost");
  const podcastName = (_a = url.searchParams.get("p")) != null ? _a : "";
  const data = yield repositoryPodcast(podcastName);
  responseFormat.statusCode = data.length !== 0 ? 200 /* OK */ : 204 /* NOCONTENT */;
  responseFormat.body = data;
  return responseFormat;
});

// src/controllers/podcasts-controllers.ts
var getListEpisodes = (request, response) => __async(null, null, function* () {
  const content = yield serviceListEpisodes();
  response.writeHead(content.statusCode, { "Content-type": "application/json" /* JSON */ });
  response.end(content.statusCode === 204 ? void 0 : JSON.stringify(content.body));
});
var getFilterEpisodes = (request, response) => __async(null, null, function* () {
  const content = yield serviceFilterEpisodes(request.url);
  response.writeHead(content.statusCode, { "Content-type": "application/json" /* JSON */ });
  response.end(content.statusCode === 204 ? void 0 : JSON.stringify(content.body));
});

// src/app.ts
var app = (request, response) => __async(null, null, function* () {
  var _a;
  const url = new URL((_a = request.url) != null ? _a : "/", "http://localhost");
  if (request.method === "GET" /* GET */ && url.pathname === "/api/list" /* LIST */) {
    yield getListEpisodes(request, response);
    return;
  }
  if (request.method === "GET" /* GET */ && url.pathname === "/api/episode" /* EPISODE */) {
    yield getFilterEpisodes(request, response);
    return;
  }
  response.writeHead(404, { "Content-type": "application/json" });
  response.end(JSON.stringify({ message: "Rota n\xE3o encontrada" }));
});

// src/server.ts
var server = http.createServer(app);
var port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
