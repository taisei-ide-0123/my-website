import Link from "next/link";
import { IconBox } from "./index.styled";
import { SocialMedia } from "data/socialMedia";

interface MediaIconsProps {
  socialMedia: SocialMedia[];
}

const MediaIcons = ({ socialMedia }: MediaIconsProps) => {
  return (
    <IconBox pt="0.75rem">
      {socialMedia.map((el: SocialMedia) => (
        <Link key={el.id} href={el.url}>
          <el.icon color="#d1d5db" />
        </Link>
      ))}
    </IconBox>
  );
};

export default MediaIcons;
