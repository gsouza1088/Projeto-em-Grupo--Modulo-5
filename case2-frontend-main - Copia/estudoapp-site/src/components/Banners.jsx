import Carousel from 'react-bootstrap/Carousel'


function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://img2.gratispng.com/20180802/ohb/kisspng-digital-library-biblioteca-virtual-miguel-de-cerva-5b62b232f21e00.1410786815331948029917.jpg"
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
                        src="https://labs.dualpixel.com.br/wp-content/uploads/2014/12/73-bilbiotecas.jpg"
                        alt="Outro slide incrível" width="1000" height="400"
                    />
                    <Carousel.Caption>
                        <h5>Quais são as funcionalidades?</h5>
                        <p>Confira os principais recursos disponíveis no app</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://senalbacaxias.com.br/site/wp-content/uploads/2022/10/imagem-biblioteca2-e1556215501802.png"
                        alt="Último slide" width="1000" height="400"
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