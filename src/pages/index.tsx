import React from 'react';
import styles from './index.less';
import { history } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>micro app a</h1>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};
