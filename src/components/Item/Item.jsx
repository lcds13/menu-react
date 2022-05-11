import ItemCount from '../ItemCount/ItemCount';
import './Item.css'


const Item = ({ img, precio, nombre, id, }) => {
    
    return(
        <div className='contenedor-item'>
                <div key={id} className='item'>
                    <img src={img}  alt={nombre} />
                    <p className='titulo-item'>{nombre}</p>
                    <p>Precio: ${precio}</p>
                    <ItemCount />
                </div>
            
        </div>
    )
}

export default Item