import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProduction = import.meta.env.PROD;
const base = 'astro-test';
const site = 'https://mustak.github.com';

const prodconfig = {
    site,
    base,
};

const config = isProduction ? prodconfig : {};
export default defineConfig(config);
// https://github.com/mustak/astro-test
