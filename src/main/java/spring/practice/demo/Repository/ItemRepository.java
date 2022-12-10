package spring.practice.demo.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import spring.practice.demo.Entity.Item;

import java.util.List;

@Repository
@RequiredArgsConstructor        // final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션
public class ItemRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Item item) {
        em.persist(item);
    }

    public Item findOne(Long id) {
        return em.createQuery(
                "select i from Item i join fetch i.member where i.id = :id", Item.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    public List<Item> findAll() {
        return em.createQuery("select i from Item i join fetch i.member", Item.class)
                .getResultList();
    }

    public List<Long> findItemIdList(){
        return em.createQuery("select i.id from Item i", Long.class)
                .getResultList();
    }

    public void remove(Long id){
        Item item = findOne(id);
        em.remove(item);
    }
}
