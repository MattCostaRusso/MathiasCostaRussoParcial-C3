import React from 'react'
import Cards from './Cards'
import { useState } from 'react'

const Sent = ({nombre, cancion}) => {
    return (
        <div>
            <h3>¡Que gran banda es {nombre}!</h3>
            <h4>¡Es un temazo {cancion}!</h4>
        </div>
    )
}

export default Sent