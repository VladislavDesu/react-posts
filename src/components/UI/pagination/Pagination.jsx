import React from 'react';
import cl from "./Pagination.module.scss";

const Pagination = ({pagesArray, current, setCurrent}) => {
    return (
        <div className={cl.pagination}>
            {
                pagesArray.map(page => {
                    const rootClasses = [cl.btn];

                    if (current === page) {
                        rootClasses.push(cl.active)
                    }

                    return <span onClick={() => setCurrent(page)} className={rootClasses.join(" ")}
                                 key={page}>{page}</span>
                })
            }
        </div>
    );
};

export default Pagination;