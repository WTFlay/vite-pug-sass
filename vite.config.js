import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const options = { pretty: true }
const locals = { name: 'Flavien' }

export default defineConfig({
  plugins: [pugPlugin(options, locals)]
});
