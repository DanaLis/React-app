import './App.css';
import {useState} from 'react';
import {UsersList} from './Components/UsersList';
import {PostsGrid} from './Components/PostsGrid';
import {CommentsDialog} from './Components/CommentsDialog';
import Button from '@mui/material/Button';
import {AlbomsList} from './Components/AlbomsList';
import {ImagesList} from './Components/ImagesList';

 
function App() {

  const [users, setUsers] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [alboms, setUserAlboms] = useState([]);
  const [openComment, setOpenComment] = useState(false);
  const [openUser, setOpenUser] = useState(0);
  const [photos, setPhotos] = useState([]);

  const handleClickOnUser = (userId) => {
    setOpenUser(userId);
  };
 
  const handleClickOpen = () => {
    setOpenComment(true);
  };

  const handleClose = () => {
    setOpenComment(false);
  };

  function getUserAlboms(userId) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
     .then(result => result.json())
     .then(data => setUserAlboms(data))
     .catch(err => console.log(err))
  }

  function getAlbomPhotos(albomId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albomId}`)
     .then(result => result.json())
     .then(data => setPhotos(data))
     .catch(err => console.log(err))
  }

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
     .then(() => handleClickOpen())
     .catch(err => console.log(err))
  }

  return (
    <div className='info-box'>
      <div className='header'>
        <Button onClick={fetchUsers}>???????????????? ???????????? ??????????????????????????</Button>
      </div>
      <div className='container'>
        <UsersList users={users} openUser = {openUser}
          getUsersAlbom = {getUserAlboms} handleClickOnUser = {handleClickOnUser} 
          getUserPosts= {getUserPosts}/>
        <AlbomsList alboms={alboms} getAlbomPhotos={getAlbomPhotos} />
        <ImagesList photos={photos}/>
        <PostsGrid userPosts={userPosts} onFetchComments={getPostComments} />
        <CommentsDialog onClose={handleClose} open={openComment} postComments={postComments} />
      </div>
    </div>
  )
}

export default App;
