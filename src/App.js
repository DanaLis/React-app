import './App.css';
import {useState} from 'react';
import Button from './Components/Todo/Button';
import {nanoid} from 'nanoid';
 
function App() {

  const [users, setUsers] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);

  function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }

  function getUserPosts(userId) { 
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
     .then(result => result.json())
     .then(data => setUserPosts(data))
     .catch(err => console.log(err))
  }

  function getPostComments(postId) { 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
     .then(result => result.json())
     .then(data => setPostComments(data))
     .catch(err => console.log(err))
  }

  return (
    <div className='info-box'>
      <div className='header'>
        <Button className = 'button' text = 'Получить данные' onClick={fetchUsers}></Button>
      </div>
      <div className='container'>
          <div className='users-name'> 
            {users.map((user) => <span key = {nanoid()} onClick={() => getUserPosts(user.id)}>{user.name} - {user.id}</span>)}
          </div>
          <div className='user-posts'>
            {userPosts.map((post) => <div className='user-posts-content' key = {nanoid()} onClick={() => getPostComments(post.id)}> <h3 className='post-title'>{post.title}</h3> <span>{post.body}</span> </div>)}
          </div>
          <div className='post-comment'>
            {postComments.map((postComment) => <div className='post-comment-content' key = {nanoid()}> <h3 className='post-title'>{postComment.email}</h3> <span>{postComment.body}</span> </div>)}
          </div>
      </div>
    </div>
  )
}

export default App;
