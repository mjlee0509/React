// useState{} : react hooks의 일종 -> 전역변수

import { useState } from "react";

const State = () => {
    const [param1, setParam1] = useState("안녕"); // import useState // **const [변수이름, set변수이름]**
    const [param2, setParam2] = useState(""); 
    const fx1 = () => {
        setParam1("안녕하세요");
    }

    const fx2 = () => {
        setParam1("안녕");
    }

    const textInput = (e) => { // 함수를 입력할 때 event를 넘겨준다
        // console.log(e);
        // console.log(e.target.value);
        // console.log(e.target.name);

        const { name, value } = e.target;
        console.log(name, value);
        setParam2(value);
    }

    return(
        <div className="state-page">
            <h2>STATE</h2>
            <p>{param1}</p>
            <button onClick={fx1}>하세요 </button>
            <button onClick={fx2}>안녕 </button>
            <input type="text" onChange={textInput} name="param2"/>
            <p> 입력값 : {param2} </p>

        </div>
    );
}
export default State;