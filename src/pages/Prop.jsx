const Prop = (props) => {
    // console.log(props);
    return (
        <div className = "prop-page page">
            <h2>PROP</h2>
            <p>props 값을 뽑아보자!</p>
            <p>name : {props.name}, age : {props.age}, nation : {props.nation}</p>
        </div>
    );
}
export default Prop;