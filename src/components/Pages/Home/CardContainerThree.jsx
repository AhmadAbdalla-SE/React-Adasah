import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArticleCardThree from './ArticleCardThree'

export default function CardContainerThree() {
    const [Card, setCard] = useState([])
    useEffect(()=>{
        async function getInfoThree() {
            const {data} = await axios('/posts.json')
            setCard(data.posts)
        }
        getInfoThree()
    },[])
    console.log(Card)
  return (
    <div className='grid cursor-pointer grid-cols-1 lg:grid-cols-3 gap-3 justify-center pb-3'>
        {
            Card.slice(3,6).map(CardInfoThree => 
                <ArticleCardThree
                    MappedCard = {CardInfoThree} 
                />
            )
        }
    </div>
  )
}
