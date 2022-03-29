
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from '../assets/sass/AlbomsList.module.sass'

export const AlbomsList = ({alboms, getAlbomPhotos}) => (
  <div className={styles.albomslist}>
    <List 
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav"
      aria-labelledby="nested-list-subheader" subheader={
        !!alboms.length &&
        <ListSubheader component="div" id="nested-list-subheader">
          Alboms List
        </ListSubheader>
      }
    >
    {alboms.map((albom) => (
      <ListItemButton onClick={() => getAlbomPhotos(albom.id)} key={albom.id}>
        <ListItemText primary={albom.title} />
      </ListItemButton>
    ))}
    </List>
  </div>
);