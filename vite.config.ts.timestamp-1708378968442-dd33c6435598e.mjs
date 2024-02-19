// vite.config.ts
import * as child from "child_process";
import * as path from "path";
import autoprefixer from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/autoprefixer@10.4.16_postcss@8.4.31/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/tailwindcss@3.3.5/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.10/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/vite-plugin-pwa@0.16.7_vite@4.5.0_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import solid from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/vite-plugin-solid@2.7.0_solid-js@1.8.5_vite@4.5.0/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import wasm from "file:///Users/jasonbranscum/Desktop/All%20my%20programs/mutiny-web/node_modules/.pnpm/vite-plugin-wasm@3.2.2_vite@4.5.0/node_modules/vite-plugin-wasm/exports/import.mjs";

// manifest.ts
var manifest = {
  name: "Mutiny Wallet",
  orientation: "portrait",
  short_name: "Mutiny",
  description: "A lightning wallet",
  theme_color: "#000",
  display: "standalone",
  categories: ["finance", "social"],
  icons: [
    {
      src: "192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "maskable_icon.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable"
    },
    {
      src: "maskable_icon.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "windows11/SmallTile.scale-100.png",
      sizes: "71x71"
    },
    {
      src: "windows11/SmallTile.scale-125.png",
      sizes: "89x89"
    },
    {
      src: "windows11/SmallTile.scale-150.png",
      sizes: "107x107"
    },
    {
      src: "windows11/SmallTile.scale-200.png",
      sizes: "142x142"
    },
    {
      src: "windows11/SmallTile.scale-400.png",
      sizes: "284x284"
    },
    {
      src: "windows11/Square150x150Logo.scale-100.png",
      sizes: "150x150"
    },
    {
      src: "windows11/Square150x150Logo.scale-125.png",
      sizes: "188x188"
    },
    {
      src: "windows11/Square150x150Logo.scale-150.png",
      sizes: "225x225"
    },
    {
      src: "windows11/Square150x150Logo.scale-200.png",
      sizes: "300x300"
    },
    {
      src: "windows11/Square150x150Logo.scale-400.png",
      sizes: "600x600"
    },
    {
      src: "windows11/Wide310x150Logo.scale-100.png",
      sizes: "310x150"
    },
    {
      src: "windows11/Wide310x150Logo.scale-125.png",
      sizes: "388x188"
    },
    {
      src: "windows11/Wide310x150Logo.scale-150.png",
      sizes: "465x225"
    },
    {
      src: "windows11/Wide310x150Logo.scale-200.png",
      sizes: "620x300"
    },
    {
      src: "windows11/Wide310x150Logo.scale-400.png",
      sizes: "1240x600"
    },
    {
      src: "windows11/LargeTile.scale-100.png",
      sizes: "310x310"
    },
    {
      src: "windows11/LargeTile.scale-125.png",
      sizes: "388x388"
    },
    {
      src: "windows11/LargeTile.scale-150.png",
      sizes: "465x465"
    },
    {
      src: "windows11/LargeTile.scale-200.png",
      sizes: "620x620"
    },
    {
      src: "windows11/LargeTile.scale-400.png",
      sizes: "1240x1240"
    },
    {
      src: "windows11/Square44x44Logo.scale-100.png",
      sizes: "44x44"
    },
    {
      src: "windows11/Square44x44Logo.scale-125.png",
      sizes: "55x55"
    },
    {
      src: "windows11/Square44x44Logo.scale-150.png",
      sizes: "66x66"
    },
    {
      src: "windows11/Square44x44Logo.scale-200.png",
      sizes: "88x88"
    },
    {
      src: "windows11/Square44x44Logo.scale-400.png",
      sizes: "176x176"
    },
    {
      src: "windows11/StoreLogo.scale-100.png",
      sizes: "50x50"
    },
    {
      src: "windows11/StoreLogo.scale-125.png",
      sizes: "63x63"
    },
    {
      src: "windows11/StoreLogo.scale-150.png",
      sizes: "75x75"
    },
    {
      src: "windows11/StoreLogo.scale-200.png",
      sizes: "100x100"
    },
    {
      src: "windows11/StoreLogo.scale-400.png",
      sizes: "200x200"
    },
    {
      src: "windows11/SplashScreen.scale-100.png",
      sizes: "620x300"
    },
    {
      src: "windows11/SplashScreen.scale-125.png",
      sizes: "775x375"
    },
    {
      src: "windows11/SplashScreen.scale-150.png",
      sizes: "930x450"
    },
    {
      src: "windows11/SplashScreen.scale-200.png",
      sizes: "1240x600"
    },
    {
      src: "windows11/SplashScreen.scale-400.png",
      sizes: "2480x1200"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-16.png",
      sizes: "16x16"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-20.png",
      sizes: "20x20"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-24.png",
      sizes: "24x24"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-30.png",
      sizes: "30x30"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-32.png",
      sizes: "32x32"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-36.png",
      sizes: "36x36"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-40.png",
      sizes: "40x40"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-44.png",
      sizes: "44x44"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-48.png",
      sizes: "48x48"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-60.png",
      sizes: "60x60"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-64.png",
      sizes: "64x64"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-72.png",
      sizes: "72x72"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-80.png",
      sizes: "80x80"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-96.png",
      sizes: "96x96"
    },
    {
      src: "windows11/Square44x44Logo.targetsize-256.png",
      sizes: "256x256"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
      sizes: "16x16"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
      sizes: "20x20"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
      sizes: "24x24"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
      sizes: "30x30"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
      sizes: "32x32"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
      sizes: "36x36"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
      sizes: "40x40"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
      sizes: "44x44"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
      sizes: "48x48"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
      sizes: "60x60"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
      sizes: "64x64"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
      sizes: "72x72"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
      sizes: "80x80"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
      sizes: "96x96"
    },
    {
      src: "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
      sizes: "256x256"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
      sizes: "16x16"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
      sizes: "20x20"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
      sizes: "24x24"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
      sizes: "30x30"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
      sizes: "32x32"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
      sizes: "36x36"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
      sizes: "40x40"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
      sizes: "44x44"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
      sizes: "48x48"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
      sizes: "60x60"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
      sizes: "64x64"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
      sizes: "72x72"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
      sizes: "80x80"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
      sizes: "96x96"
    },
    {
      src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
      sizes: "256x256"
    },
    {
      src: "android/android-launchericon-512-512.png",
      sizes: "512x512"
    },
    {
      src: "android/android-launchericon-192-192.png",
      sizes: "192x192"
    },
    {
      src: "android/android-launchericon-144-144.png",
      sizes: "144x144"
    },
    {
      src: "android/android-launchericon-96-96.png",
      sizes: "96x96"
    },
    {
      src: "android/android-launchericon-72-72.png",
      sizes: "72x72"
    },
    {
      src: "android/android-launchericon-48-48.png",
      sizes: "48x48"
    },
    {
      src: "ios/16.png",
      sizes: "16x16"
    },
    {
      src: "ios/20.png",
      sizes: "20x20"
    },
    {
      src: "ios/29.png",
      sizes: "29x29"
    },
    {
      src: "ios/32.png",
      sizes: "32x32"
    },
    {
      src: "ios/40.png",
      sizes: "40x40"
    },
    {
      src: "ios/50.png",
      sizes: "50x50"
    },
    {
      src: "ios/57.png",
      sizes: "57x57"
    },
    {
      src: "ios/58.png",
      sizes: "58x58"
    },
    {
      src: "ios/60.png",
      sizes: "60x60"
    },
    {
      src: "ios/64.png",
      sizes: "64x64"
    },
    {
      src: "ios/72.png",
      sizes: "72x72"
    },
    {
      src: "ios/76.png",
      sizes: "76x76"
    },
    {
      src: "ios/80.png",
      sizes: "80x80"
    },
    {
      src: "ios/87.png",
      sizes: "87x87"
    },
    {
      src: "ios/100.png",
      sizes: "100x100"
    },
    {
      src: "ios/114.png",
      sizes: "114x114"
    },
    {
      src: "ios/120.png",
      sizes: "120x120"
    },
    {
      src: "ios/128.png",
      sizes: "128x128"
    },
    {
      src: "ios/144.png",
      sizes: "144x144"
    },
    {
      src: "ios/152.png",
      sizes: "152x152"
    },
    {
      src: "ios/167.png",
      sizes: "167x167"
    },
    {
      src: "ios/180.png",
      sizes: "180x180"
    },
    {
      src: "ios/192.png",
      sizes: "192x192"
    },
    {
      src: "ios/256.png",
      sizes: "256x256"
    },
    {
      src: "ios/512.png",
      sizes: "512x512"
    },
    {
      src: "ios/1024.png",
      sizes: "1024x1024"
    }
  ],
  shortcuts: [
    {
      name: "Send",
      short_name: "Send",
      url: "/send",
      icons: [
        {
          src: "/images/send.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    },
    {
      name: "Receive",
      short_name: "Receive",
      url: "/receive",
      icons: [
        {
          src: "/images/receive.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    },
    {
      name: "Activity",
      short_name: "Activity",
      url: "/activity",
      icons: [
        {
          src: "/images/activity.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    }
  ]
};
var manifest_default = manifest;

// vite.config.ts
var __vite_injected_original_dirname = "/Users/jasonbranscum/Desktop/All my programs/mutiny-web";
var commitHash = process.env.VITE_COMMIT_HASH ?? child.execSync("git rev-parse --short HEAD").toString().trim();
var pwaOptions = {
  base: "/",
  registerType: "prompt",
  devOptions: {
    enabled: false
  },
  workbox: {
    navigateFallback: "/index.html",
    globPatterns: ["**/*.{js,css,html,svg,png,gif,wasm}"],
    // mutiny_wasm is 10mb, so we'll do 25mb to be safe
    maximumFileSizeToCacheInBytes: 25 * 1024 * 1024
  },
  includeAssets: ["favicon.ico", "robots.txt"],
  manifest: manifest_default
};
var vite_config_default = defineConfig({
  build: {
    target: "esnext",
    outDir: "dist/public",
    emptyOutDir: true
  },
  server: {
    port: 3420,
    fs: {
      // Allow serving files from one level up (so that if mutiny-node is a sibling folder we can use it locally)
      allow: [".."]
    }
  },
  plugins: [wasm(), solid(), VitePWA(pwaOptions)],
  define: {
    "import.meta.env.__COMMIT_HASH__": JSON.stringify(commitHash),
    "import.meta.env.__RELEASE_VERSION__": JSON.stringify(
      process.env.npm_package_version
    )
  },
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__vite_injected_original_dirname, "./src") }]
  },
  optimizeDeps: {
    // Don't want vite to bundle these late during dev causing reload
    include: [
      "qr-scanner",
      "@solid-primitives/upload",
      "i18next",
      "i18next-browser-languagedetector",
      "@capacitor-mlkit/barcode-scanning",
      "@capacitor/app",
      "@capacitor/app-launcher",
      "@capacitor/clipboard",
      "@capacitor/core",
      "@capacitor/filesystem",
      "@capacitor/haptics",
      "@capacitor/share",
      "@capacitor/status-bar",
      "@capacitor/toast"
    ],
    // This is necessary because otherwise `vite dev` can't find the wasm
    exclude: ["@mutinywallet/mutiny-wasm", "@mutinywallet/waila-wasm"]
  },
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFzb25icmFuc2N1bS9EZXNrdG9wL0FsbCBteSBwcm9ncmFtcy9tdXRpbnktd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFzb25icmFuc2N1bS9EZXNrdG9wL0FsbCBteSBwcm9ncmFtcy9tdXRpbnktd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYXNvbmJyYW5zY3VtL0Rlc2t0b3AvQWxsJTIwbXklMjBwcm9ncmFtcy9tdXRpbnktd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgY2hpbGQgZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVQV0EsIFZpdGVQV0FPcHRpb25zIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHNvbGlkIGZyb20gXCJ2aXRlLXBsdWdpbi1zb2xpZFwiO1xuaW1wb3J0IHdhc20gZnJvbSBcInZpdGUtcGx1Z2luLXdhc21cIjtcblxuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0XCI7XG5cbmNvbnN0IGNvbW1pdEhhc2ggPVxuICAgIHByb2Nlc3MuZW52LlZJVEVfQ09NTUlUX0hBU0ggPz9cbiAgICBjaGlsZC5leGVjU3luYyhcImdpdCByZXYtcGFyc2UgLS1zaG9ydCBIRUFEXCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuXG5jb25zdCBwd2FPcHRpb25zOiBQYXJ0aWFsPFZpdGVQV0FPcHRpb25zPiA9IHtcbiAgICBiYXNlOiBcIi9cIixcbiAgICByZWdpc3RlclR5cGU6IFwicHJvbXB0XCIsXG4gICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH0sXG4gICAgd29ya2JveDoge1xuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiBcIi9pbmRleC5odG1sXCIsXG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWwsc3ZnLHBuZyxnaWYsd2FzbX1cIl0sXG4gICAgICAgIC8vIG11dGlueV93YXNtIGlzIDEwbWIsIHNvIHdlJ2xsIGRvIDI1bWIgdG8gYmUgc2FmZVxuICAgICAgICBtYXhpbXVtRmlsZVNpemVUb0NhY2hlSW5CeXRlczogMjUgKiAxMDI0ICogMTAyNFxuICAgIH0sXG4gICAgaW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5pY29cIiwgXCJyb2JvdHMudHh0XCJdLFxuICAgIG1hbmlmZXN0OiBtYW5pZmVzdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgICAgIG91dERpcjogXCJkaXN0L3B1YmxpY1wiLFxuICAgICAgICBlbXB0eU91dERpcjogdHJ1ZVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDM0MjAsXG4gICAgICAgIGZzOiB7XG4gICAgICAgICAgICAvLyBBbGxvdyBzZXJ2aW5nIGZpbGVzIGZyb20gb25lIGxldmVsIHVwIChzbyB0aGF0IGlmIG11dGlueS1ub2RlIGlzIGEgc2libGluZyBmb2xkZXIgd2UgY2FuIHVzZSBpdCBsb2NhbGx5KVxuICAgICAgICAgICAgYWxsb3c6IFtcIi4uXCJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IFt3YXNtKCksIHNvbGlkKCksIFZpdGVQV0EocHdhT3B0aW9ucyldLFxuICAgIGRlZmluZToge1xuICAgICAgICBcImltcG9ydC5tZXRhLmVudi5fX0NPTU1JVF9IQVNIX19cIjogSlNPTi5zdHJpbmdpZnkoY29tbWl0SGFzaCksXG4gICAgICAgIFwiaW1wb3J0Lm1ldGEuZW52Ll9fUkVMRUFTRV9WRVJTSU9OX19cIjogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uXG4gICAgICAgIClcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IFt7IGZpbmQ6IFwiflwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSB9XVxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIC8vIERvbid0IHdhbnQgdml0ZSB0byBidW5kbGUgdGhlc2UgbGF0ZSBkdXJpbmcgZGV2IGNhdXNpbmcgcmVsb2FkXG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIFwicXItc2Nhbm5lclwiLFxuICAgICAgICAgICAgXCJAc29saWQtcHJpbWl0aXZlcy91cGxvYWRcIixcbiAgICAgICAgICAgIFwiaTE4bmV4dFwiLFxuICAgICAgICAgICAgXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiLFxuICAgICAgICAgICAgXCJAY2FwYWNpdG9yLW1sa2l0L2JhcmNvZGUtc2Nhbm5pbmdcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci9hcHBcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci9hcHAtbGF1bmNoZXJcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci9jbGlwYm9hcmRcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci9jb3JlXCIsXG4gICAgICAgICAgICBcIkBjYXBhY2l0b3IvZmlsZXN5c3RlbVwiLFxuICAgICAgICAgICAgXCJAY2FwYWNpdG9yL2hhcHRpY3NcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci9zaGFyZVwiLFxuICAgICAgICAgICAgXCJAY2FwYWNpdG9yL3N0YXR1cy1iYXJcIixcbiAgICAgICAgICAgIFwiQGNhcGFjaXRvci90b2FzdFwiXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb3RoZXJ3aXNlIGB2aXRlIGRldmAgY2FuJ3QgZmluZCB0aGUgd2FzbVxuICAgICAgICBleGNsdWRlOiBbXCJAbXV0aW55d2FsbGV0L211dGlueS13YXNtXCIsIFwiQG11dGlueXdhbGxldC93YWlsYS13YXNtXCJdXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlcigpLCB0YWlsd2luZGNzcygpXVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9qYXNvbmJyYW5zY3VtL0Rlc2t0b3AvQWxsIG15IHByb2dyYW1zL211dGlueS13ZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYXNvbmJyYW5zY3VtL0Rlc2t0b3AvQWxsIG15IHByb2dyYW1zL211dGlueS13ZWIvbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2phc29uYnJhbnNjdW0vRGVza3RvcC9BbGwlMjBteSUyMHByb2dyYW1zL211dGlueS13ZWIvbWFuaWZlc3QudHNcIjtpbXBvcnQgeyBNYW5pZmVzdE9wdGlvbnMgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5cbmNvbnN0IG1hbmlmZXN0OiBQYXJ0aWFsPE1hbmlmZXN0T3B0aW9ucz4gPSB7XG4gICAgbmFtZTogXCJNdXRpbnkgV2FsbGV0XCIsXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgICBzaG9ydF9uYW1lOiBcIk11dGlueVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGlnaHRuaW5nIHdhbGxldFwiLFxuICAgIHRoZW1lX2NvbG9yOiBcIiMwMDBcIixcbiAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICBjYXRlZ29yaWVzOiBbXCJmaW5hbmNlXCIsIFwic29jaWFsXCJdLFxuICAgIGljb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIxOTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCI1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtYXNrYWJsZV9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibWFza2FibGVfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcImFueVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjcxeDcxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiODl4ODlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NtYWxsVGlsZS5zY2FsZS0xNTAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxMDd4MTA3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTQyeDE0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjI4NHgyODRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTEwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE1MHgxNTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTEyNS5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE4OHgxODhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjIyNXgyMjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTIwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjMwMHgzMDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjYwMHg2MDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0xMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMTB4MTUwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMzg4eDE4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvV2lkZTMxMHgxNTBMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2NXgyMjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0yMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2MjB4MzAwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTI0MHg2MDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL0xhcmdlVGlsZS5zY2FsZS0xMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMTB4MzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMzg4eDM4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2NXg0NjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL0xhcmdlVGlsZS5zY2FsZS0yMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2MjB4NjIwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtNDAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTI0MHgxMjQwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNDR4NDRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5zY2FsZS0xMjUucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1NXg1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjY2eDY2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiODh4ODhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5zY2FsZS00MDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNzZ4MTc2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTB4NTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1N0b3JlTG9nby5zY2FsZS0xMjUucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2M3g2M1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjc1eDc1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMjAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTAweDEwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3RvcmVMb2dvLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjIwMHgyMDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NwbGFzaFNjcmVlbi5zY2FsZS0xMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2MjB4MzAwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMTI1LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNzc1eDM3NVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTE1MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjkzMHg0NTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NwbGFzaFNjcmVlbi5zY2FsZS0yMDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxMjQweDYwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTQwMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjI0ODB4MTIwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMTYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNngxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyMHgyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyNHgyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMHgzMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMngzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzNngzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0MHg0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0NHg0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0OHg0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNjAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2MHg2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNjQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2NHg2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI3Mng3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtODAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI4MHg4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtOTYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI5Nng5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0xNi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE2eDE2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTIwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjB4MjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyNHgyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS0zMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjMweDMwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTMyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMzJ4MzJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzNngzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS00MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQweDQwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTQ0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNDR4NDRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0OHg0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS02MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjYweDYwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTY0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNjR4NjRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI3Mng3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tdW5wbGF0ZWRfdGFyZ2V0c2l6ZS04MC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjgweDgwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS11bnBsYXRlZF90YXJnZXRzaXplLTk2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTE2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTZ4MTZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS0yMC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjIweDIwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyNHgyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTMwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMzB4MzBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS0zMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjMyeDMyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzNngzNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTQwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNDB4NDBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS00NC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ0eDQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0OHg0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTYwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNjB4NjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS02NC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjY0eDY0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI3Mng3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJ3aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTgwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiODB4ODBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwid2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS05Ni5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIndpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTUxMi01MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tMTkyLTE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC9hbmRyb2lkLWxhdW5jaGVyaWNvbi0xNDQtMTQ0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTQ0eDE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhbmRyb2lkL2FuZHJvaWQtbGF1bmNoZXJpY29uLTk2LTk2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC9hbmRyb2lkLWxhdW5jaGVyaWNvbi03Mi03Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjcyeDcyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQvYW5kcm9pZC1sYXVuY2hlcmljb24tNDgtNDgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0OHg0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNngxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMjAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyMHgyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMjkucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyOXgyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMngzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNDAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0MHg0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNTAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MHg1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNTcucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1N3g1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNTgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1OHg1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNjAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2MHg2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNjQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI2NHg2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNzIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI3Mng3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNzYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI3Nng3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvODAucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI4MHg4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvODcucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI4N3g4N1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTAwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTAweDEwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTE0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTE0eDExNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTIwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTIweDEyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTI4LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTI4eDEyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTQ0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTQ0eDE0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTUyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTUyeDE1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTY3LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTY3eDE2N1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTgwLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTgweDE4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTkyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMjU2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpb3MvMTAyNC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjEwMjR4MTAyNFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNob3J0Y3V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNlbmRcIixcbiAgICAgICAgICAgIHNob3J0X25hbWU6IFwiU2VuZFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9zZW5kXCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvc2VuZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlJlY2VpdmVcIixcbiAgICAgICAgICAgIHNob3J0X25hbWU6IFwiUmVjZWl2ZVwiLFxuICAgICAgICAgICAgdXJsOiBcIi9yZWNlaXZlXCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvcmVjZWl2ZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFjdGl2aXR5XCIsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBcIkFjdGl2aXR5XCIsXG4gICAgICAgICAgICB1cmw6IFwiL2FjdGl2aXR5XCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvYWN0aXZpdHkucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVixZQUFZLFdBQVc7QUFDbFgsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBK0I7QUFDeEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTs7O0FDTGpCLElBQU0sV0FBcUM7QUFBQSxFQUN2QyxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxZQUFZLENBQUMsV0FBVyxRQUFRO0FBQUEsRUFDaEMsT0FBTztBQUFBLElBQ0g7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDSSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNJLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0ksS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDUDtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0g7QUFBQSxVQUNJLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNWO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSDtBQUFBLFVBQ0ksS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNIO0FBQUEsVUFDSSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDVjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKO0FBRUEsSUFBTyxtQkFBUTs7O0FEMWdCZixJQUFNLG1DQUFtQztBQVd6QyxJQUFNLGFBQ0YsUUFBUSxJQUFJLG9CQUNOLGVBQVMsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLEtBQUs7QUFFakUsSUFBTSxhQUFzQztBQUFBLEVBQ3hDLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxJQUNSLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxrQkFBa0I7QUFBQSxJQUNsQixjQUFjLENBQUMscUNBQXFDO0FBQUE7QUFBQSxJQUVwRCwrQkFBK0IsS0FBSyxPQUFPO0FBQUEsRUFDL0M7QUFBQSxFQUNBLGVBQWUsQ0FBQyxlQUFlLFlBQVk7QUFBQSxFQUMzQyxVQUFVO0FBQ2Q7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsRUFDakI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQTtBQUFBLE1BRUEsT0FBTyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsVUFBVSxDQUFDO0FBQUEsRUFDOUMsUUFBUTtBQUFBLElBQ0osbUNBQW1DLEtBQUssVUFBVSxVQUFVO0FBQUEsSUFDNUQsdUNBQXVDLEtBQUs7QUFBQSxNQUN4QyxRQUFRLElBQUk7QUFBQSxJQUNoQjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxhQUFrQixhQUFRLGtDQUFXLE9BQU8sRUFBRSxDQUFDO0FBQUEsRUFDeEU7QUFBQSxFQUNBLGNBQWM7QUFBQTtBQUFBLElBRVYsU0FBUztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBO0FBQUEsSUFFQSxTQUFTLENBQUMsNkJBQTZCLDBCQUEwQjtBQUFBLEVBQ3JFO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxTQUFTLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztBQUFBLElBQzNDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
