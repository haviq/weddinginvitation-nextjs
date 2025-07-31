import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <nav>
            {/* Navigation component will be included here */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content can be added here */}
        </footer>
      </body>
    </html>
  );
}