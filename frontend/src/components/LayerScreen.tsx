export type Props = {
  children?: React.ReactNode;
  optinal?: string;
};
function LayerScreen({ children, optinal }: Props) {
  return (
    <div className={`fixed inset-0  w-screen bg-black/60  fcen  ${optinal}`}>
      {children}
    </div>
  );
}
export default LayerScreen;
