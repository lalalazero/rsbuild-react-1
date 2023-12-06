import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginAssetsRetry({
      inlineScript: false,
      onRetry: ({ times, domain, url, tagName }) => {
        console.log('onRetry 触发');
        console.log(
          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,
        );
      },
      onSuccess: ({ times, domain, url, tagName }) => {
        console.log('onSuccess 触发');
        console.log(
          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,
        );
      },
      onFail: ({ times, domain, url, tagName }) => {
        console.log('onFail 触发');
        console.log(
          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,
        );
      },
    },)],
  tools: {
    postcss(config) {
      config.postcssOptions?.plugins?.push(tailwindcss)
    }
  },
  output: {
    disableSourceMap: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
      forceSplitting: {
        'bar': /Bar/
      }
    }
  }
});
