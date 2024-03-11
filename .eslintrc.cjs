module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  
  ],
}