import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://st2.depositphotos.com/4107269/7205/i/600/depositphotos_72053931-stock-photo-choosing-book.jpg" height="300" width="300" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            A Biblioteca Virtual é muito fácil de usar. Você pode criar sua biblioteca da forma que quiser!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Home</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/livros-cl%C3%A1ssicos-famosos-da-literatura-para-venda-na-prateleira-da-biblioteca-54808607.jpg" height="300" width="300"  />
                    <Card.Body>
                        <Card.Title>Produtos</Card.Title>
                        <Card.Text>
                            A Biblioteca Virtual é muito rápido e confiável. Seus livros são armazenados em servidores seguros.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/an%C3%A1lise-de-big-data-anal%C3%ADtica-do-processo-neg%C3%B3cios-diagramas-com-engrenagens-e-%C3%ADcones-na-tela-virtual-132116345.jpg" height="300" width="300" />
                    <Card.Body>
                        <Card.Title>Suporte Virtual</Card.Title>
                        <Card.Text>
                            a Biblioteca Virtual  oferece suporte para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Destaques;
