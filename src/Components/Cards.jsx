import  {useState} from 'react'
import Sent from './Sent'

const Cards = () => {
    const [datosBanda, setDatosBanda] = useState ({
        nombre: '',
        cancion: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(datosBanda.nombre.length > 3 && datosBanda.cancion.length > 6 && datosBanda.cancion.includes(' ')){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(datosBanda)


    return (
        <div>
        {!show && 
            <form onSubmit={handleSubmit}>
                <label >Nombre de la Banda</label>
                <input type="text" value={datosBanda.nombre} onChange={(event) => setDatosBanda({...datosBanda, nombre: event.target.value.trimStart()})}/>
                <label >Nombre una Canción de la Banda</label>
                <input type="text" value={datosBanda.cancion} onChange={(event) => setDatosBanda({...datosBanda, cancion: event.target.value.trimStart()})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
            <Sent nombre={datosBanda.nombre} direccion={datosBanda.cancion}/>
        :
            null
        }
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h5>}

    </div>
    )
}

export default Cards