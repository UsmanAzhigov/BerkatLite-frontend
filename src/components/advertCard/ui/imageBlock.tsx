import { ImageNotSupported } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface ImageBlockProps {
  image?: string[];
  title: string;
}

export const ImageBlock = ({ image, title }: ImageBlockProps) =>
  image && image.length > 0 ? (
    <Box
      component="img"
      src={image[0]}
      alt={title}
      sx={{
        width: '100%',
        height: 200,
      }}
    />
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        color: '#777',
      }}
    >
      <ImageNotSupported sx={{ fontSize: 48, mb: 1 }} />
      <Typography variant="body2">Нет фото</Typography>
    </Box>
  );
