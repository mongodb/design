import { auth } from '@/auth';
import { PrivateContentWall } from '@/components/global';

import WriterTopPane from './components/WriterTopPane';
import WriterResults from './components/WriterResults';
import WriterForm from './components/WriterForm';
import { WriterProvider } from './components/WriterProvider';

export async function WriterPage() {
	const session = await auth();
	const isLoggedIn = !!session?.user;

	if (!isLoggedIn) {
		return <PrivateContentWall />;
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
