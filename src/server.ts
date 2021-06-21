import express from "express";

// @types/express
const app = express();

/**
 *  GET     =>  Buscar uma informação
 *  POST    =>  Inserir (criar) uma informação
 *  PUT     =>  Alterar uma informação
 *  DELETE  =>  Remover uma informação
 *  PATH    =>  Alterar uma informação específica
 */


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));