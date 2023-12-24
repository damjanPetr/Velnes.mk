type Props = {
  text: string;
  selection: boolean;
  tab: string;
  handleClick: () => void;
};
function SettingsTab({ text, handleClick, selection }: Props) {
  return (
    <div
      className={`cursor-pointer rounded-lg px-[24px]  py-[16px] transition-colors duration-[50ms] ${
        selection ? "bg-lavender" : "t"
      }`}
      onClick={() => {
        handleClick();
      }}
    >
      <h3 className="text-lg font-medium">{text}</h3>
    </div>
  );
}
export default SettingsTab;
