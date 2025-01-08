import { SVGProps } from "react";

interface AngularProps extends SVGProps<SVGSVGElement> {
  // You can add custom props here if needed
}

const Angular = ({ className, ...props }: AngularProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 242 256"
      className={className}
      {...props}
    >
      <g clipPath="url(#a)">
        <mask
          id="b"
          width="242"
          height="256"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path fill="#fff" d="M0 0h242v256H0V0Z"></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="url(#c)"
            d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
          ></path>
          <path
            fill="url(#d)"
            d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="53.2"
          x2="245"
          y1="231.9"
          y2="140.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E40035"></stop>
          <stop offset=".2" stopColor="#F60A48"></stop>
          <stop offset=".4" stopColor="#F20755"></stop>
          <stop offset=".5" stopColor="#DC087D"></stop>
          <stop offset=".7" stopColor="#9717E7"></stop>
          <stop offset="1" stopColor="#6C00F5"></stop>
        </linearGradient>
        <linearGradient
          id="d"
          x1="44.5"
          x2="170"
          y1="30.7"
          y2="174"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#FF31D9"></stop>
          <stop offset="1" stopColor="#FF5BE1" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h242v256H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Angular;
