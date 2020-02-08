import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function Header(props) {

    return (
        <Jumbotron fluid className="background">
            <Container>
                <h1>Clicky Game</h1>
                <p>Your Top Score: {props.topScore}</p>
                <p>Your Current Score: {props.score}</p>
                <p>
                    Click on an image to earn points, but don't click on any more than once!
                </p>

            </Container>
        </Jumbotron>

    );
}

export default Header;