export default function Titulo(props) {
  return (
    <div className={``}>

      <h1>{props.children}</h1>
      <hr/>
    </div>
  )
}