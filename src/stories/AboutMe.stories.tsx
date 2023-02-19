import { Box } from "@/components/common/Box";
import AboutMe from "@/components/AboutMe";

const Template = () => {
  return (
    <Box bgc={"#111827"} h={550} w={600} p="2rem">
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
