import React from "react";
import classes from "./MovieScreenSkeleton.module.scss";

function MovieScreenSekeleton() {
  return (
    <div className={classes.container}>
      <div className={classes.skeleton_container}>
        <div className={classes.top}>
          <div className={classes.monitor}></div>
          <div className={classes.title}></div>
          <div className={classes.summary}></div>
        </div>

        <div className={classes.bottom}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MovieScreenSekeleton;
