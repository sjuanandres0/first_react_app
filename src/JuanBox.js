import classes from "./JuanBox.module.css";

const JuanBox = (props) => {
  return <div className={classes.box}>{props.children.length}</div>;
};

export default JuanBox;
