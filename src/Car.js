import "./styles.css";

export default function Car(props) {
  return (
    <div className="Car">
      <h4>In Car Comp</h4>
      <div className={props.vehicle.color}>
        {props.vehicle.model}
        <button onClick={() => props.deleteMe(props.index)}>Delete</button>
        {props.showID ? <div>Vehicle id: {props.vehicle.id}</div> : <></>}
      </div>
    </div>
  );
}
