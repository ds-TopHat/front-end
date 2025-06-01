import type { SVGProps } from 'react';
const SvgIcMypage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 30"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2.5}
      d="M13 12.25a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M2.003 23.25 2 22.563c0-3.417 4.925-6.188 11-6.188s11 2.77 11 6.188c0 3.416 0 6.187-11 6.187-3.068 0-5.28-.216-6.875-.6"
    />
  </svg>
);
export default SvgIcMypage;
