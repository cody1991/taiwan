import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Shell } from "./layout/Shell";
import { ChecklistPage } from "./pages/Checklist";
import { ClothesPage } from "./pages/Clothes";
import { FlightsPage } from "./pages/Flights";
import { FoodPage } from "./pages/Food";
import { OverviewPage } from "./pages/Overview";
import { PermitPage } from "./pages/Permit";
import { StayPage } from "./pages/Stay";
import { TaiwanPage } from "./pages/Taiwan";
import { TransitPage } from "./pages/Transit";

export function App() {
  return (
    <BrowserRouter basename="/taiwan">
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/taiwan" element={<TaiwanPage />} />
          <Route path="/stay" element={<StayPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/transit" element={<TransitPage />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/permit" element={<PermitPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/life" element={<Navigate to="/stay" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
