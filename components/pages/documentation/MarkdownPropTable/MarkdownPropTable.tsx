import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { GridContainer, GridItem } from 'components/Grid';
import PropTable, { ReadmeMarkdown } from './PropTable';
import TypeDefinition from './TypeDefinition';

export const MarkdownPropTable = ({ componentName, readme }) => {
  const markdownAst = unified()
    .use(markdown)
    .use(remarkGfm)
    .parse(readme) as unknown as ReadmeMarkdown;

  return (
    <GridContainer align="flex-start" justify="flex-start">
      <GridItem sm={12} md={12} xl={12}>
        <PropTable markdownAst={markdownAst} component={componentName} />
        <TypeDefinition markdownAst={markdownAst} readme={readme} />
      </GridItem>
    </GridContainer>
  );
};
