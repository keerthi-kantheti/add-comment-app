// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {itemDetails, onClickDeleteButton, onClickLikeButton} = props
  const {
    id,
    personName,
    personComment,
    postedTime,
    isLiked,
    initialBackgroundContainerClassName,
  } = itemDetails

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isLiked
    ? 'like-text-before-like'
    : 'like-text-after-like'

  const reqPostedTime = formatDistanceToNow(postedTime)

  const clickDeleteButton = () => {
    onClickDeleteButton(id)
  }

  const clickLikeButton = () => {
    onClickLikeButton(id)
  }

  return (
    <li>
      <div className="posted-comment-top-container">
        <p className={initialBackgroundContainerClassName}>{personName[0]}</p>
        <h1 className="person-name">{personName}</h1>
        <p className="posted-time">{reqPostedTime} ago</p>
      </div>
      <p className="person-comment">{personComment}</p>
      <div className="posted-comment-buttons-container">
        <button type="button" className="like-button" onClick={clickLikeButton}>
          <img src={likeImageUrl} alt="like" className="like-image" />
          <span className={likeTextClassName}>Like</span>
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={clickDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="horizontal-line-list-item" />
    </li>
  )
}
export default CommentItem
