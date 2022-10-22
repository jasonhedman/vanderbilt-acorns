import { ComponentStyleConfig } from "@chakra-ui/react";

const Card : ComponentStyleConfig = {
  baseStyle: {
    p: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    width: "100%",
    position: "relative",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: 'navbar.500',
    backgroundClip: "border-box",
    rounded:'lg',
    shadow: 'xl'
  },
};

export default Card;