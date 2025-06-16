import type { SVGProps } from 'react';
const SvgIcFloatingSolve = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 88 88"
    {...props}
  >
    <rect
      width={88}
      height={88}
      fill="url(#ic_floating_solve_svg__a)"
      fillOpacity={0.2}
      rx={44}
    />
    <path
      fill="#fff"
      fillOpacity={0.8}
      d="M60 28a3 3 0 0 1 3 3v30a2.97 2.97 0 0 1-1.734 2.719A3 3 0 0 1 60 64a2.98 2.98 0 0 1-1.922-.709l-.017-.013-5.842-5.035a1 1 0 0 0-.653-.243H27a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h24.5c.36 0 .708.13.98.365l4.866 4.206A1 1 0 0 0 60 58.814V32a1 1 0 0 0-1-1H28a1 1 0 0 0-1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V31a3 3 0 0 1 3-3z"
    />
    <defs>
      <linearGradient
        id="ic_floating_solve_svg__a"
        x1={44}
        x2={44}
        y1={0}
        y2={88}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#7398FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIcFloatingSolve;
