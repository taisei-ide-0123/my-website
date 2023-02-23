import React from "react";
import { Box } from "../common/Box";
import { Text } from "../common/Text";
import { StyledSpan } from "./index.styled";

const FooterText = () => {
  return (
    <Box>
      <Text fw={600} fs="0.75rem" color="#9ca3af">
        Made by
        <StyledSpan>Taisei Ide.</StyledSpan>
        All rights reserved.
      </Text>
    </Box>
  );
};

export default FooterText;
