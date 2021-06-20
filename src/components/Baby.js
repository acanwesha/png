import React from 'react'
import { Button, Container, Row, Col, CardBody,Card, CardText,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
const Baby=()=>{
    return(
        <div>
            
            <Dropdown >
                <DropdownToggle caret>
                    Dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>BabyA</DropdownItem>
                    <DropdownItem disabled>BabyB</DropdownItem>
                    <DropdownItem>BabyC</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
                </DropdownMenu>
            </Dropdown>
         
        </div>
    )
}
export default Baby