import React, { useState, useLayoutEffect } from 'react'
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  const [isFirstAccess, setFirstAccess] = useState(true)
  const [postList, setPostList] = useState([])
  const [commentList, setCommentList] = useState([])
  const [postValue, setPostValue] = useState('')
  const [commentValue, setCommentValue] = useState([])

  const orderPostById = posts => posts.sort((a, b) => b.id - a.id)

  const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPostList(data)
      })
  }

  const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => {
        setCommentList(data)
      })
  }

  const submitNewPost = () => {
    if (postValue.length < 1) {
      return null
    }

    const newPost = {
      userId: 1,
      id: postList.length + 1,
      title: '',
      body: postValue,
    }

    setPostValue('')
    setPostList(currentList => [...currentList, newPost])
  }

  const submitNewComment = postId => {
    const value = commentValue
    if (value[postId].length < 1) {
      return null
    }

    const newComment = {
      postId: postId,
      id: commentList.length + 1,
      name: '',
      email: 'teste@teste.com',
      body: value[postId],
    }

    value[postId] = ''
    setCommentValue(value)
    setCommentList(currentList => [...currentList, newComment])
  }

  const handleCommentInput = (value, postId) => {
    const newArr = [...commentValue]
    newArr[postId] = value

    setCommentValue(newArr)
  }

  const renderPost = post => (
    <Card id='postList'>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p>{post.body}</p>
          <footer className='blockquote-footer'>
            User ID <cite title='Source Title'>{post.userId}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )

  const renderComment = post => (
    <Card body>
      {commentList.map(
        comment =>
          comment.postId === post.id && (
            <p key={comment.id} className={styles.comment}>
              <strong> {comment.email} - </strong> {comment.body}
            </p>
          ),
      )}
      {renderCommentInput(post.id)}
    </Card>
  )

  const renderPostInput = () => (
    <InputGroup size='lg'>
      <FormControl
        as='textarea'
        name='postInput'
        onChange={e => /^[A-Za-z ]+$/.test(e.target.value) && setPostValue(e.target.value)}
        value={postValue}
        maxLength='200'
        id='postInput'
      />
      <InputGroup.Append>
        <Button onClick={() => submitNewPost()} variant='primary' id='btnSubmitPost'>
          Post Quote
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )

  const renderCommentInput = postId => (
    <InputGroup size='sm'>
      <FormControl
        as='textarea'
        name='commentInput'
        onChange={e => handleCommentInput(e.target.value, postId)}
        value={commentValue[postId]}
        maxLength='200'
        id='commentInput'
      />
      <InputGroup.Append>
        <Button onClick={() => submitNewComment(postId)} variant='primary' id='btnSubmitComment'>
          Comment
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )

  useLayoutEffect(() => {
    if (isFirstAccess) {
      loadPosts()
      loadComments()
      setFirstAccess(false)
    }

    return () => null
  }, [isFirstAccess, setFirstAccess])
  return (
    <>
      <div className={styles.postInput}>{renderPostInput()}</div>

      {orderPostById(postList).map(post => (
        <div key={post.id}>
          <div className={styles.postList}>{renderPost(post)}</div>
          <div className={styles.commentList}>{renderComment(post)}</div>
        </div>
      ))}
    </>
  )
}

export default Dashboard
