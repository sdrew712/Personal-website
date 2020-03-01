import React, {useEffect, useState} from 'react'
import ShortStoryData from '../data/ShortStories.json'

const ShortStory = (props) => {
    const [story, setStory] = useState(undefined)

    useEffect(() => {
        const _story = ShortStoryData.find((data) => {
            return data.id === props.match.params.id
        })
        if (_story === undefined) {
            props.history.push("/shortstories")
        }
        else{
            setStory(_story)
        }
    }, [props.match.params.id, props.history])

    if (story === undefined) return null
    return (
        <div>
            {story.title}
            <img src={story.image} alt={story.title}/>
        </div>
    )
}

export default ShortStory