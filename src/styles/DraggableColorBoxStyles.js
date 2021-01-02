import chroma from "chroma-js";
import sizes from "./Sizes";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    color: (props) =>
        chroma(props.background).luminance() <= 0.08 ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    letterSpacing: "1px",
    fontSize: "12px",
  },
  deleteIcon: {
    transition: "all 1s",
  },
};

export default styles;
