const config = {
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

export default config;

