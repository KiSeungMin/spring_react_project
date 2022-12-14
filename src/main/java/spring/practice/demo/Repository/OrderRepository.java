package spring.practice.demo.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Entity.Order;

import java.util.List;

@Repository
@RequiredArgsConstructor        // final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션
public class OrderRepository {

    @PersistenceContext
    private EntityManager em;

    public void saveOrder(Order order) {
        em.persist(order);
    }

    public Order findOrder(Long id) {
        return em.createQuery(
                "select o from Order o join fetch o.member, o.item where o.id = :id", Order.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    public List<Order> findOrdersByMemberId(Member member) {
        return em.createQuery(
                "select o from Order o join fetch o.member, o.item where o.member = :member", Order.class)
                .setParameter("member", member)
                .getResultList();
    }
}
