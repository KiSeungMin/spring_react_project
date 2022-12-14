import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import memberService from "../../service/member/memberService";

const MemberPageComponent = (props) => {

    const navigate = useNavigate();
    const[member, setMember] = useState({});

    useEffect(() => {
        memberService.getMember(props.memberId)
            .then((res) => {
                setMember(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    const memberItemsPage = (memberId, e) => {
        e.preventDefault();
        navigate('/member/' + memberId + '/items');
    }

    const memberOrdersPage = (memberId, e) => {
        e.preventDefault();
        navigate('/member/' + memberId + '/orders');
    }

    return(
        <div>
            <div className = "row mt-3">
                <h1>memberId : {member.id}</h1>
                <h1>name : {member.name}</h1>
            </div>

            <div className="row mt-3">
                <button className = "btn btn-primary" onClick={(e) => memberItemsPage(member.id, e)}></button>
                <button className = "btn btn-primary" onClick={(e) => memberOrdersPage(member.id, e)}></button>
            </div>
        </div>
    )
}

export default MemberPageComponent;