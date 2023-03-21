import React, { FC } from "react";

interface Props {}

const NVHRLogo: FC<Props> = (props: Props): JSX.Element => {
  return (
    <svg
      width={61}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="#0F2D52">
        <path d="M32.554 14.034h-.55c-.117 0-.226.03-.226.225v7.504c-.964-1.176-5.584-6.809-6.415-7.717-.092-.09-.173-.127-.282-.127-.132 0-.227.09-.227.213v9.417c0 .17.06.241.21.241h.578c.184 0 .198-.112.198-.227v-7.467c.978 1.176 5.75 6.918 6.378 7.683.06.075.14.15.287.15.187 0 .253-.121.253-.225v-9.402c.009-.112.009-.268-.204-.268ZM42.143 14.035h-.495c-.2 0-.241.1-.241.296v4.675h-5.935v-4.69c0-.178-.037-.281-.224-.281h-.509c-.192 0-.253.069-.253.281v9.219c0 .2.049.253.239.253h.506c.172 0 .241-.064.241-.227v-3.623h5.935v3.625c0 .187.095.228.242.228h.48c.195 0 .267-.02.267-.228v-9.232c0-.21-.035-.296-.253-.296ZM52.109 14.035h-.593c-.112 0-.163.092-.218.212l-3.45 7.836-3.655-7.902c-.052-.13-.15-.146-.247-.146h-.593c-.054 0-.114 0-.155.054-.043.06-.02.133.009.213.175.38 4.316 9.322 4.396 9.48.023.066.08.218.247.218.141 0 .193-.092.245-.21.083-.17 3.98-8.988 4.149-9.373.066-.193.086-.259.04-.325-.043-.057-.106-.057-.175-.057ZM60.735 23.402l-.018-.023a644.013 644.013 0 0 0-2.544-3.516c1.28-.46 2.012-1.458 2.012-2.758 0-1.78-1.368-3.073-3.254-3.073h-3.684c-.043 0-.18.017-.18.227v9.304c0 .07 0 .228.198.228h.592c.181 0 .198-.113.198-.228v-3.51h3.094l2.562 3.58c.072.109.158.158.279.158h.563c.075 0 .254 0 .254-.185.002-.094-.024-.132-.072-.204Zm-6.68-8.465h2.833c1.362 0 2.354.918 2.354 2.186 0 1.259-.928 2.044-2.423 2.044h-2.764v-4.23ZM1.003 15.97c.935-.297 12.2-4.337 12.2-4.337 3.859-1.222 2.637-5.08 2.637-5.08L13.643 0s1.754.012 2.096 1.095c.11.346 1.593 4.65 1.593 4.65 1.837 5.8-3.628 7.478-3.628 7.478L0 18.033s.066-1.768 1.003-2.064Z" />
        <path d="M44.322 3.488c-.937.296-21.541 6.955-21.541 6.955-3.859 1.225-2.637 5.084-2.637 5.084l.886 2.794s-1.754-.011-2.096-1.095c-.11-.345-.282-.894-.282-.894-1.84-5.8 3.626-7.476 3.626-7.476l23.048-7.433c0-.003-.066 1.769-1.004 2.065Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h60.809v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NVHRLogo;
