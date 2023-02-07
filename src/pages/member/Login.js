import React,{ useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { API_URL } from '../../config/aplurl';
//import axios from 'axios';
import './Login.css'

const Login = () => {
     //input입력값 상태관리
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [ loginDate,setLoginDate ] =useState({
         aw_id:"",
         aw_password:""
     })
     const onChange = (e) =>{
         const { name , value } =e.target;
         setLoginDate({
             ...loginDate,
             [name]:value
         })
     }
    //  const onSubmit = (e) =>{
    //      //form 전송이벤트 제거
    //      e.preventDefault();
    //      //input에 입력 되었는지 확인
    //      if(loginDate.useremail === '' ||loginDate.userpass === ''){
    //          alert("이메일과 비밀번호를 입력해주세요.");
    //      }else{
    //          axios.post(`${API_URL}/login`, loginDate)
    //          .then(result => {
    //              const { m_email, m_nickname} = result.data[0];
    //              if(m_email && m_nickname){
    //                  alert("로그인 되었습니다.");
    //                  //현재시간 객체 생성
    //                  let expires = new Date();
    //                  //60분을 더한 값으로 변경
    //                  expires.setMinutes(expires.getMinutes()+60);
    //                  //쿠키 생성
    //                  setCookie('useremail', `${m_email}` , {path : '/', expires});
    //                  setCookie('username', `${m_nickname}` , {path : '/', expires});
    //                  dispatch(setLogin());
    //                  dispatch(getToHome(navigate));
    //              }
    //          })
    //          .catch(e => {
    //              console.log(e);
    //          })
    //      }
    //  }
    return (
        <div id='background5'>
            <div id='login'>
                <h2>로그인</h2>
                <div className='login'>
                    <p className='welcome'><span>Welcome!</span> AW KOREA에 오신 것을 환영합니다.</p>
                    <input type="text" className='id' placeholder='아이디를 입력해 주세요.'
                    name='aw_id' value={loginDate.aw_id} onChange={onChange}/>
                    <input type="password"  className='password' placeholder='비밀번호를 입력해 주세요.'
                    name='aw_password' value={loginDate.aw_password} onChange={onChange}/>
                    <p className='idcheck'>
                        <input type="checkbox" className='checkbox'/>
                        <p>아이디 저장</p>
                    </p>
                    <button id='Joinfooter'>로그인</button>
                    <p className='logintext'>
                        * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.<br/>
                        * AW KOREA의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                    </p>
                    <ul>
                        <li><Link to ='/join'>회원가입</Link></li>
                        <li><Link to ='/Findid'>아이디 찾기</Link></li>
                        <li><Link to ='/Findpass'>비밀번호 찾기</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;