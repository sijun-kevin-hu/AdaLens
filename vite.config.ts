import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: 'dist',
        'rollupOptions': {
            input: {
                background: resolve(__dirname, 'src/background.ts'),
                content: resolve(__dirname, 'src/content.ts'),
                popup: resolve(__dirname, 'src/popup.ts'),
                options: resolve(__dirname, 'src/options.ts')
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name].[ext]',
                format: 'es',
            },
        },
    }
});
