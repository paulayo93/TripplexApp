import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// fill={props.focused ? '#407BFF' : '#B8BCC3'}

export default function HomeIcon(props) {
  return (
    <Svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00364 0.203809L12.434 5.7686C12.6919 6.03399 12.8398 6.40385 12.8398 6.78429V12.6963C12.8398 13.4749 12.2431 14.108 11.5098 14.108H9.31767V7.75552C9.31767 7.3659 9.00279 7.04969 8.61325 7.04969H4.3867C3.99715 7.04969 3.68228 7.3659 3.68228 7.75552V14.108H1.49081C0.757508 14.108 0.160156 13.4749 0.160156 12.6963V6.78429C0.160156 6.40385 0.308085 6.03399 0.5652 5.7693L5.99631 0.203809C6.26188 -0.0679364 6.73807 -0.0679364 7.00364 0.203809ZM7.90961 13.4026H5.09191V8.46182H7.90961V13.4026Z"
        fill={props.focused ? '#1A75FD' : '#94A3B8'}
      />
    </Svg>
  );
}

