import {css} from '@emotion/css'
import WriterLeftPane from './components/WriterTopPane';
import WriterRightPane from './components/WriterResults';
import WriterForm from './components/WriterForm';
import { WriterProvider } from './components/WriterProvider';

const splitLayoutContainerStyles = css`
  display: flex;
	justify-content: stretch;
`;

export default function SplitLayout() {
	return (
		<WriterProvider>
			<div className={splitLayoutContainerStyles}>
				<WriterLeftPane>
					<WriterForm />
				</WriterLeftPane>

				<WriterRightPane />
			</div>
		</WriterProvider>
	);
}
