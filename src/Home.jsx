// props : 상위 컴포넌트에서 parameter를 전달하는 것
// Home -> Prop으로 name, age를 전달해보자

import Prop from "./pages/Prop";
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
            {/* 전달해줄 파라미터 이름. 맘대로 정해주면 된다.*/}
            {/* <Prop name="주인장" age="29" nation="대한민국" />  */}
            {/*주소값 할당 -- **중괄호 2개!** */}
            <Link to={
                {
                    pathname : "/param/10"
                }

            }> param 전송(Path Variable) </Link>
        </div>
    )
}
export default Home;
