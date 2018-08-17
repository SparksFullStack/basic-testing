import React from 'react';
import './App.css';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};