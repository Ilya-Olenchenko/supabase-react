import React from 'react'

// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';


import Syntax from './Syntax'


// SyntaxHighlighter.registerLanguage('jsx', jsx);
const PostItem = (props) => {
  function renderLoginButton() {
    if (props.post.description)
      return <Syntax props={props} />
  }

  return (
    <div className="post">
      <div className="post__description">
      {renderLoginButton()}

        {
          // <img src={props.post.title }></img>
        }
      </div>
    </div>
  );
};

export default PostItem;