import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'manifest.json',
                    dest: '.'
                },
                {
                    src: './icons',
                    dest: '.'
                }
            ]
        })
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                background: resolve(__dirname, 'src/background.ts'),
                content: resolve(__dirname, 'src/content.ts'),
                options: resolve(__dirname, 'options.html'),
                popup: resolve(__dirname, 'popup.html'),
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
