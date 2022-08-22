import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",

    backgroundColor: "orangered",
    padding: "10px 80px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orangered",
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
          count={99}
        />
      </div>
    </div>
  );
};
export default AppPagination;
