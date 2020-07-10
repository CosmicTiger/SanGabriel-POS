import React,{Fragment} from 'react';
import Button from '@material-ui/core/Button';



const handleSubmit = (e) =>{
    e.preventDefault();
}

const AgregarUsuario= () =>{
    return(
        <Fragment>
            <h2>Agregar Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
            <div className="form/group">

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Ingresar nombre"
                 ></input>   



                <label htmlFor="Rol">Rol:</label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Ingresar Rol "
                ></input>

         
                <label htmlFor="Fecha de introduccion">Fecha de introduccion:</label>
                <input
                    type="text"
                    className="form-control"
                    name="date"
                    placeholder="Ingresar Fecha de introduccion"
                ></input>



                <label htmlFor=" Correo"> Correo:</label>
                <input
                    type="text"
                    className="form-control"
                    name="proveedor"
                    placeholder="Ingresa Correo"
                ></input> 

            </div>

            <Button
                href="/admin"
                type="submit"
                >
                    Guardar</Button> 

            <Button href="/admin"
            ype="submit" >
            
            Cancelar</Button> 


            </form>
        </Fragment>
    )
}

export default AgregarUsuario;