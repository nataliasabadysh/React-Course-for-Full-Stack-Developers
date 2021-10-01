export const SelectCategory = ({ onSelectCategory }) => {
  return (
    <select onChange={onSelectCategory} style={{ marginBottom: 40 }}>
      <option>Countries</option>
      <option>Animals</option>
    </select>
  );
};
