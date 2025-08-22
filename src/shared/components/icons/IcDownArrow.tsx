import type { SVGProps } from 'react';
const SvgIcDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 16"
    {...props}
  >
    <path
      stroke="#E7EBEF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M26 2 14 14 2 2"
    />
  </svg>
);
export default SvgIcDownArrow;
