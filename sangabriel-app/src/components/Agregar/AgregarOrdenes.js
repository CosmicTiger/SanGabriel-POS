import React,{Fragment} from 'react';
import Button from '@material-ui/core/Button';



const handleSubmit = (e) =>{
    e.preventDefault();
}

const AgregarOrdenes= () =>{
    return(
        <Fragment>
            <h2>Nueva Orden</h2>
            <form onSubmit={handleSubmit}>
            <div className="form/group">

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Ingresar nombre"
                 ></input>   



                <label htmlFor="Precio">Precio:</label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Ingresar Precio "
                ></input>

         
                <label htmlFor="Fecha de adquisicion">Fecha de adquisicion:</label>
                <input
                    type="text"
                    className="form-control"
                    name="date"
                    placeholder="Ingresar Fecha de adquisicion"
                ></input>



                <label htmlFor="Cantidad">Cantidad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="proveedor"
                    placeholder="Ingresar Cantidad"
                ></input> 


                <label htmlFor="Color">Color:</label>
                <input
                    type="text"
                    className="form-control"
                    name="proveedor"
                    placeholder="Ingresar Color"
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

export default AgregarOrdenes;