import NavBar from "@/components/NavBar";
import { Box } from "@/components/common/Box";

const Template = () => {
  return (
    <Box bgc={"#010A1F"} h={60} fullW>
      <NavBar />
    </Box>
  );
};

export const StoryNavBar = Template.bind({});

const storyBookObj = {
  title: "NavBar",
  tags: ["autodocs"],
};

export default storyBookObj;
