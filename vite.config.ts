import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import * as path from 'node:path'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())

	return {
		plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		server: {
			port: Number(env.VITE_APP_PORT) || 3000,
			open: true
		}
	}
})
