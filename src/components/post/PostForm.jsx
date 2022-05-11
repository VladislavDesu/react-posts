import React, {useState} from 'react';
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const PostForm = ({create}) => {
    const [postInputsValue, setPostInputsValue] = useState({title: "", body: ""});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...postInputsValue
        };

        create(newPost);
        setPostInputsValue({title: "", body: ""});
    };

    return (
        <form>
            <Input
                value={postInputsValue.title}
                onChange={e => {
                    setPostInputsValue({...postInputsValue, title: e.target.value})
                }}
                type="text"
                placeholder="Post Title"
            />
            <Input
                value={postInputsValue.body}
                onChange={e => {
                    setPostInputsValue({...postInputsValue, body: e.target.value})
                }}
                type="text"
                placeholder="Post Description"
            />
            <Button onClick={addNewPost} type="button">Create Post</Button>
        </form>
    );
};

export default PostForm;