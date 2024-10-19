import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BillingPage from "@/pages/billing";
import InventoryPage from "@/pages/inventory";
import ProvidersPage from "@/pages/providers";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BillingPage />} path="/billing" />
      <Route element={<InventoryPage />} path="/inventory" />
      <Route element={<ProvidersPage />} path="/providers" />
    </Routes>
  );
}

export default App;
