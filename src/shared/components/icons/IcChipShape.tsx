import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcChipShape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#fff" fillOpacity={0.3} rx={12} />
    <circle cx={11} cy={16} r={4} fill="#fff" />
    <path
      fill="#fff"
      d="M16.553 3.894a.5.5 0 0 1 .894 0l3.191 6.382a.5.5 0 0 1-.447.724h-6.382a.5.5 0 0 1-.447-.724z"
    />
    <rect width={7} height={7} x={4} y={4} fill="#fff" rx={1} />
  </svg>
);
export default SvgIcChipShape;
