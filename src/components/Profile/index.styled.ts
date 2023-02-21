import Image from "next/image";
import styled from "styled-components";
import { Column, Box } from "../common/Box";

export const Container = styled(Column)`
  position: relative;
`;

export const FullImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem 0 0 0;
`;

export const CircleIcon = styled(Image)`
  border: 4px #1c1b1b solid;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Specialization = styled.span`
  color: #f59e0b;
  ::before {
    content: "Frontend Developer";
    animation: switching infinite 10s;
  }
  @keyframes switching {
    0% {
      content: "Frontend Developer";
      opacity: 0;
    }
    25% {
      content: "Frontend Developer";
      opacity: 1;
    }
    49% {
      content: "Frontend Developer";
      opacity: 0;
    }
    50% {
      content: "Backend Developer";
      opacity: 0;
    }
    75% {
      content: "Backend Developer";
      opacity: 1;
    }
    100% {
      content: "Backend Developer";
      opacity: 0;
    }
  }
`;

export const IconBox = styled(Box)`
  justify-content: center;
  align-items: center;
  gap: 0 1.5rem;
`;
