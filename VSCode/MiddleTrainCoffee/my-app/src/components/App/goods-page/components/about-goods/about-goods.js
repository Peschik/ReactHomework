import { Container, Row, Col } from 'react-bootstrap';
const AboutGoods = (props) => {
    return (
        <>
        <Container className='mt-5 mb-5'>
          <Row className='justify-content-center align-items-center flex-direction-md-column'>
          <Col sm={6} md={6} lg={3}>
          {props.left}
          </Col>
          <Col lg={5}>
          {props.right}
          </Col >
          </Row>
          
        </Container>
    </>
    )
}
export default AboutGoods