/// EJ 1

function Persona(sNombre, iEdad, sCiudad) {
    this.nombre = sNombre;
    this.edad = iEdad;
    this.ciudad = sCiudad;
}

Persona.prototype.presentarse = function() {
    console.log("Hola soy "+ this.nombre + " tengo " + this.edad + " años y vivo en " + this.ciudad);
}

let nombre1 = new Persona("Antonio", 18, "Sevilla");
let nombre2 = new Persona("Jose Luis", 34, "Madrid")

nombre1.presentarse();
nombre2.presentarse();

// EJ 2
Persona.prototype.especie = "Homo sapiens";

Persona.prototype.mostrarEspecie = function() {
    console.log("Especie " + this.especie);
}

nombre1.mostrarEspecie();
nombre2.mostrarEspecie();

// EJ 3
nombre1.profesion = "Maestro";
Persona.prototype.presentarse = function() {
    console.log("Hola soy "+ this.nombre + " tengo " + this.edad + " años y vivo en " + this.ciudad + " y mi profesion es " + this.profesion);
}

nombre1.presentarse();
nombre2.presentarse();


// EJ 4
Persona.prototype.pais = "España";

Persona.prototype.cumplirAnios = function() {
    console.log("Edad", ++this.edad)
}

nombre1.cumplirAnios();
nombre2.cumplirAnios();
console.log("pais_nombre1 : " + nombre1.pais);
console.log("pais_nombre2 : " + nombre2.pais);


// EJ 5

function Estudiante(sNombre,iEdad,sCiudad,sCarrera) {
    Persona.apply(this, [sNombre,iEdad, sCiudad,sCarrera]);
    this.carrera = sCarrera;
}

Estudiante.prototype.presentarse = function(){
    console.log("Hola soy "+ this.nombre + " tengo " + this.edad + " años, vivo en " + this.ciudad + " y estudio " + this.carrera)
}

let nombre3 = new Estudiante("Jorge", 23, "Cadiz", "Informatica");

nombre3.presentarse();

// EJ 6

function Libro(sTitulo, sAutor, iPaginas, bPrestado) {
    this.titulo = sTitulo;
    this.autor = sAutor;
    this.paginas = iPaginas;
    this.prestado = bPrestado || false;
}

Libro.prototype.biblioteca = "Municipal";

Libro.prototype.prestar = function() {
    if(this.prestado) {
        console.log("El libro " + this.titulo + " ya esta prestado")
    } else {
        this.prestado = true
        console.log("Has prestado el libro " + this.titulo)
    }
}

Libro.prototype.devolver = function() {
    this.prestado = false;
    console.log("Has devuelto el libro " + this.titulo);
}


function LibroDigital(sTitulo, sAutor, iPaginas, bPrestado, iTamnioMB) {
    Libro.call(this, [sTitulo,sAutor, iPaginas,bPrestado,iTamnioMB ]);
    this.tamanio = iTamnioMB;
}

LibroDigital.prototype = Object.create(Libro.prototype);
LibroDigital.prototype.construcutor = LibroDigital;

LibroDigital.prototype.prestar = function() {
    console.log("Los libros digitales no se prestan, se descargan");
}

LibroDigital.prototype.descargar = function() {
    console.log("Descargando libro.... Tamaño : " + this.tamanio + "MB");
}

console.log("--- PRUEBAS ---");
console.log("Biblioteca: " + Libro.biblioteca); // Acceso a estático

// 1. Instancia de Libro Físico
var miLibro = new Libro("El Quijote", "Cervantes", 500, false);

miLibro.prestar(); // Debería prestarlo
console.log("¿Está prestado?: " + miLibro.prestado); // true
miLibro.prestar(); // Debería decir que ya está prestado
miLibro.devolver(); // Debería devolverlo
console.log("¿Está prestado?: " + miLibro.prestado); // false

console.log("----------------");

// 2. Instancia de Libro Digital
var miEbook = new LibroDigital("Aprende JS", "Juan", 200, false, 15);

miEbook.prestar(); // Debería decir que no se prestan
miEbook.descargar(); // Debería mostrar el tamaño
// Comprobamos que hereda devolver() aunque no lo usa mucho
miEbook.devolver(); // Funciona porque hereda de Libro




