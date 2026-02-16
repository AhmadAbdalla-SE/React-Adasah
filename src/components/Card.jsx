import React from 'react'

export default function Card(props) {
  return (
    
        <div class="sm glass-card p-4 hover:scale-105 transition-transform duration-300 bg-[#161616cc]/90 w-full border border-[#262626] rounded-2xl">
            <div className='fa-solid fa-users text-2xl text-orange-500 mb-1'>{props.emoji}</div>
            <span class="bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent block">{props.number}</span>
            <span class="text-neutral-500 text-sm">{props.type}</span>
        </div>
    
  )
}
