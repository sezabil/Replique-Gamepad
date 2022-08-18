import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    botom: 0,
    zIndex: 200,
    backgroundColor: "orangered",
    padding: "10px 80px",
    color: "white",
    // width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
}));

const AppPagination = ({ setPage, page = 10 }) => {
  const classes = useStyles();
  //handlechange!!
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className={classes.contPag}>
      <div className={classes.root}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
          count={999}
          color="gray"
        />
      </div>
    </div>
  );
};
export default AppPagination;
