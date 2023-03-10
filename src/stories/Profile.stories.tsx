import { Box } from "@/components/common/Box";
import Profile from "@/components/Profile";

const Template = () => {
  return (
    <Box bgc={"#111827"} h="550px" w="370px">
      <Profile />
    </Box>
  );
};

export const StoryProfile = Template.bind({});

const storyBookObj = {
  title: "Profile",
  tags: ["autodocs"],
};

export default storyBookObj;
