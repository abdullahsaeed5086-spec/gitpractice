import React from 'react'
import Webcam from 'react-webcam'

const LearnWebCam = () => {
  return (
    <div>
        <h1>WebCam</h1>
        <button type="button" class="btn btn-success">Capture</button>
        <Webcam/>
        <button type="button" class="btn btn-warning">ReTake</button>
    </div>
  )
}

export default LearnWebCam