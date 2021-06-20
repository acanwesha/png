import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import { Button, Container, Row, Col, CardBody,Card, CardText} from 'reactstrap';
import { useEffect } from 'react';


export class Patient extends React.Component{

const [patientId,setPatientId] = useState();

    state={
        loading:true,
        patient: []
    };
    async componentDidMount(){
      const url="http://localhost:8084/result_copy_war_war/api/patient-results/1";
      const response= await fetch(url);
      const data= await response.json();
      this.setState({patient: data.patient,loading: false})
      console.log((data.patient))
      
    }
      render(){
        if(this.state.loading){
          return <div>loading......</div>
        }
          return(
            <div>
            
                <div>        
                  <h4 className="text-center">Patient</h4>
                          <Card className="my-2">
                            <CardBody>
                                <h2 className="text-center"></h2> 
                                <CardText className="font-weight-bold">Name:</CardText>
                                <CardText className="font-weight-bold">MRN: </CardText> 
                                <CardText className="font-weight-bold">FIN: </CardText> 
                                    
                            </CardBody>
                          </Card>
                </div>
            
              
            </div>
          );
      }
}