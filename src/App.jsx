import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routers";
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
