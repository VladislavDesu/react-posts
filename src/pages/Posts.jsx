import React, {useEffect, useRef, useState} from "react";
import PostList from "../components/post/PostList";
import PostForm from "../components/post/PostForm";
import PostFilter from "../components/post/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import {usePosts} from "../hooks/usePosts";
import PostServices from "../API/PostServices";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [visible, setVisible] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostServices.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit));
    });
    const lastElement = useRef();

    const pagesArray = getPagesArray(totalPages);

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
        setVisible(false);
    };

    const removePost = (postID) => {
        setPosts(posts.filter(post => post.id !== postID));
    };

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <PostForm create={createPost}/>
            </Modal>
            <Button onClick={() => setVisible(true)}>Create Post</Button>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValues="Count Limit"
                options={[
                    {value: 5, name: "5"},
                    {value: 10, name: "10"},
                    {value: 15, name: "15"},
                    {value: 20, name: "20"},
                    {value: -1, name: "All"},
                ]}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Javascript Posts"/>
            <div ref={lastElement} style={{height: "20px"}}/>
            {
                isPostsLoading && <Loader/>
            }
            <Pagination current={page} setCurrent={setPage} pagesArray={pagesArray}/>
        </>
    );
}

export default Posts;
