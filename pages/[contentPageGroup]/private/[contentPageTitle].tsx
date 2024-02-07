import { ReactElement } from 'react';
import ContentPageLayout from 'layouts/ContentPageLayout';
import startCase from 'lodash/startCase';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getContentPage } from 'utils/ContentStack/getContentstackResources';

import ContentstackRichText from 'components/ContentstackRichText';
import Unauthorized from 'components/Unauthorized';

const ContentPage = ({ contentPage }) => {
  if (contentPage !== null)
    return <ContentstackRichText content={contentPage?.content} />;

  return <Unauthorized />;
};

ContentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ContentPageLayout
      contentPageTitle={page.props.contentPageTitle ?? 'Protected Page'}
    >
      {page}
    </ContentPageLayout>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const contentPage = session
    ? await getContentPage(startCase(params.contentPageTitle))
    : null;
  return {
    props: {
      contentPage,
      contentPageTitle: contentPage ? contentPage.title : null,
    },
  };
}

export default ContentPage;
