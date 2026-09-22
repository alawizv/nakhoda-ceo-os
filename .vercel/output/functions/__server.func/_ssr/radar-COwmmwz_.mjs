import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PILLARS } from "./pillars-My4NIVId.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/radar-COwmmwz_.js
var import_jsx_runtime = require_jsx_runtime();
var CX = 160;
var CY = 160;
var R = 96;
function polar(index, total, radius) {
	const angle = -Math.PI / 2 + index / total * Math.PI * 2;
	return {
		x: CX + radius * Math.cos(angle),
		y: CY + radius * Math.sin(angle)
	};
}
function ringPath(level) {
	return PILLARS.map((_, i) => polar(i, PILLARS.length, R * level / 5)).map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";
}
function Radar({ scores, size = 300 }) {
	const map = Object.fromEntries(scores.map((s) => [s.id, s.score]));
	const dataPts = PILLARS.map((p, i) => polar(i, PILLARS.length, R * (map[p.id] || 0) / 5));
	const dataPath = dataPts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";
	const hasData = scores.some((s) => s.score > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 320",
		width: size,
		height: size,
		className: "mx-auto max-w-full",
		role: "img",
		"aria-label": "Radar delapan pilar",
		children: [
			[
				1,
				2,
				3,
				4,
				5
			].map((lvl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: ringPath(lvl),
				className: "fill-none stroke-border",
				strokeWidth: lvl === 5 ? 1.25 : .75
			}, lvl)),
			PILLARS.map((_, i) => {
				const end = polar(i, PILLARS.length, R);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: CX,
					y1: CY,
					x2: end.x,
					y2: end.y,
					className: "stroke-border",
					strokeWidth: .75
				}, i);
			}),
			hasData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: dataPath,
				className: "fill-forest/20 stroke-forest",
				strokeWidth: 1.75
			}),
			hasData && dataPts.map((p, i) => {
				const pillar = PILLARS[i];
				if (!pillar || (map[pillar.id] || 0) <= 0) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: p.x,
					cy: p.y,
					r: 3.2,
					className: "fill-forest"
				}, pillar.id);
			}),
			PILLARS.map((p, i) => {
				const pos = polar(i, PILLARS.length, 124);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: pos.x,
					y: pos.y,
					textAnchor: "middle",
					dominantBaseline: "middle",
					className: "fill-muted",
					style: {
						fontSize: "11px",
						fontFamily: "var(--font-sans)"
					},
					children: p.short
				}, p.id);
			})
		]
	});
}
//#endregion
export { Radar as t };
