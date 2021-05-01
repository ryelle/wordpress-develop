const reHex = "/(?!, )#[0-9a-f]{3}([0-9a-f]{3})?$/i";
const reRgba = "/rgba?\(([0-9]+(.[0-9]*)?,? ?){3,4}\)/i";

module.exports = {
	rules: {
		"declaration-property-value-disallowed-list": {
			"/^color/": [reHex, reRgba],
			"/^border/": [reHex, reRgba],
			"/^background/": [reHex, reRgba],
			"/^outline/": [reHex, reRgba],
			"/^box-shadow/": [reHex, reRgba],
		},
	},
};
