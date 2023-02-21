import { Box } from "../common/Box";
import { FullImg } from "./index.styled";
import BackgroundImg from "public/okinawa_soba_restaurant.jpg";

const BackgroundImage = () => {
  return (
    <Box fullW h="50%">
      <FullImg src={BackgroundImg} alt="okinawa_soba_restaurant" />
    </Box>
  );
};

export default BackgroundImage;
