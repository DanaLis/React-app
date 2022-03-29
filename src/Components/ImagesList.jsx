import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from '../assets/sass/ImagesList.module.sass';

export const ImagesList = ({photos}) => (
  !!photos.length &&
  <div className={styles.box}>
    <div className={styles.header}>
        <span className={styles.header__title}>Photo gallery</span>
    </div>
    <Box sx={{ width: 600, height: 650, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <img
              src={`${photo.url}`}
              alt={photo.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
)