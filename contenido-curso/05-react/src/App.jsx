import Header from "../components/Header"
import Lista from "../components/Lista"


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

  return (
    <>
      <div className="contenedor">

        <Header />

        <Lista lista={lista} titulo={'Amigos'} />
        <Lista lista={listaFamosos} titulo="Famosos" />
      </div>
    </>
  )
}

export default App
