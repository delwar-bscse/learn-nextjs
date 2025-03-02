// import './global.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h2 className="bg-gray-800 text-white p-10">Header</h2>
        <div>{children}</div>
      </body>
    </html>
  )
}
