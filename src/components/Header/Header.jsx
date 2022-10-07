import classes from "./Header.module.css";


const Header = () => {
  return (
    <div className={classes.Header_wrapper}>
      <div className="ratioUSD">USD:</div>
      <div className="ratioEURO">EURO:</div>
      <div className="ratioGBP">GBP:</div>
    </div>
  );
}

export default Header;
 