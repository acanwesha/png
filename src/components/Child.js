import React from 'react'
import { Button, Container, Row, Col, CardBody,Card, CardText} from 'reactstrap';
const Child=({child})=>{
    return(
        <div>
            <h4 className="text-center">Child</h4>
            <Card className="my-2">
              <CardBody>
                  <h2 className="text-center"></h2> 
                  <CardText className="font-weight-bold">Name: {child.name}</CardText>
                  <CardText className="font-weight-bold">MRN: {child.mrn}</CardText> 
                  <CardText className="font-weight-bold">FIN: {child.fin}</CardText> 
                       
              </CardBody>
            </Card>
         
        </div>
    )
}
export default Child