import classes from "./Popup.module.css"
import { useState } from 'react'

 

export default function Popup(props) {
  let [hideMe, setHideMe] = useState(false)

  if(props.hide) { /* Move the show / hide code to the component itself: */
    return null
  }

  if(hideMe) { /* Move the show / hide code to the component itself: */
    return null
  }

  return (
    <div className={classes.mainDiv} onClick={() => setHideMe(true)} >
      <div className={classes.greyBackground}></div>
      <div className={classes.thePopup}>
        
      </div>
    </div>
  )
}

