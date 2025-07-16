import { useContext } from 'react';
import {css} from '@emotion/css';
import { palette } from '@leafygreen-ui/palette';
import {spacing, BaseFontSize} from '@leafygreen-ui/tokens';
import Card from '@leafygreen-ui/card';
import { Skeleton, Size } from '@leafygreen-ui/skeleton-loader';
import { Body } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { WriterContext } from './WriterProvider';
import EmptyIllustration from './EmptyIllustration';
import ResultsCard from './ResultsCard';

const loadingSkeletonLine = css`
	& + & {
		margin-top: ${spacing[100]}px;
	}

	&:last-of-type {
		width: 80%;
	}
`;

const skeletonCardStyles = css`
	flex-grow: 1;
	flex-shrink: 0;
	width: calc(33% - (${spacing[300]}px * 2 / 3));

	& + & {
		margin-left: ${spacing[300]}px;
	}
`;

function SkeletonCard() {
	return (
		<Card className={skeletonCardStyles}>
			<Skeleton
				className={loadingSkeletonLine}
				enableAnimations={true}
				size={Size.Small} />

			<Skeleton
				className={loadingSkeletonLine}
				enableAnimations={true}
				size={Size.Small} />
				
			<Skeleton
				className={loadingSkeletonLine}
				enableAnimations={true}
				size={Size.Small} />
		</Card>
	)
}

const resultsContainerStyles = css`
  display: flex;
	justify-content: center;
	align-items: stretch;
	padding: ${spacing[500]}px 0;
`;

const emptyIllustrationStyles = css`
	width: 200px;
	margin-right: ${spacing[300]}px;
`;

export default function RightPane() {
	const {
		results,
		isLoading,
	} = useContext(WriterContext);
	const { theme } = useDarkMode();

	const resultsDisplay = (() => {
		// if error

		if (isLoading) {
			return (
				<>
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</>
			);
		}

		if (results?.length) {
			return (
				<>
					{results.map(({message}, index) => (
						<ResultsCard resultText={message.content} key={index}></ResultsCard>
					))}
				</>
			);
		}

		const emptyStateTextStyles = css`
			text-align: center;
			color: ${theme === 'dark' ? palette.gray.light2 : palette.gray.dark2};
			font-size: ${BaseFontSize.Body2}px;
			font-style: italic;
			line-height: 24px;
			padding-left: ${spacing[300]}px;
			padding-right: ${spacing[300]}px;
		`;
	
		return (
			<>
				<EmptyIllustration className={emptyIllustrationStyles} />

				<Body className={emptyStateTextStyles}>
					Revise your in-product copy!
					<br/>
					Start by adding some text on the left.
				</Body>
			</>
		)
	})()

	return (
		<section className={resultsContainerStyles}>
			{resultsDisplay}
		</section>
	);
}