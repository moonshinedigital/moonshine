/** @type {import("prettier").Config} */
export default {
  // Prettier-specific options
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  proseWrap: 'always',
  bracketSameLine: true,

  // Options should align with .editorconfig
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss', 'prettier-plugin-astro-organize-imports'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
