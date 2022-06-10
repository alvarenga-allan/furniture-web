import React from 'react';

function car(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.80843 3C5.86536 3 5.05043 3.6588 4.85283 4.58094L3.63644 10.2575C3.29513 10.4497 3.01114 10.7417 2.82918 11.1056L2.21115 12.3416C2.07229 12.6194 2 12.9256 2 13.2361V19C2 20.1046 2.89543 21 4 21H6C7.10457 21 8 20.1046 8 19H16C16 20.1046 16.8954 21 18 21H20C21.1046 21 22 20.1046 22 19V13.2361C22 12.9256 21.9277 12.6194 21.7889 12.3416L21.1708 11.1056C20.9889 10.7417 20.7049 10.4498 20.3636 10.2575L19.1472 4.58094C18.9496 3.6588 18.1347 3 17.1916 3H6.80843ZM20 13.5H17C16.4477 13.5 16 13.9477 16 14.5C16 15.0523 16.4477 15.5 17 15.5H20V19H18V17H6V19H4V15.5H7C7.55228 15.5 8 15.0523 8 14.5C8 13.9477 7.55228 13.5 7 13.5H4V13.2361L4.61803 12H19.382L20 13.2361V13.5ZM18.263 10L17.1916 5L6.80843 5L5.73701 10H18.263Z"
        fill="#212121"
      />
    </svg>
  );
}
export default car;
