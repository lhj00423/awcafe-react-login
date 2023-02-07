import React from 'react';

const Findpassword = () => {
    return (
        <div className='Findid'>
            <div id='Findid'>
                <div id='Findidimg'>
                        <img src='images/awcafe.png' alt=''/>
                        <p>회원정보를 입력해 주세요.</p>
                </div>
                <div id='Findidinput'>
                    <input type='text' placeholder='아이디'/>
                </div>
                <div id='Findidinput'>
                    <input type='password' placeholder='휴대폰번호'/>
                </div>
            </div>
            <button id='Joinfooter'>비밀번호 찾기</button>
        </div>
    );
};

export default Findpassword;