import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const UserList = ({users, onFetchPosts, onFetchAlboms}) => (
  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="secondary mailbox folders">
      <List>
      {users.map((user) => (
        <ListItem disablePadding key={user.id} onDoubleClick={() => onFetchPosts(user.id)} onClick={() => onFetchAlboms(user.id)}>
          <ListItemButton>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </nav>
  </Box>
)