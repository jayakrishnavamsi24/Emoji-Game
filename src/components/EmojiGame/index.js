/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    completedEmojiIds: [],
    score: 0,
    topscore: 0,
    emojiScoreDisplay: true,
  }

  emojiClick = id => {
    const {completedEmojiIds, score} = this.state
    const isIdFound = completedEmojiIds.includes(id)
    if (isIdFound) {
      this.setState({emojiScoreDisplay: false})
    } else {
      const newScore = score + 1
      if (newScore === 12) {
        this.setState(prevState => ({
          completedEmojiIds: [...prevState.completedEmojiIds, id],
          score: newScore,
          emojiScoreDisplay: false,
        }))
      } else {
        this.setState(prevState => ({
          completedEmojiIds: [...prevState.completedEmojiIds, id],
          score: newScore,
          emojiScoreDisplay: true,
        }))
      }
    }
  }

  onClickPlayAgain = () => {
    const {score, topscore} = this.state

    let newTopscore = topscore
    if (score > newTopscore) {
      newTopscore = score
    }

    this.setState({
      completedEmojiIds: [],
      score: 0,
      topscore: newTopscore,
      emojiScoreDisplay: true,
    })
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojisList = shuffledEmojisList()
    const {score, topscore, emojiScoreDisplay} = this.state

    let isWon = false
    if (score === 12) {
      isWon = true
    }

    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topscore={topscore}
          emojiScoreDisplay={emojiScoreDisplay}
        />
        <div className="bottom-section">
          {emojiScoreDisplay && (
            <ul className="emojis-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  emojiClick={this.emojiClick}
                />
              ))}
            </ul>
          )}
          {!emojiScoreDisplay && (
            <div className="result-card">
              {!isWon && (
                <>
                  <div className="left-section">
                    <h1 className="result-heading"> You Lose </h1>
                    <p className="result-score"> Score </p>
                    <p className="score-count"> {score}/12</p>
                    <button
                      onClick={this.onClickPlayAgain}
                      className="play-again-btn"
                      type="button"
                    >
                      {' '}
                      Play Again{' '}
                    </button>
                  </div>
                  <div className="right-section">
                    <img
                      className="balloon-img"
                      src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                      alt="win or lose"
                    />
                  </div>
                </>
              )}
              {isWon && (
                <>
                  <div className="left-section">
                    <h1 className="result-heading"> You Won </h1>
                    <p className="result-score"> Best Score </p>
                    <p className="score-count"> 12/12 </p>
                    <button
                      onClick={this.onClickPlayAgain}
                      className="play-again-btn"
                      type="button"
                    >
                      {' '}
                      Play Again{' '}
                    </button>
                  </div>
                  <div className="right-section">
                    <img
                      className="balloon-img"
                      src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                      alt="win or lose"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
