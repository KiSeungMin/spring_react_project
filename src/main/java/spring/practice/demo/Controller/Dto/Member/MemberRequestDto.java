package spring.practice.demo.Controller.Dto.Member;

import lombok.Data;

@Data
public class MemberRequestDto {

    private Long id;

    private String name;

    private String password;
}
