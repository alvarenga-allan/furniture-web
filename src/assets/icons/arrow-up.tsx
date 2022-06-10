import React from 'react';

function arrowUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11 5.41421L5.20712 11.2071L3.79291 9.79289L11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L20.2071 9.79289L18.7929 11.2071L13 5.41421V22H11V5.41421Z"
        fill="#212121"
      />
    </svg>
  );
}
export default arrowUp;
