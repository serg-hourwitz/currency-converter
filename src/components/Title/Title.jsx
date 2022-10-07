import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.Title}>
      <img
        src="https://media.istockphoto.com/id/1281579246/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%B0%D0%B7%D0%B0%D0%B4-%D0%B3%D1%80%D0%BE%D1%88%D1%96-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D0%BD%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BA%D0%BE%D1%88%D1%82%D1%96%D0%B2-%D0%BF%D0%BE%D0%BC%D0%B0%D1%80%D0%B0%D0%BD%D1%87%D0%B5%D0%B2%D0%B0-%D0%B2%D0%B5%D1%80%D1%81%D1%96%D1%8F.jpg?s=612x612&w=0&k=20&c=8g3x_Ee_n43Y2RgxKb8EwHEg4RjSJIqd-QIHYZwTj1U="
        alt="logo"
      ></img>
      <h1> free currency converter</h1>
    </div>
  );
};

export default Title;
