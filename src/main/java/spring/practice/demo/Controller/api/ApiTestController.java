package spring.practice.demo.Controller.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.practice.demo.Controller.Dto.Member.MemberResponseDto;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Service.MemberService;

import java.util.List;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class ApiTestController {

    private final MemberService memberService;

    @GetMapping("/hello")
    public String Hello() {
        return "Hello, world!";
    }

    @RequestMapping("/members")
    public List<MemberResponseDto> ApiGetMemberList(){

        List<Member> members = memberService.findMembers();
        List<MemberResponseDto> memberResponseDtoList = members.stream()
                .map(m -> {
                    MemberResponseDto memberResponseDto = new MemberResponseDto();
                    memberResponseDto.setId(m.getId());
                    memberResponseDto.setName(m.getName());
                    return memberResponseDto;
                }).toList();

        return memberResponseDtoList;
    }
}

