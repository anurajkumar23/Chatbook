import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
// import { Posts } from '../../data'
import Post from '../post/Post'
import Share from '../share/Share'
import Stories from '../stories/Stories'
import "./feed.scss"
const Feed = () => {
const[posts,setPosts] =useState([])

useEffect(()=>{
  const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
   setPosts(snapshot.docs.map(doc =>({id: doc.id, data: doc.data()})))
  })
},[])
console.log(posts)
  return (
    <div className='feed'>
      <div className="feddWrapper">
        <Stories/>
        <Share/>
        {posts.sort((a,b) => b.data.timestamp - a.data.timestamp).map((p) => (
         <Post key={p.id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}

export default Feed
