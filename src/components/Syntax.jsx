import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Syntax = ({ props }) => {
    return (
      <div>
        <SyntaxHighlighter language="css" style={vs}>
        {/* ТЕКСТ */}
        </SyntaxHighlighter>
      </div>
    );
}

export default Syntax;