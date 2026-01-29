import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import api from "../api";

function EditorNotas(){
    const navigate = useNavigate();
    const [notas, setNota] = useState({
    titulo: "",
    texto: "",
    urlimagen: "",
  });

  // Estado para ver si se esta enviado el formulario
  const [isUpdating, setIsUpdating] = useState(false);

  // Obtener ID de la nota de los parámetros ruta
  const { idnota } = useParams();
    useEffect(() => {
    async function fetchUpdateNota() {
      try {
        await api.put(`/notas/${idnota}`, notas);

        alert("Actualizacion correcta de la nota")
         navigate("/")
      } catch (error) {
        alert(error.mensaje || "Error al actualizar la nota"); // Abrir el diálogo
      }
      // Pase lo que pase hemos terminado el proceso de actualización
      setIsUpdating(false);
    }

    if (isUpdating) fetchUpdateNota();
  }, [isUpdating]);


  
  function handleClick() {
    // evitar envíos duplicados por pulsar el botón tras el mensaje de inserción correcta
    if (isUpdating) return;
    setIsUpdating(true);
  }

    useEffect(() => {
    async function fetchNota() {
      try {
        const respuesta = await api.get(`/notas/${idnota}`);
        setNota(respuesta.datos);
      } catch (error) {
        alert(error.mensaje || "Error al recuperar los datos de la nota") 
      }
    }
    fetchNota();
  }, [idnota]);

    function handleChange(e) {
    setNota({ ...notas, [e.target.name]: e.target.value });
  }



return ( 
    <>
      {/* Contenedor principal */}
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Tarjeta del formulario */}
        <Grid item size={{ xs: 12, sm: 9, md: 7 }}>
          <Paper elevation={6} sx={{ mt: 3, p: 3, maxWidth: 900, mx: "auto" }}>
            {/* Título del formulario */}
            <Typography variant="h4" align="center" sx={{ mb: 3 }}>
              Editar nota
            </Typography>

            {/* Grid con los campos */}
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Campo de titulo */}
              <Grid item size={{ xs: 10 }}>
                <TextField
                  required
                  fullWidth
                  id="titulo"
                  label="Titulo"
                  name="titulo"
                  type="text"
                  maxLength="100"
                  value={notas.titulo}
                  onChange={handleChange}
                />
              </Grid>
              
              {/* Campo de texto */}
              
              {/* Campo de biografía */}
              <Grid item size={{ xs: 10 }}>
                <TextField
                  required
                  fullWidth
                  id="texto"
                  label="Texto"
                  name="texto"
                  type="text"
                  multiline
                  maxRows={4}
                  minRows={2}
                  maxLength="1000"
                  value={notas.texto}
                  onChange={handleChange}
                />
              </Grid>
              
              {/* Campo de URL de fotografía */}
              <Grid item size={{ xs: 10 }}>
                <TextField
                  required
                  fullWidth
                  id="urlimagen"
                  label="URL de la fotografía"
                  name="urlimagen"
                  type="text"
                  maxLength="255"
                  value={notas.urlimagen}
                  onChange={handleChange}
                />
              </Grid>
              
              {/* Botón de aceptar */}
              <Grid
                item
                size={{ xs: 10 }}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  sx={{ mt: 3 }}
                  loading={isUpdating}
                  loadingPosition="end"
                  onClick={handleClick}
                >
                  Aceptar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
</>)
}

export default EditorNotas;