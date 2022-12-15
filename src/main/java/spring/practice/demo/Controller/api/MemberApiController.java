package spring.practice.demo.Controller.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.practice.demo.Controller.Dto.Item.ItemResponseDto;
import spring.practice.demo.Controller.Dto.Member.MemberResponseDto;
import spring.practice.demo.Entity.Item;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Entity.Order;
import spring.practice.demo.Service.MemberService;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @GetMapping("/member/{memberId}")
    public MemberResponseDto getMemberPage(@PathVariable Long memberId){

        Member member = memberService.findMember(memberId);
        MemberResponseDto memberResponseDto = new MemberResponseDto();
        memberResponseDto.setMemberResponseDtoByMember(member);

        return memberResponseDto;
    }

    @GetMapping("/member/{memberId}/items")
    public List<ItemResponseDto> getMemberItems(@PathVariable Long memberId) {
        List<Item> itemList = memberService.getItemsByMemberId(memberId);
        List<ItemResponseDto> itemResponseDtoList = itemList.stream()
                .map(item -> {
                    ItemResponseDto itemResponseDto = new ItemResponseDto();
                    itemResponseDto.setItemResponseDtoByItem(item);
                    return itemResponseDto;
        }).toList();

        return itemResponseDtoList;
    }

    @GetMapping("/member/{memberId}/orders")
    public String getMemberOrders(@PathVariable Long memberId) {
        List<Order> orderList = memberService.getOrdersByOrderId(memberId);
        return null;
    }
}
