export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full prose-sm prose-a:underline prose-headings:mb-4 prose-headings:mt-8 prose-headings:font-semibold prose-headings:font-mono prose-h1:prose-2xl prose-h2:prose-md prose-li:list-disc prose-li:list-inside prose-li:pl-0 prose-li:font-mono prose-li:prose-smgray-600">
      {children}
    </div>
  );
}
