import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-CCMvQdln.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Dz_MmIGV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-forest text-forest-fg hover:opacity-90",
			secondary: "bg-surface-2 text-ink hover:bg-border",
			outline: "border border-border-strong bg-transparent text-ink hover:bg-surface-2",
			ghost: "text-ink hover:bg-surface-2",
			danger: "bg-danger text-forest-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
