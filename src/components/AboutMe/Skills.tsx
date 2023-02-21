import { IconContext } from "react-icons";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiMobxstatetree,
  SiNim,
  SiRedis,
  SiPostgresql,
  SiApachekafka,
} from "react-icons/si";
import { GridIcons } from "./index.styled";

const IconStyle = {
  color: "#f59e0b",
  size: "4rem",
};

const Skills = () => {
  return (
    <GridIcons px="1.75rem" py="1.75rem">
      <IconContext.Provider value={IconStyle}>
        <TbBrandNextjs />
        <FaReact />
        <SiTypescript />
        <SiMobxstatetree />
        <SiNim />
        <SiRedis />
        <SiPostgresql />
        <SiApachekafka />
      </IconContext.Provider>
    </GridIcons>
  );
};

export default Skills;
