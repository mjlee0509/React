// props : 상위 컴포넌트에서 parameter를 전달하는 것
// Home -> Prop으로 name, age를 전달해보자

import Prop from "./pages/Prop";


const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
            <Prop name="주인장" age="29" nation="대한민국"/> {/* 전달해줄 파라미터 이름. 맘대로 정해주면 된다.*/}
        
        </div>
    )
}
export default Home;
