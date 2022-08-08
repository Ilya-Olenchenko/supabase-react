import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.title}</strong>
        <SyntaxHighlighter language="css" style={vs}>
          {props.post.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default PostItem;