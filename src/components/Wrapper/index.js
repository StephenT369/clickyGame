import React, { Component } from "react";
import Picture from "../Picture";
import pictures from "../../pictures.json";
import "./style.css";

class Wrapper extends Component {
  state = {
    pictures,
    gameMessage: "Click a picture to start!",
    playerScore: 0,
    topScore: 0
  };

  handleClick = (id, clicked) => {
    const pictureOrder = this.state.pictures;

    if(clicked){
      pictureOrder.forEach((pic, index) => {
pictureOrder[index].clicked = false;
      });
      return this.setState({
        picture: pictureOrder.sort(() => Math.random() - 0.3),
        gameMessage: "You guessed incorrectly!",
        playerScore: 0
      })
    } else {
      pictureOrder.forEach((pic, index) => {
        if (id === pic.id) {
          pictureOrder[index].clicked = true;
        }
      });
      const { topScore, playerScore } = this.state;
      const updateScore = playerScore + 1;
      const updateTopScore = updateScore > topScore ? updateScore : topScore;
      
      return this.setState({
        picture: pictureOrder.sort(() => Math.random() -0.3),
        gameMessage: "You guessed correctly!",
        playerScore: updateScore,
        topScore: updateTopScore,
      })
    }
  };

  render() {
    return (
<div>
<div>
<p className="title">{this.state.gameMessage}</p>
</div>
<div>
<p className="title">Score: {this.state.playerScore} | Top Score: {this.state.topScore}</p>
</div>
<div className="img-container wrapper">
<div>
{this.state.pictures.map(image => (
<Picture
key={image.id}
id={image.id}
clicked={image.clicked}
image={image.image}
handleClick={this.handleClick}
/>
))}
</div>
</div>
</div>
    );
  }
};

export default Wrapper;