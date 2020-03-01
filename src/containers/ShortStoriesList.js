import React from 'react'
import { Link } from 'react-router-dom'
import ShortStoryData from '../data/ShortStories.json'

const ShortStoriesList = () => {
    return (
        <div>
            {ShortStoryData.map((story) => {
                return (
                    <Link key={story.id} to={`/shortstories/${story.id}`}>
                        <div>
                            {story.title}
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default ShortStoriesList