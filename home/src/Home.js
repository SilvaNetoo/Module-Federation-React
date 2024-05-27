import React from 'react';
import { Container } from 'reactstrap';

const Home = () => {
    const handleButtonClick = () => {
        alert('Botão clicado!');
    };

    return (
        <div>
            <Container className="py-3">
                <h1 className="display-3">Olá Module Federation</h1>
                <hr className="my-2"/>
                <p>Este componente é de outro App!</p>
                <p className="lead">
                    <button className="btn btn-primary" onClick={handleButtonClick}>
                        Botão
                    </button>
                </p>
            </Container>
        </div>
    )
}

export default Home;
