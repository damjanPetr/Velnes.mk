export type Props = {
  children?: React.ReactNode;
};
function LayerScreen({ children }: Props) {
  return (
    <div className="fixed inset-0  w-screen bg-black/60  fcen">{children}</div>
  );
}
export default LayerScreen;
