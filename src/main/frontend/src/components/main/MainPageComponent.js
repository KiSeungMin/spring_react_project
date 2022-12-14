import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const MainPageComponent = () => {

    const navigate = useNavigate();

    const login = () => {
        // 로그인 화면으로 navigate
    }

    const moveToItemList = () => {
        navigate('/items');
    }

    const createItem = () => {
        navigate('/create-item');
    }

    const memberPage = (memberId, e) => {
        e.preventDefault();
        navigate('/member/' + memberId);
    }

    return(
        <div>
            <h1 className="h1 text-center">메인페이지</h1>
            <div className="row">
                <button className="btn btn-primary">로그인</button>
                <button className="btn btn-primary" onClick={moveToItemList}>아이템 리스트 보기</button>
                <button className="btn btn-primary" onClick={createItem}>아이템 생성</button>
                <button className="btn btn-primary" onClick={(e) => memberPage(1, e)}>멤버 1의 정보</button>
            </div>
        </div>
    )
}

export default MainPageComponent;