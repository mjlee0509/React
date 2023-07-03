// react에서 파일을 만들 때에는 가능하면 .jsx를 쓰자
/**
 * .js를 써도 된다
 * 하지만 공식적으로는 jsx를 권장함
 */

// 하나의 함수에 하나의 컴포넌트를 담은 후
const Component1 = () => {
    return(
        <div className="component1">
            <h2>안녕</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
            <h2>녕안</h2>
        </div>
    );

}

// 반드시 이걸로 마무리
export default Component1;  


/*
이렇게 쓸 수도 있다
export default function Component1() {

}
*/