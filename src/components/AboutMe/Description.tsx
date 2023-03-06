import { Text } from "../common/Text";
import { DescriptionContainer } from "./index.styled";

interface DescriptionProps {
  introduction: string;
}

const Description = ({ introduction }: DescriptionProps) => {
  return (
    <DescriptionContainer fullW>
      <Text color="#d1d5db" lh={1.65}>
        {introduction}
      </Text>
    </DescriptionContainer>
  );
};

export default Description;
