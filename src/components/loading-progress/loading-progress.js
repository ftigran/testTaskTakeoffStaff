import React from 'react'
import {Grid} from '@material-ui/core'

export default () => {
  return (
    <Grid container justify={'center'} alignItems={'center'}>
      <Grid item>
        <div id="pre-loader">
          <div className="blobs">
            <div className="blob-center"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
