import { Header } from "./components/header";
import { ProductContextProvider } from "./store/productContext";

export function App() {
  return (
    <ProductContextProvider>
      <Header></Header>
    </ProductContextProvider>
  );
}
