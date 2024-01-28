import './index.css'

const WinOrLoseCard = props => {
  const {currentScore, emojisListLength, clickedPlayAgain} = props
  const onClickPlayAgain = () => clickedPlayAgain()

  const gameLoss = () => (
    <div className="game-result-container">
      <div>
        <h1 className="main-heading">You Lose</h1>
        <p className="main-heading">Score</p>
        <p className="result">
          {currentScore}/{emojisListLength}
        </p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img
        className="win-or-lose-img"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  const gameWin = () => (
    <div className="game-result-container">
      <div>
        <h1 className="main-heading">You Won</h1>
        <p className="main-heading">Best Score</p>
        <p className="result">
          {currentScore}/{emojisListLength}
        </p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img
        className="win-or-lose-img"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  )
  return currentScore === emojisListLength ? gameWin() : gameLoss()
}

export default WinOrLoseCard
