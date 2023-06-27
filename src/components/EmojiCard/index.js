import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClicked = () => {
    emojiClick(id)
  }

  return (
    <li>
      <button onClick={onEmojiClicked} className="emoji-card" type="button">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
