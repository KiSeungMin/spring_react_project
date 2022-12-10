package spring.practice.demo;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import spring.practice.demo.Entity.Item;
import spring.practice.demo.Entity.Member;

import java.util.Date;

/**
 * 테스트 케이스를 생성하는 클래스
 */

@Component
@RequiredArgsConstructor
public class InitDb {

    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit1();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService{
        private final EntityManager em;

        public void dbInit1(){
            autoCreate(100);
        }

        public void autoCreate(int limit){

            for (int i = 1; i <= limit; i++){
                Member member = createMember("user" + i, "password" + i);
                em.persist(member);
                Item item = createItem("item" + i, "category" + i, "description" + i, member, i*1000, new Date(), new Date());
                em.persist(item);
            }
        }

        private Member createMember(String name, String password) {
            Member member = new Member();
            member.setName(name);
            member.setPassword(password);

            return member;
        }

        private Item createItem(String itemName, String category, String description, Member member, Integer price, Date createdTime, Date updatedTime) {
            Item item = new Item();
            item.setItemName(itemName);
            item.setCategory(category);
            item.setDescription(description);
            item.setMember(member);
            item.setPrice(price);
            item.setCreatedTime(createdTime);
            item.setUpdatedTime(updatedTime);

            return item;
        }
    }
}
