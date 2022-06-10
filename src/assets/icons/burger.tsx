import React from 'react';

function burguer(props: React.SVGProps<SVGSVGElement>) {
  const { width = 24, height = 24, color = 'none' } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 7H3V5H21V7Z" fill="#212121" />
      <path d="M21 13H3V11H21V13Z" fill="#212121" />
      <path d="M3 19H21V17H3V19Z" fill="#212121" />
    </svg>
  );
}
export default burguer;
