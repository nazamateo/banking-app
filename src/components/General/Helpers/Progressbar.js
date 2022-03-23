const ProgressBar = ({ completed, budgetbalance }) => {
  let bgcolor = "green";

  if (completed < 66 && completed > 33) {
    bgcolor = "orange";
  } else if (completed < 33) {
    bgcolor = "red";
  }

  const containerStyles = {
    height: 30,
    width: "50%",
    backgroundColor: "gray",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "gray",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{budgetbalance}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
