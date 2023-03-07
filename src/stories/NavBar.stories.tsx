import { useState } from "react";
import { navbarList } from "data/navbarList";

import NavBar from "@/components/NavBar";
import { Box } from "@/components/common/Box";

const Template = () => {
  const [content, setContent] = useState(navbarList[0]);
  const handleClick = (contentName: string) => {
    setContent(contentName);
  };
  return (
    <Box bgc={"#010A1F"} h="60px" fullW>
      <NavBar handleClick={handleClick} content={content} />
    </Box>
  );
};

export const StoryNavBar = Template.bind({});

const storyBookObj = {
  title: "NavBar",
  tags: ["autodocs"],
};

export default storyBookObj;
