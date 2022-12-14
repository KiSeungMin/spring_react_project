import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8080/api/member";
const MEMBERS_API_BASE_URL = "http://localhost:8080/api/members";

class MemberService{

    getMember(memberId){
        return axios.get(MEMBER_API_BASE_URL + "/" + memberId);
    }
}

export default new MemberService();