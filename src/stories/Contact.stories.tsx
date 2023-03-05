import { Box } from "@/components/common/Box";
import Contact from "@/components/Contact";

const Template = () => {
  return (
    <Box bgc={"#111827"} h="550px" w="600px" p="2rem">
      <Contact />
    </Box>
  );
};

export const StoryAboutMe = Template.bind({});

const storyBookObj = {
  title: "Contact",
  tags: ["autodocs"],
};

export default storyBookObj;
