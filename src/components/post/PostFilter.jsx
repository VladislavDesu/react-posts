import React from 'react';
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="filter">
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                type="text"
                placeholder="Searching..."
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValues="Sorting By"
                options={[
                    {value: "title", name: "Title"},
                    {value: "body", name: "Description"},
                ]}
            />
        </div>
    );
};

export default PostFilter;