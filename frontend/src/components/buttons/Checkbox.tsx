function Checkbox({
  name,
  id,
  value,
}: {
  name: string;
  id: string;
  value: string;
}) {
  return (
    <div>
      <input type="checkbox" value={value} name={name} id={id} />
    </div>
  );
}
export default Checkbox;
