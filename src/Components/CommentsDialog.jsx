import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const CommentsDialog = ({onClose, open, postComments}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Comments
    </DialogTitle>
    <DialogContent>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {postComments.map((postComment) => (
        <ListItem>
          <ListItemText primary={postComment.email} secondary={postComment.body} />
        </ListItem>
      ))}
        
      </List>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);