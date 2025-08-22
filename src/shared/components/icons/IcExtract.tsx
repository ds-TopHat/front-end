import type { SVGProps } from 'react';
const SvgIcExtract = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 20"
    {...props}
  >
    <path
      stroke="#488BFF"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1.5 15.5c0 1.886 0 2.328.586 2.914S3.614 19 5.5 19h6c1.886 0 2.828 0 3.414-.586S15.5 16.886 15.5 15V6.828c0-.408 0-.613-.076-.796s-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C10.285 1 10.08 1 9.672 1H5.5c-1.886 0-2.828 0-3.414.586S1.5 3.114 1.5 5v6.5"
    />
    <path
      stroke="#488BFF"
      strokeWidth={2}
      d="M9.5 1v4c0 .943 0 1.414.293 1.707S10.557 7 11.5 7h4"
    />
  </svg>
);
export default SvgIcExtract;
