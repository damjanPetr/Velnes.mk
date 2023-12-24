function PageSection({
  header,
  children,
  size,
}: {
  header: string;
  children?: React.ReactNode;
  size: "large" | "small";
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-t-lg border-b border-b-gray-04 ${
        size === "small" ? "p-4" : "p-5"
      }`}
    >
      <h4 className="text-lg font-bold ">{header}</h4>
      <div className="flex flex-auto justify-end">{children}</div>
    </div>
  );
}
export default PageSection;
