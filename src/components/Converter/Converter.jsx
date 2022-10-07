
const Converter = () => {
    return (
      <div>
        <div>
          <select size="1">
            <option>UAH</option>
            <option>USD</option>
            <option>EURO</option>
            <option>GBP</option>
          </select>
          <input type="number" required />
        </div>
        <div>
          <input type="submit" value="convert" />
          <input type="reset" value="reset" />
        </div>
        <div>
          <select size="1">
            <option>UAH</option>
            <option>USD</option>
            <option>EURO</option>
            <option>GBP</option>
          </select>
          <input type="number" required />
        </div>
      </div>
    );
};

export default Converter;
