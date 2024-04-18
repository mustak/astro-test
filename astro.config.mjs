import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

const isProduction = import.meta.env.PROD;
const prodBase = '/astro-test';
const prodSite = 'https://mustak.github.com';

const baseConfig = {
    integrations: [react(), tailwind(), partytown(), mdx()],
};
const prodconfig = {
    ...baseConfig,
    site: prodSite,
    base: prodBase,
    trailingSlash: 'always',
};
const devconfig = {
    ...baseConfig,
    // site: 'http://localhost:4321',
    // base: '/',
    // trailingSlash: 'always',
};
const config = isProduction ? prodconfig : devconfig;

// https://astro.build/config
export default defineConfig(config);

// https://github.com/mustak/astro-test
