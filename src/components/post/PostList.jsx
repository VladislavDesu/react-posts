import React from 'react';
import PostItem from "./PostItem";
import { v4 as uuidv4 } from 'uuid';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <div className="title">Posts not found!</div>
    }
    
    return (
        <div>
            <h2 className="title">{title}</h2>
            {
                posts.map(post => {
                    const id = uuidv4();
                    return <PostItem remove={remove} key={id} post={post}/>
                })
            }
        </div>
    );
};

export default PostList;