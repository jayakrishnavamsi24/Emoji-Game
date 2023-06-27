import './index.css'

const NavBar = props => {
  const {score, topscore, emojiScoreDisplay} = props

  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="logo-detail-cont">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-title"> Emoji Game </h1>
        </div>
        {emojiScoreDisplay && (
          <div className="score-cont">
            <p> Score: {score} </p>
            <p> Top Score: {topscore} </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
