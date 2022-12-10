package spring.practice.demo.Controller.Dto.Member;

import lombok.Data;
import spring.practice.demo.Entity.Member;

@Data
public class MemberResponseDto {

    private Long id;

    private String name;

    // private String password;

    public void setMemberResponseDtoByMember(Member member) {
        this.id = member.getId();
        this.name = member.getName();
    }
}
