import { Box } from "../common/Box";
import { Text } from "../common/Text";
import { Grid } from "./index.styled";

interface PersonalInfoProps {
  nation: string;
  hometown: string;
  residence: string;
  birthday: string;
}

const PersonalInfo = ({
  nation,
  hometown,
  residence,
  birthday,
}: PersonalInfoProps) => {
  return (
    <Grid pt="1.5rem">
      <Box center>
        <Text color="#d1d5db">Nation・・・</Text>
        <Text color="#9ca3af">{nation}</Text>
      </Box>
      <Box center>
        <Text color="#d1d5db">Hometown・・・</Text>
        <Text color="#9ca3af">{hometown}</Text>
      </Box>
      <Box center>
        <Text color="#d1d5db">Residence・・・</Text>
        <Text color="#9ca3af">{residence}</Text>
      </Box>
      <Box center>
        <Text color="#d1d5db">Date of Birth・・・</Text>
        <Text color="#9ca3af">{birthday}</Text>
      </Box>
    </Grid>
  );
};

export default PersonalInfo;
