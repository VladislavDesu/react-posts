import React from 'react';
import cl from "./Comments.module.scss";

const Comments = ({comments}) => {
    return (
        <div className={cl.comments}>
            <h2 className="title">Comments</h2>
            {
                comments.map(com =>
                    <div key={com.id} className={cl.item}>
                        <h5 className={cl.title}>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default Comments;