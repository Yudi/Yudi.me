import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';

/** @type {import('postcss-load-config').Config} */
export default {
	plugins: [
		tailwind,
		autoprefixer,
		...(process.env.NODE_ENV === 'production' ? [cssnanoPlugin] : [])
	]
};
