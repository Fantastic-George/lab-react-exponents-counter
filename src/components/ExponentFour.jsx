const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{props.counter} * {props.counter} * {props.counter} * {props.counter} = <span className="total">{props.counter * props.counter * props.counter * props.counter}</span></p>
  </div>
);

export default ExponentFour;