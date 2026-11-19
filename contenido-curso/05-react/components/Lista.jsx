
export default function Lista({ lista, titulo = 'Conocidos' }) {
    return (
        <div>
            <section className="lista">
                <h3 className="titulo">{titulo} </h3>

                {lista.map((user, index) => {
                    return (
                        <li key={index}>
                            <span className="nombre">
                                {user.nombre}
                            </span>
                            <span className="telefono">{user.telefono}</span> </li>

                    )
                })}
            </section>
        </div>
    )
}
