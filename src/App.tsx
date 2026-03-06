import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AppContent />
  </BrowserRouter>
);

export default App;
