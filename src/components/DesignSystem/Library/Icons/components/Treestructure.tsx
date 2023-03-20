import * as React from 'react';
import {IconWrapper} from '../IconWrapper';
import {IconProps} from '../types';

const Treestructure = (props: IconProps) => {
  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"
            fill="currentColor"
          />
        </svg>
      }
      {...props}
    />
  );
};

export default React.memo(Treestructure);
