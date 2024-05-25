import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

const isProduction = import.meta.env.PROD;
const prodBase = '/astro-test';
const prodSite = 'https://mustak.github.io';

const baseConfig = {
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        partytown(),
        mdx(),
    ],
    trailingSlash: 'always',
};
const prodconfig = {
    ...baseConfig,
    site: prodSite,
    base: prodBase,
};
const devconfig = {
    ...baseConfig,
    site: 'http://localhost:4321',
    base: prodBase,
};
const config = isProduction ? prodconfig : devconfig;

// https://astro.build/config
export default defineConfig({...config});

// https://github.com/mustak/astro-test
