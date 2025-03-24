'use client';
import {
  InstallCard,
  PropTableState,
  PropsTable,
  VersionCard,
} from '@/components/code-docs';
import {
  getCodeDocsMetaCardsStyles,
  codeDocsPageStyles,
} from './codeDocs.styles';

interface CodeDocsContentProps {
  componentName: string;
  componentProps?: Array<PropTableState>;
  changelog: string | null;
}

export const CodeDocsContent = ({
  componentName,
  componentProps,
  changelog,
}: CodeDocsContentProps) => {
  return (
    <div className={codeDocsPageStyles}>
      <div className={getCodeDocsMetaCardsStyles(!!changelog)}>
        <InstallCard component={componentName} />
        {changelog && (
          <VersionCard component={componentName} changelog={changelog} />
        )}
      </div>

      {componentProps?.map(({ name, props }) => {
        return <PropsTable key={name} name={name} props={props} />;
      })}
    </div>
  );
};
