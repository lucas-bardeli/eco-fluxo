import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Sistema Eco Fluxo - API",
    description:
      "Laboratório de Desenvolvimento Web - Documentação da API com Swagger",
  },
  host: "localhost:5000",
  basePath: "/",
  definitions: {
    Ecoponto: {
      $nome: "Ecoponto Central",
      $latitude: "-23.5505",
      $longitude: "-46.6333",
      descricao: "Ponto de coleta no centro",
      cep: "01000-000",
      logradouro: "Rua Exemplo",
      numero: "100",
      bairro: "Centro",
      cidade: "São Paulo",
      uf: "SP",
      nota: 5,
    },
    Lixeira: {
      $ecoponto_id: 1,
      $uuid_sensor: "sensor-001",
      $tipo: "PLASTICO",
      $volume_max: 100,
      $nivel_cheio: 80,
    },
  },
};

const outputFile = "./swagger-output.json";
const routesFile = ["./index.ts"];

swaggerAutogen()(outputFile, routesFile, doc);
