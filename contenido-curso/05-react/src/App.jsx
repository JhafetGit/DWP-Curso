import { useState } from "react";
import Header from "../components/Header"
import Lista from "../components/Lista"
import Login from "../components/Login";


function App() {

  // const amigos = ['Alex', 'Carlos', 'Manuel', 'Rafael']

  const lista = [
    { nombre: 'Carlos', telefono: 1234 },
    { nombre: 'Alex', telefono: 1234 },
    { nombre: 'Cesar', telefono: 1234 },
    { nombre: 'Manuel', telefono: 1234 },
    { nombre: 'Rafael', telefono: 1234 },
  ]
  const listaFamosos = [
    { nombre: 'Carlos Salcido', telefono: 1234 },
    { nombre: 'Alex Padilla ', telefono: 1234 },
    { nombre: 'Cesar Augusto', telefono: 1234 },
    { nombre: 'Manuel Figueroa', telefono: 1234 },
    { nombre: 'Rafael Marquez', telefono: 1234 },
  ]

  // const sesion = false;
  const [sesion, setSesion] = useState(false)
  const handleSesion = () => {
    setSesion(!sesion);
  }
  return (
    <>
      {sesion ?
        <div className="contenedor">
          <Header />
          <Lista lista={lista} titulo={'Amigos'} />
          <Lista lista={listaFamosos} titulo="Famosos" />
          <button className="btnCerrarSesion" onClick={handleSesion}>Cerrar Sesión</button>
        </div>
        : <Login handleSesion={handleSesion} />}

    </>
  )

}

export default App
