type Props = {
  color: "green" | "red" | "gray" | "orange";
  children: React.ReactNode;
};

function MessageCard({ color, children }: Props) {
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
    <div className={`rounded-lg p-5  ${bgColor[color]}`}>
      <div
        className={`${textColor[color]}  flex items-center gap-2.5 font-bold`}
      >
        {children}
      </div>
    </div>
  );
}
export default MessageCard;
