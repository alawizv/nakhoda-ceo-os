import { t as cn } from "./utils-CCMvQdln.mjs";
import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-BJd_y5BG.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "neutral", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", tone === "neutral" && "bg-surface-2 text-muted", tone === "forest" && "bg-forest text-forest-fg", tone === "warn" && "bg-warn/15 text-warn", tone === "danger" && "bg-danger/12 text-danger", tone === "success" && "bg-success/12 text-success", className),
		children
	});
}
//#endregion
export { Badge as t };
