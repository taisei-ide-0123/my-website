import React from "react";
import { Box } from "../common/Box";
import { Text } from "../common/Text";

interface DescriptionProps {
  introduction: string;
}

const Description = ({ introduction }: DescriptionProps) => {
  return (
    <Box fullW px="1.75rem" py="0.75rem">
      <Text color="#d1d5db" lh={1.65}>
        {introduction}
      </Text>
    </Box>
  );
};

export default Description;
