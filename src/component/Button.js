 function Button(props) {
    return (
    <button className={props.color}>{props.title}</button>
    )
  }
// function Button({title,color}) {
//   return (
//     <button className={color}>{title}</button>
//   )
// }
export default Button;

