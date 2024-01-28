import './index.css'

const NavBar = props => {
  const {currentScore, maxScore, isGameEnds} = props

  const gameNotEnds = () => (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h2>Emoji Game</h2>
      </div>

      <div className="score-container">
        <p>Score: {currentScore}</p>
        <p>Top Score: {maxScore}</p>
      </div>
    </div>
  )
  const gameEnds = () => (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h2>Emoji Game</h2>
      </div>
    </div>
  )
  return isGameEnds ? gameEnds() : gameNotEnds()
}

export default NavBar
