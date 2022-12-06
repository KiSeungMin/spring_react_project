package spring.practice.demo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.practice.demo.Controller.Dto.Member.MemberRequestDto;
import spring.practice.demo.Controller.Dto.Member.MemberResponseDto;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Service.MemberService;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @ResponseBody
    @GetMapping("/members")
    public List<MemberResponseDto> memberList(){
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

    @GetMapping("/members/new")
    public String memberForm(){
        return "members/memberForm";
    }

    @PostMapping("/members/new")
    public String createMember(@ModelAttribute MemberRequestDto memberRequestDto)
    {
        Member member = new Member();
        member.setName(memberRequestDto.getName());
        member.setPassword(memberRequestDto.getPassword());

        memberService.join(member);

        return "redirect:/";
    }
}
