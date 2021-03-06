/* eslint-disable import/no-anonymous-default-export */
export default {
    root: {
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "5px",
      padding: "0.5rem",
      position: "relative",
      cursor: "pointer",
      lineHeight: 0,
      "&:hover $deleteIcon": {
        opacity: 1
      },
    },
    colors: {
      backgroundColor: "#dae1e4",
      height: "150px",
      width: "100%",
      borderRadius: "5px",
    },
    title: {
      display: "flex",
      justifyContent: "space between",
      alignItems: "center",
      margin: "0.8rem",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "0.8rem",
      position: "relative",
    },
    emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem",
    },
    
    miniColor: {
        height: "25%",
        width: "20%", 
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
    },
    deleteIcon: {
      color: "white",
      backgroundColor: "#eb3d30",
      width: "20px",
      height: "20px",
      position: "absolute",
      right: 0,
      top: 0,
      padding: "10px",
      zIndex: 10,
      opacity: 0,
      transition: "all 0.3s ease-in-out"
    }
  };