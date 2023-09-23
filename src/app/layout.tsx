import './globals.css'

export const metadata = {
  title: 'Rocketseat · Evolua rápido como a tecnologia.',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background flex flex-col items-center justify-start">{children}</body>
    </html>
  )
}
