export function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col pt-10 md:pt-12 pb-28 gap-2">{children}</div>;
}
