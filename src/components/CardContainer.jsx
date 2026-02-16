import axios from "axios"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import ArticleCardTwo from "./ArticleCardTwo"

export default function CardContainer() {
    const [Acards, setAcards] = useState([])
    useEffect(() => {
        async function getInfo() {
            const {data} = await axios('/posts.json')
            setAcards(data.posts)
        }
        getInfo()
    },[]) 
  return (
    <div className="lg:flex lg:flex-col gap-3 cursor-pointer">
        {
            Acards.slice(0,3).map(CardInfo => (
                <ArticleCard
                Acards = {CardInfo}
                />
            ))
        }
    </div>
  )
}
