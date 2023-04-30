import "./globals.css";

export const metadata = {
  title: "Spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-zinc-900 text-zinc-50" lang="en">
      <body> 
        {children}
      </body>
    </html>
  );
}
