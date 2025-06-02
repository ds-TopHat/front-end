import type { SVGProps } from 'react';
const SvgIcMainLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 257 438"
    {...props}
  >
    <path
      stroke="url(#ic_main_line_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M173.5 428S38 419 38 358c0-85.5 195.866-65 208.5-155s-272-193-272-193"
      opacity={0.5}
    />
    <defs>
      <linearGradient
        id="ic_main_line_svg__a"
        x1={189.5}
        x2={-21.5}
        y1={437}
        y2={133}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#488AFE" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIcMainLine;
