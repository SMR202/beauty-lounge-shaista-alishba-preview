import './globals.css'

export const metadata = {
  title: 'Beauty Lounge by Shaista and Alishba | DHA Phase 2 Islamabad',
  description: 'Beauty salon demo for Beauty Lounge by Shaista and Alishba in DHA Phase 2 Islamabad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
