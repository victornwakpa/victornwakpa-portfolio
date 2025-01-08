import { SVGProps } from "react";

interface ExitIconProps extends SVGProps<SVGSVGElement> {
  // You can add custom props here if needed
}

const ExitIcon = ({ className, ...props }: ExitIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
      {...props}
    >
     <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
  ></path>
    </svg>
  );
};

export default ExitIcon;
