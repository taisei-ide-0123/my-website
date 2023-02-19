import { IconType } from "react-icons";
import { FaDev, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

export interface SocialMedia {
  id: number;
  icon: IconType;
  url: string;
}

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    icon: FaDev,
    url: "https://dev.to/taisei_ide",
  },
  {
    id: 2,
    icon: FaGithub,
    url: "https://github.com/taisei-ide-0123",
  },
  {
    id: 3,
    icon: FaFacebookF,
    url: "https://www.facebook.com/profile.php?id=100004433554720",
  },
  {
    id: 4,
    icon: FaTwitter,
    url: "https://twitter.com/taisei_ide",
  },
];
