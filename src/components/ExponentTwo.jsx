const ExponentTwo = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{props.counter} * {props.counter} = <span className="total">{props.counter * props.counter}</span></p>
  </div>
);

export default ExponentTwo;