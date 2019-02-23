const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

app.get("/",function(req, res){
    res.json({text:"Hola Mundo"});
});

/**
 * Estudiantes
 */
var students = [
    {
        id: 0,
        nombre: "Cesar Javier",
        apellido: "Hernandez Bautista",
        edad: 26,
        sexo: "M",
        email: "solosemeocurioesto@gmail.com"
    }
];

app.get("/estudiantes",function (req, res){
    res.json(students);
});

app.get("/estudiantes/:id",function (req, res){
    res.json(students[req.params.id]);
});
app.post("/estudiantes", function (req, res){
    const newStudents = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        email: req.body.email
    };
    const id = students.push(newStudents);
    newStudents.id = id;
    /*console.log(req.body);
    /*res.json(newStudents);*/
    res.status(201).json(newStudents);
});
app.put("/estudiantes/:id", function(req, res) {
    /*res.json(students[req.params.id]);*/
    students[req.params.id].nombre = req.body.nombre;
    students[req.params.id].apellido = req.body.apellido;
    students[req.params.id].edad = req.body.edad;
    students[req.params.id].sexo = req.body.sexo;
    students[req.params.id].email = req.body.email
    res.status(200).json(students[req.params.id]);
});

app.delete("/estudiantes/:id", function (req, res){
    //const h = req.params.id;
    //students = students.filter(item => item.id !== h);
    console.log(students);
    //res.status(204).end();
    res.send('Meh');
});
/**
 * Inscripciones
 */
/* Eliminar Linea
const insc = [
    {
        id: 0,
        nombre: "Desarollo Web",
        img: "/img/desarolloWeb.png"
    },
    {
        id: 1,
        nombre: "Python",
        img: "/img/python.png"
    }
];
app.get("/inscripciones",function (req,res){
    res.json(insc);
});

app.get("/inscripciones/:id",function (req,res){
    res.json(insc[req.params.id]);
});

app.delete("/inscripciones/:id",function (req, res){
    insc = insc.filter((item, index) => index !== req.body.id);
    res.status(204);
});

/**
 * Cursos
 */
/* Eliminar Linea
var course = [
    {
        id: 0,
        nombre: "Desarrollo Web",
        img: "/img/cursos/1.png"
    },
    {
        id: 1,
        nombre: "Python",
        img: ""
    }
];
const modules = [
    {
        courseId: 0,
        id: 0,
        nombre: "Etiquetas Semanticas",
        descripcion: "Etiquetas main, header, nav, etc..."
    },
    {
        courseId: 0,
        id: 1,
        nombre: "Formularios",
        descripcion: "Etiquetas input, buttom, etc..."
    },
    {
        courseId: 1,
        id: 0,
        nombre: "Etiquetas Semanticas",
        descripcion: "Etiquetas main, header, nav, etc..."
    },
    {
        courseId: 1,
        id: 1,
        nombre: "Formularios",
        descripcion: "Etiquetas input, buttom, etc..."
    }
];
modules.push({courseId: 1, id:1,nombre:"CSS",descripcion:"Selectores"});
app.get("/cursos",function (req,res){
    res.json(course);
});
app.get("/cursos/:id",function (req,res){
    res.json(course[req.params.id]);
});

app.get("/cursos/:id/modulos",function (req,res){
    resModules = [];
    for(var i = 0; i < modules.length; i++){
        if (modules[i].courseId == req.params.id){
            resModules.push(modules[i]);
        }
    };
    res.json(resModules);
});

app.get("/cursos/:courseId/modulos/:moduleId",function (req,res){
    resModules = [];
    for(var i = 0; i < modules.length; i++){
        if (modules[i].courseId == req.params.courseId){
            resModules.push(modules[i]);
        }
    };
    res.json(resModules[req.params.moduleId]);
});


app.post("/cursos",function (req,res){
    const newCourse = {
        nombre: req.body.nombre,
        img: req.body.img
    };
    const id = course.push(newCourse);
    newCourse.id = id;
    res.status(201).json(newCourse);
});

app.put("/cursos/:id",function(req, res) {
    course[req.params.id].nombre = req.body.nombre;
    course[req.params.id].img = req.body.img;
    res.status(200).json(course[req.params.id]);
});

app.post("/cursos/:id/modulos",function (req, res){
    resModules = [];
    for(var i = 0; i < modules.length; i++){
        if (modules[i].courseId == req.params.id){
            resModules.push(modules[i]);
        }
    };
    const newModule = {
        courseId: req.params.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    };
    const id = modules.push(newModule);
    newModule.id = id;
    res.status(201).json(newModule);
});

app.put("/cursos/:courseId/modulos/:id",function(req, res) {

});

/**
 * Profesores
 */
/* Eliminar Linea
var profesores = [];
app.get("/profesores",function (req,res){
    res.json(profesores);
});

app.get("/profesores/:id",function (req, res){
    res.json(profesores[req.params.id]);
});

app.post("/profesores",function (req, res){
    nuevoPro = {
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    const pId = profesores.push(nuevoPro);
    nuevoPro.id = pId;
    res.status(201).json(nuevoPro);
});
app.put("/profesores/id",function() {
    profesores[req.params.id].nombre = req.body.nombre;
    profesores[req.params.id].apellido = req.body.apellido;
    res.status(200).json(profesores[req.params.id]);
});

*///Eliminar  linea
app.listen("8080",function (){
    console.log("Servidor corriendo");
});