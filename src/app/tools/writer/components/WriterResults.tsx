'use client';

import { useContext } from 'react';
import {css, cx} from '@emotion/css';
import { palette } from '@leafygreen-ui/palette';
import {spacing, BaseFontSize} from '@leafygreen-ui/tokens';
import Card from '@leafygreen-ui/card';
import { Skeleton, Size } from '@leafygreen-ui/skeleton-loader';
import { Body } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { WriterContext } from './WriterProvider';
import EmptyIllustration from './EmptyIllustration';
import ResultsCard from './ResultsCard';
import {Transition, TransitionStatus} from 'react-transition-group';

// const loadingSkeletonLine = css`
// 	& + & {
// 		margin-top: ${spacing[100]}px;
// 	}

// 	&:last-of-type {
// 		width: 80%;
// 	}
// `;

// const skeletonCardStyles = css`
// 	flex-grow: 1;
// 	flex-shrink: 0;
// 	width: calc(33% - (${spacing[300]}px * 2 / 3));
// 	transform: translate3d(0, -20px, 0);
// 	transition: transform 0.3s ease-in-out;

// 	& + & {
// 		margin-left: ${spacing[300]}px;
// 	}

// 	&:not(:first-child):not(:last-child) {
// 		transition-delay: 0.1s;
// 	}

// 	&:last-child {
// 		transition-delay: 0.2s;
// 	}
// `;

// function SkeletonCard({className}: {className?: string}) {
// 	return (
// 		<Card className={cx(skeletonCardStyles, className)}>
// 			<Skeleton
// 				className={loadingSkeletonLine}
// 				enableAnimations={true}
// 				size={Size.Small} />

// 			<Skeleton
// 				className={loadingSkeletonLine}
// 				enableAnimations={true}
// 				size={Size.Small} />
				
// 			<Skeleton
// 				className={loadingSkeletonLine}
// 				enableAnimations={true}
// 				size={Size.Small} />
// 		</Card>
// 	)
// }

const resultsContainerStyles = css`
  display: flex;
	justify-content: center;
	align-items: stretch;
	padding: ${spacing[600]}px 0;
	position: relative;
`;

const emptyIllustrationStyles = css`
	width: 200px;
	margin-right: ${spacing[300]}px;
	transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	opacity: 1;
	transform: translate3d(0, 0, 0);
`;

const emptyState = css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${spacing[600]}px;
`;

const cardTransitionStyles: Record<TransitionStatus, string> = {
	entering: css`
	  transform: translate3d(0, 30px, 0);
		opacity: 0;
	`,
	entered: css`
		transform: translate3d(0, 0, 0);
		opacity: 1;
	`,
	exiting: css`
		transform: translate3d(0, 30px, 0);
		opacity: 0;
	`,
	exited: css`
		transform: translate3d(0, 30px, 0);
		opacity: 0;
	`,
	unmounted: ``,
};

export default function WriterResults() {
	const {
		results,
		isLoading,
	} = useContext(WriterContext);
	const { theme } = useDarkMode();

	const emptyStateTextStyles = css`
		text-align: center;
		align-self: center;
		color: ${theme === 'dark' ? palette.gray.light2 : palette.gray.dark2};
		font-size: ${BaseFontSize.Body2}px;
		font-style: italic;
		line-height: 24px;
		padding-left: ${spacing[300]}px;
		transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
		opacity: 1;
		transform: translate3d(0, 0, 0);
	`;

	const emptyIllustrationHiddenStyles = css`
		opacity: 0;
		transform: translate3d(-5px, 0, 0);
	`;

	const emptyTextHiddenStyles = css`
		opacity: 0;
		transform: translate3d(5px, 0, 0);
	`;

	const emptyHiddenStyles = css`
		pointer-events: none;
	`;

	const showEmptyState = (!results || results.length === 0) && !isLoading;

	return (
		<section className={resultsContainerStyles}>
			<div className={cx(emptyState, {
				[emptyHiddenStyles]: !showEmptyState,
			})}>
				<EmptyIllustration className={cx(emptyIllustrationStyles, {
					[emptyIllustrationHiddenStyles]: !showEmptyState,
				})} />

				<Body className={cx(emptyStateTextStyles, {
					[emptyTextHiddenStyles]: !showEmptyState,
				})}>
					Revise your in-product copy!
					<br/>
					Start by adding some text on the left.
				</Body>
			</div>

			<Transition in={isLoading || !!results?.length} timeout={300}>
				{(state) => (
					<>
						<ResultsCard className={cardTransitionStyles[state]} isLoading={isLoading} resultText={results[0]?.message.content} />
						<ResultsCard className={cardTransitionStyles[state]} isLoading={isLoading} resultText={results[1]?.message.content} />
						<ResultsCard className={cardTransitionStyles[state]} isLoading={isLoading} resultText={results[2]?.message.content} />
						</>
				)}
			</Transition>
		</section>
	);
}
