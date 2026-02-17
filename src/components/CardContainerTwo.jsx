import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArticleCardTwo from './ArticleCardTwo'

export default function CardContainerTwo() {
    
    const [AcardsTwo, setAcardsTwo] = useState([])
    useEffect(()=>{
        async function GetInfoTwo() {
            const {data} = await axios(`${import.meta.env.BASE_URL}/posts.json`)
            setAcardsTwo(data.posts)
        }
        GetInfoTwo()
    },[])
    console.log(AcardsTwo)
  return (
    <div className=''>
        {
            AcardsTwo.slice(0,6).map( CardInfoTwo => (
                <ArticleCardTwo
                AcardsTwo = {CardInfoTwo}
                />
            ))
        }
    </div>
  )
}
