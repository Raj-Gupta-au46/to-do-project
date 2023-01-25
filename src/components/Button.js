const Button = (props) => {
    const buttonStyle = {
      backgroundColor: props.color
    };
  
    return (
      <button className="btn" style={buttonStyle} onClick={props.onClick}>
        {props.title}
      </button>
    );
  };
  
  export default Button;
  