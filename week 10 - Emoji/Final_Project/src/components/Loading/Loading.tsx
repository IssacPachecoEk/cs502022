import CircularProgress from '@mui/material/CircularProgress';

import { FullSizeCenteredFlexBox } from '@/components/styled';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress color="info" />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
