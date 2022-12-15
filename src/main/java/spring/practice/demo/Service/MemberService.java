package spring.practice.demo.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.practice.demo.Entity.Item;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Entity.Order;
import spring.practice.demo.Repository.ItemRepository;
import spring.practice.demo.Repository.MemberRepository;
import spring.practice.demo.Repository.OrderRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor // final 필드만 가지고 생성자를 만들어줌
public class MemberService {

    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;


    @Transactional
    public Long createMember(Member member) {

        //validateDuplicateMember(member);
        memberRepository.saveMember(member);
        return member.getId();
    }

    public Member findMember(Long memberId) {
        return memberRepository.findMember(memberId);
    }

    public List<Item> getItemsByMemberId(Long memberId){
        Member member = memberRepository.findMember(memberId);
        return itemRepository.findItemsByMember(member);
    }

    public List<Order> getOrdersByOrderId(Long memberId) {
        Member member = memberRepository.findMember(memberId);
        return orderRepository.findOrdersByMemberId(member);
    }

    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findMemberByName(member.getName());

        if (!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    /*
    @Transactional
    public void updateName(Long id, String name) {
        Member member = memberRepository.findOne(id);
        member.setName(name);
    }
     */
}
