import * as React from "react"

function SpeakerIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07m3.53-10.6a10 10 0 010 14.14V4.93z"
        stroke="#BDBDBD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SpeakerIcon
