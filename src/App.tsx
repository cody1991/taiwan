import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Shell } from "./layout/Shell";
import { ChecklistPage } from "./pages/Checklist";
import { FlightsPage } from "./pages/Flights";
import { OptionsPage } from "./pages/Options";
import { OverviewPage } from "./pages/Overview";
import { PermitPage } from "./pages/Permit";
import { TaiwanPage } from "./pages/Taiwan";

export function App() {
  return (
    <BrowserRouter basename="/taiwan">
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/taiwan" element={<TaiwanPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/permit" element={<PermitPage />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
