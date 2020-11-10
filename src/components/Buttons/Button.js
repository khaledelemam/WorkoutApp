import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './index.css'

export default function AddButtons() {

  return (
      <div className='fab'>
        <Fab color="primary" onClick={() => { alert('Add event/progress.') }}>
          <AddIcon />
        </Fab>
      </div>
  );
}
