import ContentfulRichText from 'components/ContentfulRichText';
import ContentPageLayout from 'layouts/ContentPageLayout';
import { ReactElement } from 'react';
import {
  getContentPage,
  getContentPageGroups,
} from 'utils/getContentstackResources';
import { ContentPageFields } from 'utils/types';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';
import { Entry } from 'contentstack';

const ContentPage = ({ contentPage }) => {
  return <ContentfulRichText document={contentPage?.content} />;
};

ContentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ContentPageLayout contentPageTitle={page.props.contentPage.title}>
      {page}
    </ContentPageLayout>
  );
};

export async function getStaticPaths() {
  const contentPageGroups = await getContentPageGroups();
  const paths: Array<{
    params: { contentPageGroup: string; contentPageTitle: string };
  }> = [];
  contentPageGroups.forEach(pageGroup => {
    pageGroup.contentpages.forEach(
      (contentPage: any) => {
        const newPath = {
          params: {
            contentPageGroup: kebabCase(pageGroup.title),
            contentPageTitle: kebabCase(contentPage.title),
          },
        };
        paths.push(newPath);
      },
    );
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentPage = await getContentPage(startCase(params.contentPageTitle));
  return {
    props: {
      contentPage,
    },
  };
}

export default ContentPage;
