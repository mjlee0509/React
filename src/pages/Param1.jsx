import { useParams } from "react-router-dom";

const Param1 = () => {
    // useParams : parameter 값 꺼내기
    const { id } = useParams();
    return (
        <div className="param1-page page">
            <h2>PARAM1</h2>
            <p>요청 id = {id}</p>
        </div>

    );

}
export default Param1;