/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
// import {v4 as uuid} from "uuid"
import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    currentScore: 0,
    maxScore: 0,
    isGameEnds: false,
    clickedEmojiList: [],
  }

  clickedPlayAgain = () => {
    const {maxScore, currentScore} = this.state

    this.setState({
      currentScore: 0,
      maxScore: currentScore > maxScore ? currentScore : maxScore,
      isGameEnds: false,
      clickedEmojiList: [],
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)

    if (isEmojiPresent === false) {
      if (clickedEmojiList.length === emojisList.length - 1) {
        console.log('you win')
        this.setState(prevState => ({
          clickedEmojiList: [...prevState.clickedEmojiList, id],
          currentScore: prevState.currentScore + 1,
          isGameEnds: !prevState.isGameEnds,
        }))
      } else {
        this.setState(prevState => ({
          clickedEmojiList: [...prevState.clickedEmojiList, id],
          currentScore: prevState.currentScore + 1,
        }))
      }
    } else {
      this.setState(prevState => ({
        isGameEnds: !prevState.isGameEnds,
      }))
    }
  }

  gameEnds = () => {
    const {currentScore} = this.state

    const {emojisList} = this.props
    const emojisListLength = emojisList.length
    console.log(emojisListLength)
    return (
      <WinOrLoseCard
        currentScore={currentScore}
        emojisListLength={emojisListLength}
        clickedPlayAgain={this.clickedPlayAgain}
      />
    )
  }

  gameNotEnds = () => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="emoji-cards">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            clickEmoji={this.clickEmoji}
            key={eachEmoji.id}
          />
        ))}{' '}
      </ul>
    )
  }

  render() {
    const {currentScore, maxScore, isGameEnds, clickedEmojiList} = this.state
    console.log(`clickedEmojiList: ${clickedEmojiList.length}`)
    return (
      <div className="bg-container">
        <NavBar
          currentScore={currentScore}
          maxScore={maxScore}
          isGameEnds={isGameEnds}
        />
        <div className="inner-container">
          {isGameEnds ? this.gameEnds() : this.gameNotEnds()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
