const express = require("express");
const app = express();
const cors = require("cors");

// Definimos el middleware
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

// Preparamos express para que admita datos de entrada JSON
app.use(express.json());
app.use(requestLogger);

// Admitimos todos los origenes
// app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8081"], // Permite el fronted el desarrollo React y React Native
    credentials: true, //Permitir envio de cookies
  })
);

app.use(express.static("public"));

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", requestLogger, (request, response) => {
  response.send("<h1>Hola Mundo cruel!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response
      .status(404)
      .json({ mensaje: "No existe la nota con el id:" + id })
      .end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  // Si no llega el atributo content ==> ERROR 400
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false, // Si no llega importan ==> valor false
    id: generateId(),
  };

  notes = notes.concat(note);

  response.json(note);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
