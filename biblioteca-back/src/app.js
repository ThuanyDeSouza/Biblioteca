import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./routes/index.js";
import DB from './db.js'


const app = express();
app.use(cors({
    origin: "*",
    optionSuccessStatus: 200
}))


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(router);

DB.ConnectDatabase().then(() => {
    app.listen(8080, ()=> {
        console.log("Ouvindo na porta 8080")
    })
}).catch(()=> {
    console.log('erro ao conectar ao banco de dados')
})