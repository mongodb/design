'use client';
import {
  InstallCard,
  PropTableState,
  PropsTable,
  VersionCard,
} from '@/components/code-docs';
import { codeDocsMetaCardsStyles, codeDocsPageStyles } from './codeDocs.styles';
import { SubPath } from '@/utils';

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
      <div className={codeDocsMetaCardsStyles}>
        <InstallCard component={componentName} />
        <VersionCard changelog={changelog} component={componentName} />
      </div>

      {componentProps?.map(({ name, props }) => {
        return <PropsTable key={name} name={name} props={props} />;
      })}
    </div>
  );
};
