const express = require("express");
const router = express.Router();
const estudiantes = require("../data/estudiantes");
//Obtener los datos de todo los estudiantes GET
router.get("/",(req,res)=>{
    res.json(estudiantes);
});

//Obtener información de estudiante por ID
router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const estudiante = estudiantes.find(e=> e.id === id );
    if(!estudiante){
        return res.status(404).json({
            mensaje: "Estudiante no encontrado"
        });
    }
    res.json(estudiante);
});