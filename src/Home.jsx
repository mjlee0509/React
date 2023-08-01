// props : 상위 컴포넌트에서 parameter를 전달하는 것
// Home -> Prop으로 name, age를 전달해보자

import Prop from "./pages/Prop";
import {Link} from 'react-router-dom'
import { nation, nations } from "./data/data"; // 데이터 js 파일을 만들어서 이렇게 가져올 수도 있다


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

            }> param 전송(Path Variable 방식) </Link>
            <div>
                <Link to="/param?q=aa">파라미터 전송   |   </Link>
                <Link to={{
                    // 속성별로 구분해서 주소값을 불러올 때는 이 양식으로 작성한다
                    pathname : "/param", // 주소값
                    // search : "?q=aa?" // 파라미터
                    search : "?q=aa&page=10" // 만약 파라미터 변수가 여러개라면? (Param2.jsx에서 확인)
                }
                }>param전송(Query String 방식) </Link>
            </div>
            <div>
                {/* React에서의 반복문 .map() */}
                {nations.map(n => (
                    <Link to={
                        {
                            pathname : `/param/${n.name}` // 주의! 백틱(`) 기호
                        }
                    }>{n.name}</Link>
                ))}
            </div>
        </div>
    )
}
export default Home;
