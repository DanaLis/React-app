import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import styles from '../assets/sass/PostGrid.module.sass';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const PostsGrid = ({userPosts, onFetchComments}) => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {userPosts.map((post) => (
      <Grid item xs={4} key={post.id}>
        <Card sx={{ Width: 1000, Height: 1000 }}>
          <div className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </div>
          <CardActions>
            <Button size="small" onClick={() => onFetchComments(post.id)}>Show comments</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
)