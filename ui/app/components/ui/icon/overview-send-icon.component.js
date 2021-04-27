import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';

export default function SwapIcon({
  width = '86',
  height = '75',
  //fill = 'white',
}) {
  return <img 
      width={width} //86
      height={height} //75
      src="/images/icons/coin-send.png"
    />;
  // return (
  //   <svg
  //     width={width}
  //     height={height}
  //     viewBox={`0 0 ${width} ${height}`}
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       d="M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z"
  //       fill={fill}
  //     />
  //   </svg>
  // );
}

// SwapIcon.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
//   fill: PropTypes.string,
// };