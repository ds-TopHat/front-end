import type { SVGProps } from 'react';
const SvgIcKakao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#ic_kakao_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 .6C4.03.6 0 3.713 0 7.552c0 2.388 1.558 4.493 3.932 5.745l-.999 3.648c-.088.322.28.579.563.392l4.377-2.889q.555.056 1.127.057c4.97 0 9-3.113 9-6.953C18 3.713 13.97.6 9 .6"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="ic_kakao_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcKakao;
