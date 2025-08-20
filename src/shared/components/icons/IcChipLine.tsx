import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcChipLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#fff" fillOpacity={0.3} rx={12} />
    <path
      fill="#fff"
      d="M4.5 4a.5.5 0 0 1 .5.5V19h14.5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12s1.333-6 4.444-6c4 0 4 10 7.556 10"
    />
  </svg>
);
export default SvgIcChipLine;
