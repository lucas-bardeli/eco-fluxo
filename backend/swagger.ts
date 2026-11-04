import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Sistema Eco Fluxo - API",
    description:
      "Laboratório de Desenvolvimento Web - Documentação da API com Swagger",
  },
  host: "localhost:5000",
  basePath: "/",
};

const outputFile = "./swagger-output.json";
const routesFile = ["./index.ts"];

swaggerAutogen()(outputFile, routesFile, doc);
