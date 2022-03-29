import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import styles from '../assets/sass/UserList.module.sass';


export const UsersList = ({users, handleClickOnUser, openUser, getUserPosts, getUsersAlbom}) => (
  <div className = {styles.usersName}>
    <List 
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav"
      aria-labelledby="nested-list-subheader" subheader={
        !!users.length && 
        <ListSubheader component="div" id="nested-list-subheader">
          Users List
        </ListSubheader>
      }
    >
    {users.map((user) => (
      <>
      <ListItemButton onClick={() => handleClickOnUser(user.id)} key={user.id}>
        <ListItemText primary={user.name} />
      </ListItemButton>
      <Collapse in={openUser === user.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemText onClick={()=> getUsersAlbom(user.id)} primary="Alboms" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemText onClick={()=> getUserPosts(user.id)} primary="Posts" />
          </ListItemButton>
        </List>
      </Collapse>
      </>
    ))}
    </List>
  </div>
);

