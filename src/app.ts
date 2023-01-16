import express, { Express } from "express";

import viewRouter from "./routes/viewRoutes";

const app: Express = express();

app.set("views", `${__dirname}/../views`);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

app.use("/", viewRouter);

export = app;
