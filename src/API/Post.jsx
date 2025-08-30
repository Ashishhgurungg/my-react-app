import React, { useEffect, useState } from 'react'

const Post = () => {

    const[post, setPosts] = useState([]) 

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        //data ko place ma j lekhda ni hunxa ani response ko thau mani tei as they are variables
        .then(data => setPosts(data))
        .catch(error => console.log('Error fetching posts: ', error))

    }, [])





return (
    <div>
        <h1>Posts</h1>
        {post.length===0 ? <p>loading..</p> :
        ( 
            <ul>
                {post.map((p) => (
                    <li key={p.id}>
                        <h2>{p.title}</h2>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ul>
        )
        
    }
    </div>
  )
}

export default Post