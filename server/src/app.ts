import fastify from "fastify";
import mongoose from "mongoose";
import indexController from "./controllers/indexController.js";
import skillsRoutes from "./routers/skills.routes.js";

const server = fastify({
    // Logger only for production
    logger: process.env.NODE_ENV !== "development",
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/torchlight').then(() => console.log('Успешное подключение к базе данных')).catch(e => console.log(`Ошибка подключения к базе данных: ${e}`));

server.register(indexController, {prefix: '/'});
server.register(skillsRoutes, {prefix: '/api/v1/skills'});

export default server;
