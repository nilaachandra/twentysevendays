import React from "react";
export type Arrow31Element = SVGSVGElement;
export type Arrow31Props = React.SVGAttributes<SVGSVGElement>;

const Arrow = React.forwardRef<Arrow31Element, Arrow31Props>(
  (props, forwardedRef) => (
    <svg
      width="50"
      height="180"
      viewBox="0 0 108 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4374 15.2838C5.7553 29.7859 0.441414 44.0084 0.0388845 56.5586C-0.0977361 61.4722 0.802461 72.2206 1.79223 77.5544C3.61376 87.1294 6.64786 97.0039 9.30731 102.003C16.5151 115.611 25.7154 126.966 41.6747 141.995C51.3441 151.096 60.6353 158.579 73.2007 167.321C77.7383 170.446 77.6886 170.545 72.3278 171.175C59.9327 172.589 51.3447 174.623 48.1609 176.861C47.4565 177.37 47.4635 177.465 48.1352 178.043C49.1733 178.936 54.1997 179.436 58.8695 179.115C61.0281 178.953 65.9887 178.191 69.902 177.431C79.0095 175.597 78.877 175.607 84.2111 175.893C92.6601 176.327 97.8514 175.976 102.676 174.672C108.164 173.195 108.283 172.748 104.468 167.835C98.4848 160.152 95.314 153.03 90.7409 137.225L89.114 131.52L87.9237 131.009C86.0655 130.225 82.3274 130.019 77.9224 130.444C73.5816 130.836 68.4426 132.011 67.847 132.703C67.2952 133.345 68.9782 143.739 70.6704 150.315L71.3856 153.128L68.9192 151.341C65.0057 148.54 47.1637 132.653 43.266 128.537C28.3772 112.8 20.6054 100.052 16.4424 84.5118C11.6766 66.7694 11.3555 52.6929 15.4419 39.7524C17.5997 32.8404 20.3552 27.0452 25.0897 19.1976C30.1937 10.8177 34.4921 6.1732 39.8675 3.32369C41.1753 2.60687 42.371 1.91749 42.5199 1.74448C43.0279 1.15421 41.7895 0.637617 39.4714 0.44945C34.8277 0.102227 30.5493 1.32718 25.8697 4.31499C23.7187 5.72335 22.7982 6.5254 20.051 9.63507C18.2571 11.6165 16.1358 14.1842 15.4213 15.3231L15.4374 15.2838Z"
        fill="currentColor"
      />
    </svg>
  )
);
Arrow.displayName = "Arrow";

export default Arrow;
