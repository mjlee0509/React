// 먼저 터미널에서 npm install react-router-dom 실행
import { Link } from "react-router-dom" // HTML의 a태그 역할

const Header = () => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
        </div>
    );
}
export default Header;
