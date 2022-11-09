import classes from "./Button.module.css"

export default function Button(props) {
  let styleObj = { maxWidth: props.maxWidth, minWidth: props.maxWidth }
  if (props.dontHide != undefined) styleObj = { maxWidth: props.maxWidth, minWidth: props.maxWidth, display: "flex" }

  return (
    <div className={classes.mainDiv} style={styleObj} onClick={() => props.onClickHandler()} >
      <div className={classes.textDiv}>
        <p className={classes.mainText}>{props.text1}</p>
        {props.text2 != undefined && <p className={classes.mainText}>{props.text2}</p>}
      </div>
      {props.icon != undefined &&
        <div className={classes.iconDiv}>
           {props.icon}
        </div>
      }
    </div>
  )
}

