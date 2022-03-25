//import logo from './logo.svg';
import './App.css';
//import Todos from './Components/Todo/Todos';
//import Header from './Components/Header/Header'
import {useEffect, useState} from 'react';
 
function App() {
  /*return (
    <div className='app'>
       <Header/>
       <Todos />
    </div>
  );*/

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [displayPosts, setdisplayPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json()
      .then(data => setUsers(data))
      .catch(err => console.log(err)))
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json()
      .then(data => setPosts(data))
      .catch(err => console.log(err)))
  }, [])

  const getUserData = (userId) => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(result => result.json())
    .catch(err => console.log(err))

  useEffect(() => {
      if(posts.length === 0 || users.length === 0)
        return;

      setdisplayPosts(
        posts.map(post => {
        const {userId, ...postWithoutUserId} = post;
        const user = users.find(user => user.id === userId);
        const userName = user ? user.name : 'No name';
        return {
          ...postWithoutUserId,
          userName
        }
      })
    )

    const userIds = new Set(posts.map(post => post.userId) );
    const userData = [...userIds].map(userId => getUserData(userId))

    Promise.all(userData).then(result => {
      setdisplayPosts(
        posts.map(post => {
          const {userId, ...postWithoutUserId} = post;
          const user = result.find(user => user.id === userId);
          const userName = user ? user.name : 'No name';
          return {
            ...postWithoutUserId,
            userName
          }
        })
      )
    })
  }, [posts, users])


  return (
    <div className='container'>
      {
        //users.map((user) => <div>{user.name}</div>)
       //posts.map((post) => <div>{post.body}</div>)
        displayPosts.map((post) => <div>{post.title} - {post.userName}</div>)
      }
    </div>
  )
}

export default App;
