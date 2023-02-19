import { Box } from "../common/Box";
import { FullImg } from "./index.styled";
import BackgroundImg from "public/okinawa_soba_restaurant.jpg";

const BackgroundImage = () => {
  return (
    <Box fullW fullH>
      <FullImg
        src={BackgroundImg}
        alt="okinawa_soba_restaurant"
        width={370}
        height={500}
      />
    </Box>
  );
};

export default BackgroundImage;
