import Container from '@mui/material/Container';
import not from "../../Assets/not.png";

import { FullSizeCenteredFlexBox } from '@/components/styled';
import Footer from "@/components/Footer";
function NotFound() {
  return (
    <>
    <Container sx={{ height: '100%' }}>
    <FullSizeCenteredFlexBox flexDirection="column">
      <img 
        src={not}
        width="100%"
        height="80%"
      />
    </FullSizeCenteredFlexBox>
  </Container>
  <Footer />
  </>
  );
}

export default NotFound;
