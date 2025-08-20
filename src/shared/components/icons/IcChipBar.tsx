import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcChipBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#fff" fillOpacity={0.3} rx={12} />
    <rect width={4} height={12} x={4} y={8} fill="#fff" rx={1} />
    <rect width={4} height={16} x={10} y={4} fill="#fff" rx={1} />
    <rect width={4} height={8} x={16} y={12} fill="#fff" rx={1} />
  </svg>
);
export default SvgIcChipBar;
