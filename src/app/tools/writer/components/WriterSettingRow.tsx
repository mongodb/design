import {css} from '@emotion/css'
import { palette } from '@leafygreen-ui/palette';
import {spacing} from '@leafygreen-ui/tokens';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

interface SettingRowProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

export default function SettingRow({children, ...props}: SettingRowProps) {
	const { theme } = useDarkMode();
	const borderColor = theme === 'dark' ? palette.gray.dark2 : palette.gray.light2;

	const settingRowStyles = css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: ${spacing[600]}px 0;

		& + & {
			border-top: 1px solid ${borderColor};
		}
	`;

	return (
		<div
			{...props}
			className={settingRowStyles}
		>
			{children}
		</div>
	);
}
