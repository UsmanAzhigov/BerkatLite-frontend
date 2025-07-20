import { ImageNotSupported } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { COLORS } from '../../../../shared/constants';

export const Placeholder = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    sx={{
      width: '100%',
      height: { xs: 180, sm: 320 },
      background: `repeating-linear-gradient(135deg, ${COLORS.GREY_BG}, ${COLORS.GREY_BG} 20px, #f5f5f5 20px, #f5f5f5 40px)`,
      color: COLORS.GREY_TEXT,
      borderRadius: 2,
    }}
  >
    <ImageNotSupported sx={{ fontSize: 56, mb: 1, color: COLORS.GREY_TEXT }} />
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      Нет фото
    </Typography>
  </Box>
);
