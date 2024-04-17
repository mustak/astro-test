import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProduction = import.meta.env.PROD;
const prodBase = '/astro-test';
const prodSite = 'https://mustak.github.com';

const prodconfig = {
    site: prodSite,
    base: prodBase,
    trailingSlash: 'always',
};

const devconfig = {
    site: 'http://localhost:4321',
    base: '/',
    trailingSlash: 'always',
};

const config = isProduction ? prodconfig : devconfig;

export default defineConfig(config);

// https://github.com/mustak/astro-test
