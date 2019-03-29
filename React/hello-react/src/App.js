import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

const cx = classNames.bind(styles);

const App = () => {
  const isBlue = true;
  return (
    // <div className={cx('box', {
    //   blue: isBlue
    // })}>
    //   <div className={cx('box-inside')} />
    // </div>
    // <div><Button>버튼</Button></div>
    <div>
      <StyledButton big={true}>버튼</StyledButton>
    </div>
  );

  // class App extends Component {
  //   state = {
  //     count: 0
  //   }
  //   handleClick = () => {
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  //   }

  //   render() {
  //     return (
  //       <>
  //       <div>count : {this.state.count}</div>
  //       <button onClick={() => this.handleClick()}>더하기</button>
  //       </>
  //     );
  //   }
  // }

  // ! Using React Hooks
  // function useInput(defaultValue) {
  //   const [value, setValue] = useState(defaultValue);
  //   const onChange = (e) => {
  //     const {target :{value}} = e;
  //     setValue(value);
  //   };

  //   return { value, onChange };
  // }

  // function useFetch(url) {
  //   const [payload, setPayload] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");

  //   const callUrl = async () => {
  //     try {
  //       const { data } = await Axios.get(url);
  //       setPayload(data);
  //     } catch {
  //       setError("\u{1F622}");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   useEffect(() => {   //did mount와 같은 동작
  //     callUrl();
  //   }, []);

  //   return {payload, loading, error};
  // }

  // const App = () => {
  //   const [count, setCount] = useState(0);
  //   const [email, setEmail] = useState("");
  //   const updateEmail = e => {
  //     const {
  //       target: {value}
  //     } = e;
  //     console.log(e.target.value);
  //     setEmail(value);
  //   }

  //   const name = useInput("");
  //   console.log(name);

  //   const {payload, loading, error} = useFetch('http://aws.random.cat/meow');
  //   return (
  //     <>
  //     <h2>React hooks 사용법</h2>
  //       <div>{count}</div>
  //       <button onClick={() => setCount(count + 1)}>더하기</button>
  //       <button onClick={() => setCount(count - 1)}>빼기</button>
  //       <input placeholder="Email" value={email} onChange={updateEmail}/>

  //       <hr/>
  //       <h2>input</h2>

  //       <input {...name} placeholder="what's your name"/>
  //       <hr/>
  //       <h2>fetch - api에서 데이터 쉽게 가져오기</h2>
  //       {loading && <span>Loading your cat...</span>}
  //       {!loading && error && <span>{error}</span>}
  //       {!loading && !error && <img src={payload.file} width="150"></img>}
  //     </>
  // )

}

export default App;