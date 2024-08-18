interface ShareProps {
  stroke: string;
}

const Share = ({ stroke }: ShareProps) => {
  return (
    <svg
      fill="#dddddd"
      width="25px"
      viewBox="0 0 256.00 256.00"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      style={{ transition: 'stroke .5s ease' }}
      strokeWidth="10">

      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
      />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M83.17139,60.81738a4.00059,4.00059,0,0,1,.00048-5.65722l42-41.98926a4.00207,4.00207,0,0,1,5.65625,0l42,41.98926a4.00026,4.00026,0,0,1-5.65625,5.6582L132,25.65527V128a4,4,0,0,1-8,0V25.65527L88.82812,60.81836A4.00089,4.00089,0,0,1,83.17139,60.81738ZM200,92H176a4,4,0,0,0,0,8h24a4.00427,4.00427,0,0,1,4,4V208a4.00427,4.00427,0,0,1-4,4H56a4.00427,4.00427,0,0,1-4-4V104a4.00427,4.00427,0,0,1,4-4H80a4,4,0,0,0,0-8H56a12.01343,12.01343,0,0,0-12,12V208a12.01343,12.01343,0,0,0,12,12H200a12.01343,12.01343,0,0,0,12-12V104A12.01343,12.01343,0,0,0,200,92Z" />
      </g>

    </svg>
  )
}

export default Share;