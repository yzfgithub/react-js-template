import { Spin } from 'antd';
import React from 'react';
import './index.less';

function Loading() {
  return (
    <div className="page-loading-comp">
      <Spin size="large" />
    </div>
  );
}

export default Loading;