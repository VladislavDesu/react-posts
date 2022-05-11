import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostServices from "../API/PostServices";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import Comments from "../components/UI/comments/Comments";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, Error] = useFetching(async (id) => {
        const response = await PostServices.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostServices.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <h1 className="title">{post.title}</h1>
            }
            {
                isCommentsLoading
                    ? <Loader/>
                    : <Comments comments={comments}/>
            }
        </>
    );
};

export default PostIdPage;