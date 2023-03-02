import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    reqList: [],
  }

  onChangeOfNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeOfCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddNewComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const newComment = {
      id: uuidv4(),
      personName: nameInput,
      personComment: commentInput,
      postedTime: new Date(),
      isLiked: false,
      initialBackgroundContainerClassName: `initial-container ${
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ]
      }`,
    }
    this.setState(prevState => ({
      reqList: [...prevState.reqList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onClickDeleteButton = id => {
    const {reqList} = this.state
    const filteredList = reqList.filter(eachItem => eachItem.id !== id)
    this.setState({reqList: filteredList})
  }

  onClickLikeButton = id => {
    this.setState(prev => ({
      reqList: prev.reqList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, reqList} = this.state
    console.log(reqList)
    return (
      <div className="bg-container">
        <div className="comments-top-container">
          <h1 className="comments-main-heading">Comments</h1>
          <div className="image-and-form-container">
            <form className="comment-form" onSubmit={this.onAddNewComment}>
              <p className="form-heading">
                Say something about 4.0 Technologies
              </p>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  alt="comments"
                  className="comments-image outside"
                />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                value={nameInput}
                onChange={this.onChangeOfNameInput}
              />
              <textarea
                rows="8"
                cols="26"
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeOfCommentInput}
              />

              <button
                type="submit"
                className="add-comment-button"
                onClick={this.onAddNewComment}
              >
                Add Comment
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-image inside"
              />
            </div>
          </div>
        </div>
        <hr className="line-break" />
        <div className="comments-display-container">
          <p className="comments-count">
            <span className="count">{reqList.length}</span> Comments
          </p>
          <ul>
            {reqList.map(eachItem => (
              <CommentItem
                itemDetails={eachItem}
                key={eachItem.id}
                onClickDeleteButton={this.onClickDeleteButton}
                onClickLikeButton={this.onClickLikeButton}
                dataTestId="delete"
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
