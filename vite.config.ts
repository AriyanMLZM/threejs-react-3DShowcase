import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	base: '/threejs-react-3DShowcase',
	plugins: [tailwindcss()],
})
