import React from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Deck from './CardDeck';
const shop=()=>{

    return(
        <>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={6} lg={8} >
                        <Deck/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default shop;