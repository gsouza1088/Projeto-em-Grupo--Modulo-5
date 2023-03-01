import Carousel from 'react-bootstrap/Carousel'


function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://blog.nubank.com.br/wp-content/uploads/2022/06/Leitura_Brasil_Header.jpg"
                        alt="Slide incrível" width="1000" height="400"
                    />
                    <Carousel.Caption>
                        <h5>Biblioteca Virtual</h5>
                        <p>Um app para facilitar a vida do estudante!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/1785/2781/collections/header-livros-02_1400x.progressive.jpg?v=1627421307"
                        alt="Outro slide incrível" width="1000" height="400"
                    />
                    <Carousel.Caption>
                        <h5>Nossos Produtos</h5>
                        <p>Confira os principais livros disponíveis na nossa plataforma digital</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tm.ibxk.com.br/2021/10/25/25025439320000.jpg?ims=1120x420"
                        alt="Último slide" width="900" height="400"
                    />
                    <Carousel.Caption>
                        <h5>Contato para parcerias?</h5>
                        <p>
                            Entre em contato com a nossa equipe para conversar sobre oportunidades de parceria
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners