import React from 'react'
import "./styles/ImageCardStyles.css"

function ImageCard(props) {
    return (
        <img
            src={props.image}
            onClick={() => props.handleClick(props.id)}
            className="imageCard"
        />
    )
}
export default ImageCard;