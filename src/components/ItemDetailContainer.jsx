import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MOCK_DATA } from "../data/MOCK_DATA";
import { useParams } from "react-router-dom";


const pedirDatos = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (MOCK_DATA)
        }, 500)
    })
}

const ItemDetailContainer = () => {

    const[item, setItem] = useState([])
    const {id} = useParams()

     
    useEffect(() => {
        pedirDatos()
            .then ((res) => {
                if (!id) {
                    setItem(res)
                } else {setItem(res.filter((prod) => prod.id === Number(id))) }   
            })
            .catch ((error) => {
                console.log(error)
            })
    }, [id])

        
    return(
        <div className="listContainer">
            <h2>Catalogo de productos</h2>
        <div className="row mx-3">
        {
            item.map ((prod) => (
                <Card style={{ width: '18rem' }} className="m-3" key={prod.id}>
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Title>{prod.descripcion}</Card.Title>
                        <Card.Text>{prod.precio}</Card.Text>
                        <Button variant="primary">VER MAS</Button>
                    </Card.Body>
                </Card>
            ))    
        } 
        </div>
        </div>                                                                                           
    )
}

export default ItemDetailContainer
  
  
  
  
  
  
  
  