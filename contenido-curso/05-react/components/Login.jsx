import { useState } from "react"

export default function Login({ handleSesion }) {
    const [usuario, setUsuario] = useState('')
    const [pass, setPass] = useState('')

    const iniciarSesion = () => {
        if (usuario.trim() === '' || pass.trim() === '') {
            alert('El usuario y la contraseña son obligatorios')
            return
        }
        handleSesion()
    }

    return (
        <div className="contenedor">
            <form className="login">
                <h3>Inicia Sesión</h3>
                <input type="text" value={usuario} placeholder="Usuario " onChange={(e) => setUsuario(e.target.value)} />
                <input type="text" value={pass} placeholder="Contraseña" onChange={(e) => setPass(e.target.value)} />
                <button onClick={iniciarSesion}>Iniciar Sesion</button>
            </form>
        </div>
    )
}
