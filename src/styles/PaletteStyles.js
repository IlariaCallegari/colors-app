import sizes from "./Sizes";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Palette: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    PaletteColors: {
      height: " 90%",
    },
    goBack: {
      height: "50%",
      width: "20%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      textTransform: "uppercase",
    
      backgroundColor: "black",
      "& a": {
        color: "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textTransform: "uppercase",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        border: "none",
        transition: "opacity 0.5s",
        textDecoration: "none",
      },
      [sizes.down("lg")]: {
        height: "33.333%",
        width: "25%"
      },
      [sizes.down("md")]: {
        height: "20%",
        width: "50%"
      },
      [sizes.down("xs")]: {
        height: "10%",
        width: "100%"
      },
    },
  };