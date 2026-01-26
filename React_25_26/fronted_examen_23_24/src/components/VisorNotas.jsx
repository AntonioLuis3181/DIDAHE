import { useState, useEffect } from "react";


import api from "../../../frontend_cine/src/api";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function VisorNotas() {
    const [datos, setDatos] = useState([]);

    const[error, setError] = useState(null); 

      useEffect(() => {
        async function fetchNotas() {
          try {
            const respuesta = await api.get("/ejercicio2/");
            setDatos(respuesta.datos);
            setError(null);
          } catch (error) {
            setError(error.mensaje || "No se pudo conectar al servidor");
            setDatos([]);
          }
        }
    
        fetchNotas();
      }, []);

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

    return(
        <>
        <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        No hay directores disponibles
      </Typography>
      <Grid container>
        { datos.map( nota => (
        <Grid key={nota.idnota} size={{ xs: 12, sm: 6, md:4, lg: 3}}>{nota.titulo}
        <Card variant="outlined" sx={{ width: 250 }}>
        <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {nota.fcreacion}
        </Typography>
        <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
            
        />
        <Typography variant="h5" component="div">
        texto
        </Typography>
        
        <Typography variant="body2">{nota.texto}</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>

        </Grid>
        ))}
      </Grid>
        </>
    )

}

export default VisorNotas;