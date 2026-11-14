

function App() {

  // const amigos = ['Alex', 'Carlos', 'Manuel', 'Rafael']

  const lista = [
    { nombre: 'Carlos', telefono: 1234 },
    { nombre: 'Alex', telefono: 1234 },
    { nombre: 'Cesar', telefono: 1234 },
    { nombre: 'Manuel', telefono: 1234 },
    { nombre: 'Rafael', telefono: 1234 },
  ]

  return (
    <>
      <div className="contenedor">

        <h1>Hola Mundo desde REACT</h1>


        <section className="lista">
          <h3 className="titulo">Contactos </h3>

          {lista.map((user) => {
            return (
              <li>
                <span className="nombre">
                  {user.nombre}
                </span>
                {user.telefono} </li>

            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
