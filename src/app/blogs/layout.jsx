import React from 'react';

const PostLayout = ({children}) => {
    return (
        <div>
            <h2>Fixed Portion o blog layout</h2>
            {children}
        </div>
    );
};

export default PostLayout;