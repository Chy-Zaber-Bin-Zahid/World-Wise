import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routh path="product" element={<Product/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
