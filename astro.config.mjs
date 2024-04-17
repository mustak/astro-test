import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProduction = import.meta.env.PROD;
const prodBase = '/astro-test';
const prodSite = 'https://mustak.github.com';

const prodconfig = {
    site: prodSite,
    base: prodBase,
    trailingSlash: 'never',
};

const config = isProduction ? prodconfig : {};

export default defineConfig(config);

// https://github.com/mustak/astro-test
