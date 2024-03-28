export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-center items-center min-h-screen w-full pattern-paper pattern-slate-900 pattern-bg-slate-950 pattern-size-10 pattern-opacity-100'>
      {children}
    </div>
  );
}
