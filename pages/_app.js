import "../styles/globals.css";
import { AuthProvider } from "../components/auth/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

