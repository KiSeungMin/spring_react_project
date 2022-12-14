import React, {useEffect, useState} from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import MemberPageComponent from "./MemberPageComponent";

const MemberRouteComponent = () => {

    const[memberId, setMemberId] = useState(1);

    useEffect(() => {
        const param = useParams();
        setMemberId(Number(param.id));
    }, []);

    return(
        <Routes>
            <Route path=':memberId' element={<MemberPageComponent memberId={memberId}/>}></Route>
        </Routes>
    )

    //const [memberIdList, setMemberIdList] = useState([]);

    /*
    useEffect(() => {

        console.log(props.id);

        memberService.getMemberIdList()
            .then((res) => {
                setMemberIdList(res.data)
            })
            .catch(error => console.log(error));
    }, []);

     */

    // return(
    //     <Routes>
    //         {
    //             memberIdList.map(
    //                 (id) => {
    //                     return(
    //                         <>
    //                             <Route path={String(id)} element={<MemberPageComponent memberId = {id}/>}></Route>
    //                             {/*<Route path={String(id + "/items")}></Route>*/}
    //                             {/*<Route path={String(id + "/orders")}></Route>*/}
    //                         </>
    //                     )
    //                 }
    //             )
    //         }
    //     </Routes>
    // )
}

export default MemberRouteComponent;