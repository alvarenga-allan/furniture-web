import React from 'react';

function minus(props: React.SVGProps<SVGSVGElement>) {
  const { width = 24, height = 24, color = 'none' } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 13H3V11H21V13Z"
        fill="#212121"
      />
    </svg>
  );
}
export default minus;
