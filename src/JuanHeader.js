import classes from './JuanHeader.module.css'

const JuanHeader = ( props ) => {
  return <div className={ classes.juanHeader }>HELLO {props.user.name}</div>;
};

export default JuanHeader;
