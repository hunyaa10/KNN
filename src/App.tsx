import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Loading from "./page/Loading";
import Home from "./page/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? <Loading /> : <Home />}
    </>
  );
}

export default App;
