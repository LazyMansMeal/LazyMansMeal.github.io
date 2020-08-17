import React from 'react';
import { Container, Row, Col, Card } from '../../components';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <h1>Home Page</h1>
        <Row>
          <Col>
            <Card>
              <h2>This is a card</h2>
              <div>This is the description of the card</div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
