import "reflect-metadata"
import { DataSource } from "typeorm"
import { openDb } from "./configDB";


export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "./server.sqlite",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        openDb();
    })
    .catch((error) => console.log(error))