/** @type {import("prettier").Config} */
export default {
  // Prettier-specific options
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  proseWrap: 'always',

  // Options should align with .editorconfig
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-astro-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
