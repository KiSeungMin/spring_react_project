import {useEffect, useState} from "react";
import React from 'react';
import axios from "axios";

const Members = () => {
    // useState 함수는 첫 번째 반환값이 초기 상태, 두 번째 반환값이 setter 함수인 배열을 반환한다.
    const [members, setMembers] = useState([]);

    // 화면이 랜더링될 때 호출
    useEffect(() => {
        console.log("hello!!!");
        axios.get('/api/members')
            .then(response => setMembers(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <div>
            <ul>
                {members.length > 0 ? members.map((member) =>
                    <li>id : {member.id} , name : {member.name}</li>
                ) : "멤버가 존재하지 않습니다."}
            </ul>
            {/*<button onClick={clickButton}>버튼</button>*/}
        </div>
    );
}

export default Members;