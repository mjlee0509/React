import { useSearchParams } from "react-router-dom";

const Param2 = () => {
    const [params] = useSearchParams(); // 파라미터 가져오기 (useSearchParams)
    console.log(params.get("q")); // 파라미터 값 찍어보기 (= reques.getParameter와 비슷)
    return(
        <div className="param2-page page">
            <h2> PARAM2</h2>
        </div>
    );
}
export default Param2;