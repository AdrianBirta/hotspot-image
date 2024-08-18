interface CartProps {
  stroke: string;
}

const Cart = ({ stroke }: CartProps) => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >

      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
      />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.144" />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          stroke={stroke}
          strokeWidth="1.488"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 1s ease' }}
        />
      </g>

    </svg>
  )
}

export default Cart;