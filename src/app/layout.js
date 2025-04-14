import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "TANN TRIM",
  description: "e commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="px-4">
          {" "}
          <Navbar />
        </div>
        <div> {children}</div>
      </body>
    </html>
  );
}
