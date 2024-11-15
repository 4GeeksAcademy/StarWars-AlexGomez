import React from 'react';
import { Carousel, Card, Col, Row } from 'react-bootstrap';

const CarouselCards = ({ cardsData }) => {
  const chunkSize = 3;

  // Divide los datos en grupos de 3 cards
  const chunks = [];
  for (let i = 0; i < cardsData.length; i += chunkSize) {
    chunks.push(cardsData.slice(i, i + chunkSize));
  }

  return (
    <Carousel>
      {chunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row>
            {chunk.map((card, idx) => (
              <Col key={idx} md={4}>
                <Card>
                  <Card.Img variant="top" src={card.image} alt={card.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselCards;
