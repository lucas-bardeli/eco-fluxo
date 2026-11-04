import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ecopontoRoutes from "./routes/ecoponto.routes.js";
import lixeiraRoutes from "./routes/lixeira.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import { createRequire } from "module";
import swaggerUi from "swagger-ui-express";

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger-output.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/ecopontos", ecopontoRoutes);
app.use("/lixeiras", lixeiraRoutes);
app.use("/usuarios", usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
