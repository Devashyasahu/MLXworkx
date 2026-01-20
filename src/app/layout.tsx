import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning stops browser extensions from crashing your site
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#0F172A] selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}