type Props = {
  color: "green" | "red" | "gray" | "orange";
  children: React.ReactNode;
};

function Status({ color, children }: Props) {
  const bgColor = {
    green: "bg-mint-green",
    red: "bg-misty-rose",
    gray: "text-gray-01",
    orange: "bg-papaya-whip",
  };
  const textColor = {
    green: "text-pine-green",
    red: "text-jasper",
    gray: "bg-gray-05",
    orange: "text-ochre",
  };

  return (
    <div className={`rounded-full px-5 py-2.5  ${bgColor[color]}`}>
      <div className={`${textColor[color]} font-bold`}>{children}</div>
    </div>
  );
}
export default Status;
