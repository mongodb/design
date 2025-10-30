import { auth } from '@/auth';
import { PrivateContentWall } from '@/components/global';

import WriterTopPane from './components/WriterTopPane';
import WriterResults from './components/WriterResults';
import WriterForm from './components/WriterForm';
import { WriterProvider } from './components/WriterProvider';

export default async function Page() {
	const session = await auth();
	const isLoggedIn = !!session?.user;

	// Render the Private Content Wall if the user is not logged in
	// The API is more securely authenticated - we render the content wall like this so users aren't presented an error when they try to use the tool without being logged in
	if (!isLoggedIn) {
		return (
			<PrivateContentWall />
		);
	}

	return (
		<WriterProvider>
			<WriterTopPane>
				<WriterForm />
			</WriterTopPane>

			<WriterResults />
		</WriterProvider>
	);
}

// export default async function Page({
// 	params: { contentPage: contentPageTitle },
// }: {
// 	params: { contentPage: string };
// }) {
// 	const [session, contentPage] = await Promise.all([
// 		auth(),
// 		getContentPage(startCase(contentPageTitle)),
// 	]);
// 	const isLoggedIn = !!session?.user;
// 	const isContentPrivate = contentPage?.is_private;
// 	const shouldRenderPrivateContentWall = Boolean(
// 		isContentPrivate && !isLoggedIn,
// 	);

// 	return (
// 		<div>
// 			{shouldRenderPrivateContentWall ? (
// 				<PrivateContentWall />
// 			) : (
// 				<ContentPage contentPage={contentPage} />
// 			)}
// 		</div>
// 	);
// }
