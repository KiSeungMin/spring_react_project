package spring.practice.demo.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import spring.practice.demo.Entity.Member;

import java.util.List;

@Repository
@RequiredArgsConstructor        // final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(Long id) {
        return em.find(Member.class, id);
    }

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public List<Member> findByName(String name) {
        return em.createQuery("select m from Member m where m.name = :name")
                .setParameter("name", name)
                .getResultList();
    }
}
