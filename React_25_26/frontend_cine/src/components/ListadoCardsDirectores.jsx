import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function ListadoCardDirectores() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDirectores() {
      try {
        const respuesta = await api.get("/directors/");
        setDatos(respuesta.datos);
        setError(null);
      } catch (error) {
        setError(error.mensaje || "No se pudo conectar al servidor");
        setDatos([]);
      }
    }

    fetchDirectores();
  }, []);

  async function handleDelete(id_director) {
    try {
      await api.delete("/directors/" + id_director);
      const datos_nuevos = datos.filter(
        (director) => director.id_director !== id_director
      );
      setDatos(datos_nuevos);
      setError(null);
    } catch (error) {
      setError(error.mensaje || "No se pudo conectar al servidor");
      setDatos([]);
    }
  }

  // Manejo de estados de error y carga
  if (error !== null) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        {error}
      </Typography>
    );
  }

  if (!datos || datos.length === 0) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        No hay directores disponibles
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" sx={{ my: 3 }}>
        Listado de directores
      </Typography>
      
      <Grid container spacing={3}>
        {datos.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.id_director}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={row.photo_url}
                title={row.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {row.biography}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Ver más</Button>
                <Button 
                  size="small" 
                  color="error"
                  onClick={() => handleDelete(row.id_director)}
                >
                  Eliminar
                </Button>
              </CardActions>
              <Link to={'/directors/edit/$row.director'}>
                
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ListadoCardDirectores;