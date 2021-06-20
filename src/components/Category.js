import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Container, Row, Col, CardBody,Card, CardText} from 'reactstrap';

const Category=({ category })=>{
    return(
        <div>
            <ListGroup>
                <span>
               
                <ListGroupItem tag="a" href="/"> <input type="checkbox" id="{category.name}"  /> {category.name}</ListGroupItem>
                </span>
            </ListGroup>
        </div>
    )
}
export default Category