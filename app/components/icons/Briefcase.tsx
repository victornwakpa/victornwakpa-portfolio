import { SVGProps } from "react";

const Briefcase = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      {...props}
    >
       <path d="M 29 7 C 25.686 7 23 9.686 23 13 L 15 13 C 11.686 13 9 15.686 9 19 L 9 26.173828 C 11.661 26.749828 22.639 29 32 29 C 41.361 29 52.339 26.749828 55 26.173828 L 55 19 C 55 15.686 52.314 13 49 13 L 41 13 C 41 9.686 38.314 7 35 7 L 29 7 z M 29 11 L 35 11 C 36.104 11 37 11.895 37 13 L 27 13 C 27 11.895 27.896 11 29 11 z M 9 30.261719 L 9 45 C 9 48.314 11.686 51 15 51 L 49 51 C 52.314 51 55 48.314 55 45 L 55 30.261719 C 51.856 30.916719 43.863 32.448813 36 32.882812 L 36 33 C 36 34.105 35.104 35 34 35 L 29 35 C 27.896 35 27 34.105 27 33 L 27 32.822266 C 19.468 32.320266 12.011 30.888719 9 30.261719 z"></path>
    </svg>
  );
};

export default Briefcase;
