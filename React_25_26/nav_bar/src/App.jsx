import NavBar from "./NavBar";

function App() {
  const opcionesMenu = [
    { url: "https:\\google.es", titulo: "Google" },
    { url: "https:\\youtube.com", titulo: "Youtube" },
    [
      "Radios",
      { url: "https:\\cadenaser.com", titulo: "Cadena Ser" },
      { url: "https:\\ondacero.es", titulo: "Onda Cero" },
      { url: "https:\\radiole.es", titulo: "Radio Olé" },
    ],
    { url: "https:\\yahoo.es", titulo: "Yahoo" },
    { url: "https:\\marca.com", titulo: "Marca" },
    [
      "TV",
      { url: "https:\\cadenaser.com", titulo: "RTVE" },
      { url: "https:\\ondacero.es", titulo: "Tele5" },
    ],
  ];
  return (
    <>
      <NavBar datos={opcionesMenu} />
    </>
  );
}

export default App;
