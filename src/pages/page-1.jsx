import React from 'react';
import withLogin from '../HOC/withLogin';

 function Page1Component () {
  return (
    <div>
        Page 1
    </div>
  )  
}

export default withLogin(Page1Component);
