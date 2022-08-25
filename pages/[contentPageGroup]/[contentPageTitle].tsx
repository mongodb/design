import ContentfulRichText from 'components/ContentfulRichText/ContentfulRichText';
import { Entry } from 'contentful';
import ContentPageLayout from 'layouts/ContentPageLayout';
import { ReactElement } from 'react';
import {
  getContentPage,
  getContentPageGroups,
} from 'utils/getContentfulResources';
import { ContentPageFields } from 'utils/types';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';

const ContentPage = ({ contentPage }) => {
  return <ContentfulRichText document={contentPage.fields?.content} />;
};

ContentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ContentPageLayout contentPageTitle={page.props.contentPage.fields.title}>
      {page}
    </ContentPageLayout>
  );
};

export async function getStaticPaths() {
  const contentPageGroups = await getContentPageGroups();
  const paths: Array<any> = [];
  contentPageGroups.forEach(pageGroup => {
    pageGroup.fields.contentPages.forEach(
      (contentPage: Entry<ContentPageFields>) => {
        const newPath = {
          params: {
            contentPageGroup: kebabCase(pageGroup.fields.title),
            contentPageTitle: kebabCase(contentPage.fields.title),
          },
        };
        paths.push(newPath);
      },
    );
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentPage = await getContentPage(
    startCase(params.contentPageGroup),
    startCase(params.contentPageTitle),
  );
  return {
    props: {
      contentPage,
    },
  };
}

export default ContentPage;
