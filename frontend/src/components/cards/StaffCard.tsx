type Props = {
  color: "green" | "red" | "gray" | "orange";
  children: React.ReactNode;
};
function StaffCard() {
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
    <div className="rounded-full p-5">
      <div className=""></div>
    </div>
  );
}
export default StaffCard;
