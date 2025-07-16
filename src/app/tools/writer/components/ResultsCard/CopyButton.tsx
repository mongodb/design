import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { useState } from "react";
import { css, cx } from "@leafygreen-ui/emotion";
import { palette } from "@leafygreen-ui/palette";
import IconButton from '@leafygreen-ui/icon-button';
import Icon from '@leafygreen-ui/icon';

const copySuccessStylesDarkMode = css`
	background-color: ${palette.green.dark3};
	color: ${palette.green.base};

	&:hover {
		background-color: ${palette.green.dark2};
		color: ${palette.white};
	}
`;

const copyButtonStylesDarkMode = css`
	transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

	&:active {
		background-color: ${palette.gray.dark1};
		color: ${palette.gray.light1};
	}
`;

const copySuccessStylesLightMode = css`
	background-color: ${palette.green.light3};
	color: ${palette.green.dark1};

	&:hover {
		background-color: ${palette.green.light2};
		color: ${palette.green.dark2};
	}
`;

const copyButtonStylesLightMode = css`
	transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

	&:active {
		background-color: ${palette.gray.light2};
		color: ${palette.gray.dark1};
	}
`;

export interface CopyButtonProps {
	copyText: string;
}

export default function CopyButton({ copyText }: CopyButtonProps) {
	const { theme } = useDarkMode();
	const [copySuccess, setCopySuccess] = useState(false);

	function copyTextToClipboard() {
		navigator.clipboard.writeText(copyText).then(() => {
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
		});
	}

	let copyButtonClassName = '';

	if (theme === 'dark') {
		copyButtonClassName = cx(copyButtonStylesDarkMode, {
			[copySuccessStylesDarkMode]: copySuccess,
		});
	} else {
		copyButtonClassName = cx(copyButtonStylesLightMode, {
			[copySuccessStylesLightMode]: copySuccess,
		});
	}

	return (
		<IconButton
			className={copyButtonClassName}
			aria-label="Copy result to clipboard"
			onClick={copyTextToClipboard}
		>
			<Icon glyph={copySuccess ? 'Checkmark' : 'Copy'} />
		</IconButton>
	);
}
