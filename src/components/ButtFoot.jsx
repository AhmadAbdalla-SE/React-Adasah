import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

export default function ButtFoot(props) {
  return (
    <button className=" cursor-pointer mt-2 mb-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180 flex items-center">
        <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
       {props.text}
        </span>
    </button>
  )
}
