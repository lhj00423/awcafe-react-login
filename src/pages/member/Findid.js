import React from 'react';
import './Findid.css'

const Findid = () => {
    return (
        <div className='Findid'>
            <div id='Findid'>
                <div id='Findidimg'>
                        <img src='images/awcafe.png' alt=''/>
                        <p>회원정보를 입력해 주세요.</p>
                </div>
                <div id='Findidinput'>
                    <input type='text' placeholder='이름'/>
                </div>
                <div id='Findidinput'>
                    <input type='password' placeholder='휴대폰번호'/>
                </div>
                <div id='Findidinput'>
                    <input type='password' placeholder='E-MAIL'/>
                </div>
            </div>
            <button id='Joinfooter'>아이디 찾기</button>
        </div>
    );
};

export default Findid;