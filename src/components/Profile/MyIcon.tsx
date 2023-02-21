import React from "react";
import { CenterBox } from "../common/Box";
import { CircleIcon } from "./index.styled";
import Me from "public/me.jpg";

const MyIcon = () => {
  return (
    <CenterBox h="61.5px">
      <CircleIcon src={Me} alt="me" width={123} height={123} />
    </CenterBox>
  );
};

export default MyIcon;
