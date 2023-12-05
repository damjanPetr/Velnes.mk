type Props = {
  title: string;
  subheading: string;
};
function SectionHeading({ title, subheading }: Props) {
  return (
    <div className="">
      <div className="pb-[32px] pt-[36px]">
        <div className="mx-auto px-[44px] pb-[42px]">
          <h1 className="ml-4 text-2xl font-bold">{title}</h1>
        </div>
        <h2 className="ml-4 ">{subheading}</h2>
      </div>
    </div>
  );
}
export default SectionHeading;
