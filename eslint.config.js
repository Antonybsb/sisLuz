import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-var': 'error', // Exige `let` ou `const` (não permite `var`)
      'no-console': 'warn', // Alerta sobre `console.log` (útil para produção)
      semi: ['error', 'always'], // Ponto e vírgula obrigatório
      quotes: ['error', 'single'], // Aspas simples ('')
      camelcase: 'error' // Força camelCase em variáveis
    }
  }
]);
