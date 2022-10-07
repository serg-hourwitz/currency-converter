import classes from "./Header.module.css";


const Header = () => {
  return (
    <div className={classes.Header_wrapper}>
      <div className={classes.ratio}>USD:__.__</div>
      <div className={classes.ratio}>EURO:__.__</div>
      <div className={classes.ratio}>GBP:__.__</div>
    </div>
  );
}

export default Header;
 