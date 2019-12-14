import React from "react";

export default function About() {
  const headStyle = {
    fontWeight: "600",
    letterSpacing: "0.2px"
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    margin: "200px 20px 0 20px",
    background: "#247ba07a",
    padding: "100px",
    borderRadius: "10px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.562)"
  };

  const pStyle = {
    margin: "6px 70px 0 70px"
  };

  return (
    <div style={containerStyle}>
      <h3 style={headStyle}>
        This is a recipe finder app I made while learning React
      </h3>
      <p style={pStyle}>
        It uses an API and you can search for an ingredient in the search bar
        above, it will give you some recipes using the specified ingredient.
      </p>
    </div>
  );
}
