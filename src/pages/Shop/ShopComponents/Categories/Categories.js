import React from "react";
import { Stack, Button, Col, Row, Card } from 'react-bootstrap';
import Icon from '@mui/icons-material/Category';
const Categories = () => {
    return (
        <Card className="container border-0" style= {{backgroundColor:"rgb(167, 170, 170)"}}>
            <Col className="headi" >
                <h1 className="headi" ><Icon style={{ fontSize: "40px", marginLeft: "-7px",color:"red" }} />Categories</h1>
            </Col>
            <Row>
                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>

                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>

                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={4} className="col-md" style={{ marginTop: "24px" }}>
                        <Button variant="secondary">Brand 1</Button>
                        <Button variant="secondary">Brand 2</Button>
                        <Button variant="secondary">Brand 3</Button>
                        {/* <Button variant="secondary">Brand 4</Button>
                        <Button variant="secondary">Brand 5</Button> */}
                    </Stack>
                </Col>
            </Row>
        </Card>
    )
}
export default Categories;