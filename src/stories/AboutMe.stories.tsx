import { Box } from "@/components/common/Box";
import AboutMe from "@/components/AboutMe";

const Template = () => {
  return (
    <Box bgc={"#111827"} h="550px" w="600px" p="2rem">
      <AboutMe />
    </Box>
  );
};

export const StoryAboutMe = Template.bind({});

const storyBookObj = {
  title: "AboutMe",
  tags: ["autodocs"],
};

export default storyBookObj;
