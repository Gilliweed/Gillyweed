import React from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Deck from './CardDeck';
const shop=()=>{

    return(
        <>
            <Container fluid={true} className="py-5">
                <Row className="my-5">
                    <Col xs={9} md={6} lg={6} className="mx-auto mt-5" >
                        <Deck/>
                    </Col>
                    <Col xs={{span: 10, order:'first'}} md={{span: 4, offset: 2 }} lg={{span: 4, offset: 2 }} className="mx-auto my-auto ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default shop;