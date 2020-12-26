import sizes from "./Sizes"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    root: {
      backgroundColor: "blue",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      minHeight: "100%"
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
      [sizes.down("xl")]: {
        width: "80%",
      },
      [sizes.down("sm")]: {
        width: "70%",
      },
      [sizes.down("xs")]: {
        width: "60%",
      },
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      "& a": {
        color: "white",
        textDecoration: "none"
      }
    },
    palettes:{
      boxSizing: "border-box",
      width: "100%",
      display: "grid", 
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "2.5rem",
      [sizes.down("sm")]: {
        gridTemplateColumns: "repeat(2, 50%)",
        gap: "1rem"
      },
      [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",
      },
    }
  };