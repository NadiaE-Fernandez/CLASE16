// LEVANTAR EL SERVIDOR

// 1. requerimos los paquetes para levantar el servidor
const express = require("express");
const app = express();

const path = require("path");

// 2. Poner a escuchar el servidor

app.listen(3030, () => console.log("Servidor escuchando en el puerto 3030!"));

//2.1. Definir donde se encuentran nuestros archivos estaticos

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
  });
  
  app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/babbage.html"));
  });
  app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/berners-lee.html"));
  });
  
  app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/clarke.html"));
  });
  app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/hamilton.html"));
  });
  
  app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/hopper.html"));
  });
  app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/lovelace.html"));
  });
  
  app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/turing.html"));
  });

