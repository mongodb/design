import ContentfulRichText from 'components/ContentfulRichText';
import { Entry } from 'contentful';
import ContentPageLayout from 'layouts/ContentPageLayout';
import { ReactElement } from 'react';
import { getContentPage, getContentPageSections } from 'utils/getContentfulResources'
import titlecase from 'utils/titlecase';
import { ContentPageFields } from 'utils/types';

const ContentPage = ({ contentPage }) => {
  return <ContentfulRichText document={contentPage.fields?.content} />
}

ContentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ContentPageLayout contentPageTitle={page.props.contentPage.fields.title}>
      {page}
    </ContentPageLayout>
  )
}

export async function getStaticPaths() {
  const contentPageSections = await getContentPageSections();
  const paths: Array<any> = []
  contentPageSections.forEach(pageSection => {
    pageSection.fields.contentPages.forEach((contentPage: Entry<ContentPageFields>) => {
      const newPath = {
        params: {
          contentPageSection: pageSection.fields.title.toLowerCase(),
          contentPageTitle: contentPage.fields.title.toLowerCase()
        }
      }
      paths.push(newPath)
    })
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const contentPage = await getContentPage(titlecase(params.contentPageSection), titlecase(params.contentPageTitle));
  return {
    props: {
      contentPage,
    },
  };
}

export default ContentPage