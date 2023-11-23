// import "../global.css"
import "react-toastify/dist/ReactToastify.css";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
