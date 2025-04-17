export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full prose-sm prose-a:underline prose-headings:mb-6 prose-headings:font-semibold prose-headings:font-mono prose-h1:prose-2xl prose-h2:prose-md">
      {children}
    </div>
  );
}
