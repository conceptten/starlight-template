const starlightPlugin = require('@astrojs/starlight-tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [starlightPlugin(), require('@concept10/starlight/tailwind')],
};
