'use client';

import { palette } from "@leafygreen-ui/palette";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";

export default function Notch({ className }: {className?: string}) {
  const { theme } = useDarkMode();
  const notchBackgroundColor = theme === "dark" ? palette.black : palette.white;
  const notchStrokeColor = theme === "dark" ? palette.gray.dark2 : palette.gray.light2;

  return (
    <svg
      width="14"
      height="57"
      viewBox="0 0 14 57"
      fill="none"
      className={className}
    >
      <path
				d="M1 0.5L1 10.00488C1.00008 12.11838 1.78726 14.15078 3.19922 15.70998L3.48926 16.01468L9.39844 21.92378C12.23578 24.76118 12.32508 29.30688 9.66508 32.25098L9.39844 32.53018L3.48926 38.43938C1.89524 40.03338 1 42.19578 1 44.45008L1 55.90918L-0.090822 55.90918L-0.09082 0.5L1 0.5Z"
				fill={notchBackgroundColor}
				stroke={notchStrokeColor}
			/>
      
			<rect
				x="0"
				width="57"
				height="1"
				transform="rotate(90 .5 0)"
				fill={notchBackgroundColor}
			/>
    </svg>
  );
}