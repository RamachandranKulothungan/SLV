export default function Dropdown({ values }) {
  return (
    <>
      <select disabled={values.length === 1 ? true : false}>
        {values.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
}
