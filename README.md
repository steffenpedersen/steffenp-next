# Further development

- Make a Redux Provider for the state
- Decide on using either Tailwind or Styled Components[^1]
- Make better use of types for TypeScript for the Notion block components[^2]
- Investigate on the use of API keys for Notion[^3]
- Use a map for routes
- Use a `Props` interface for components
- Add ESLint for TypeScript
- Be consistent on the use of CSS units

[^1]: I started using Tailwind, but have since started using Styled Components.
[^2]: The implementation of Notion blocks are too _JavaScript'y_. We get better debugging possibilities and readability with types.
[^3]: It is generally not a good idea to use API keys directly in the JavaScript. I am hiding them with environment variables, but they are being deployed with Vercel. I would normally use a proxy, but that sounds overkill in this example.

# Bugs

- Safari bug for text gradient
