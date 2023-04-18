import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ProfileIcon(props) {
  return (
    <Svg
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0833 3.66667C10.0833 5.68883 8.43883 7.33333 6.41667 7.33333C4.3945 7.33333 2.75 5.68883 2.75 3.66667C2.75 1.6445 4.3945 0 6.41667 0C8.43883 0 10.0833 1.6445 10.0833 3.66667ZM12.8333 15.5833C12.8333 16.0893 12.4236 16.5 11.9167 16.5H0.916667C0.40975 16.5 0 16.0893 0 15.5833C0 12.045 2.87925 9.16667 6.41667 9.16667C9.95408 9.16667 12.8333 12.045 12.8333 15.5833Z"
        fill={props.focused ? '#1A75FD' : '#94A3B8'}
      />
    </Svg>
  );
}
