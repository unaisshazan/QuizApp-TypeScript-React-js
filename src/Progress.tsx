import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularIndeterminate() {

  return (
    <div  style={{alignItems:'center', textAlign:'center',marginTop:'300px'}}>
    
      <CircularProgress color="secondary" />
    </div>
  );
}
