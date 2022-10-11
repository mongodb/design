import prettier from 'prettier/esm/standalone.mjs';
import babel from 'prettier/esm/parser-babel.mjs'
import pascalcase from 'pascalcase';

export const getStoryCode= (componentName, args) => {

  // GENERATE STORY CODE
  const componentDisplayName = pascalcase(componentName);
  const componentJSXProps = args ? Object.entries(args)
    .filter(([key]) => key !== 'children')
    .map(([key, val]) => `${key}="${val}"`)
    .join('\n') : '';

  const children = typeof args?.children === 'string' ? args.children : '...children'

  const storyCode = prettier.format(`
  <${componentDisplayName} ${componentJSXProps}>
    ${children}
  </${componentDisplayName}>
  `, {
    parser: 'babel',
    plugins: [babel],
    'printWidth': 80,
    'tabWidth': 2,
    'singleQuote': true,
    'trailingComma': 'all',
    'bracketSpacing': true,
    'jsxBracketSameLine': false,
    'arrowParens': 'avoid',
    'endOfLine': 'lf'
  });

  return storyCode
}