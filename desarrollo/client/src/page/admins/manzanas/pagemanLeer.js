import React from 'react'
import Header from '../../../components/header'
import ManzaLeer from '../../../components/admins/manzanas/manzaLeer'

function PagemanCrear() {
  return (
      <div className="bg-dark vh-100">
     <Header
                boton1="Manzanas" 
                link1="/admin"  
                boton2="Propuestas"
                link2="/admin/propuestas"
                boton4="Administrar"
                boton41="Manzanas"
                link41="/admin/manzanas"
                boton42="Servicios"
                link42="/admin/servicios"
                boton43="Establecimientos"
                link43="/admin/establecimiento"/>
        <ManzaLeer/>
    </div>
  )
}

export default PagemanCrear
