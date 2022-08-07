import React from 'react';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                <div>
                    {/* {props.post.content} */}
                    <div>  {
                        <AceEditor className='aceeditor'
                            mode="css"
                            theme="textmate"
                            name="UNIQUE_ID_OF_DIV"
                            showGutter={false}
                            fontSize={20}
                            setReadOnly={true}
                            value={props.post.content}
                            highlightActiveLine={false}
                            editorProps={{ $blockScrolling: true}}
                        />
                    }</div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;