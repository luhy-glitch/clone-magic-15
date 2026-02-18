import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppContent from "./AppContent";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}
