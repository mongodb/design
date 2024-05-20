import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { palette } from "@leafygreen-ui/palette";

export function Figma(props: JSX.IntrinsicElements["svg"]) {
  const { darkMode } = useDarkMode();
  const fillColor = darkMode ? palette.white : palette.black;

  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_573)">
        <path
          d="M8 7.99999C8 6.54225 9.18174 5.36047 10.6395 5.36047C12.0973 5.36047 13.279 6.54225 13.279 7.99999C13.279 9.45777 12.0973 10.6395 10.6395 10.6395C9.18174 10.6395 8 9.45777 8 7.99999Z"
          fill="#1ABCFE"
        />
        <path
          d="M2.72095 13.279C2.72095 11.8213 3.9027 10.6395 5.36046 10.6395H7.99998V13.279C7.99998 14.7368 6.81824 15.9186 5.36046 15.9186C3.9027 15.9186 2.72095 14.7368 2.72095 13.279Z"
          fill="#0ACF83"
        />
        <path
          d="M8 0.0814514V5.36047H10.6395C12.0973 5.36047 13.279 4.17873 13.279 2.72097C13.279 1.2632 12.0973 0.0814514 10.6395 0.0814514H8Z"
          fill="#FF7262"
        />
        <path
          d="M2.72095 2.72097C2.72095 4.17873 3.9027 5.36047 5.36046 5.36047H7.99998V0.0814514H5.36046C3.9027 0.0814514 2.72095 1.2632 2.72095 2.72097Z"
          fill="#F24E1E"
        />
        <path
          d="M2.72095 7.99999C2.72095 9.45777 3.9027 10.6395 5.36046 10.6395H7.99998V5.36047H5.36046C3.9027 5.36047 2.72095 6.54225 2.72095 7.99999Z"
          fill="#A259FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_573">
          <rect
            width="10.6667"
            height="16"
            fill={fillColor}
            transform="translate(2.66666)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
