import React, { Component } from 'react';
import Header from "./Header";
import data from './cardimage.json';
import ImageCard from './ImageCard'

class Gamecard extends Component {

    state = {
        data,
        score: 0,
        topScore: 0
    }
    handleItemClick = id => {
        let guessed = false;
        var updatedData = this.state.data.map(item => {
            //newItem is creating a copy of a single object as it is iterating and then doing validation (spread operator)
            const newItem = { ...item };
            if (newItem.id === id) {
                if (newItem.clicked == false) {
                    newItem.clicked = true;
                    guessed = true
                }
            }
            return newItem
        })
        guessed ? this.correctGuessFunction(updatedData) : this.incorrectGuessFunction(updatedData)
    }

    correctGuessFunction = data => {
        console.log("CorrectGuessFunction working");
        const newscore = this.state.score + 1;
        const newTopScore = Math.max(newscore, this.state.topScore);

        this.setState({
            score: newscore,
            topScore: newTopScore,
            data: this.shuffleIt(data)
        })

    }
    shuffleCards = () => {
        console.log("shuffle function");
        const dataToShuff = this.shuffleIt(this.state.data);
        console.log(dataToShuff);
        this.setState({ dataToShuff });
    }

    shuffleIt = data => {
        var counter = data.length;

        while (0 !== counter) {
            let randomIndex = Math.floor(Math.random() * counter);
            counter = counter - 1;

            let temp = data[counter];
            data[counter] = data[randomIndex];
            data[randomIndex] = temp;
        }
        return data;

    }


    resetDataFuntion = data => {
        console.log("reset data function");
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return resetData;
        //  return this.shuffleIt(resetData);
    }

    incorrectGuessFunction = dataa => {
        console.log("Incorrect working");

        const newscore = 0;
        this.setState({
            score: newscore,
            data: this.resetDataFuntion(dataa)
        })

    }



    //render is a lifecycle event 
    render() {
        console.log(this.state.data)
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <div>
                    {this.state.data.map(item => (
                        <ImageCard
                            id={item.id}
                            key={item.id}
                            image={item.image}
                            handleClick={this.handleItemClick}
                        />

                    ))}
                </div>

            </div>
        )
    }
}

export default Gamecard;
