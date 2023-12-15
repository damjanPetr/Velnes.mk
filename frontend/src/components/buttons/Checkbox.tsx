function Checkbox({
  name,
  id,
  value,
  checked,
  handleChange,
  handleClick,
}: {
  name: string;
  id: string;
  checked?: boolean;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div onClick={handleClick}>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        value={value}
        name={name}
        id={id}
      />
    </div>
  );
}
export default Checkbox;
