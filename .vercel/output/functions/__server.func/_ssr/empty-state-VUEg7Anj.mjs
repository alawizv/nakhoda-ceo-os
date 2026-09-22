import { t as cn } from "./utils-CCMvQdln.mjs";
import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/empty-state-VUEg7Anj.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ title, body, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-xl border border-dashed border-border-strong bg-surface px-6 py-10 text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-prose text-sm text-muted",
				children: body
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-center",
				children: action
			}) : null
		]
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-xl border border-border bg-surface p-5 shadow-soft md:p-6", className),
		children
	});
}
function SectionKicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
		children
	});
}
//#endregion
export { Panel as n, SectionKicker as r, EmptyState as t };
