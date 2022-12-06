package spring.practice.demo;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import spring.practice.demo.Entity.Board;
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
            Member member1 = createMember("user1", "11");
            em.persist(member1);

            Board board1 = createBoard("1", "1", "1", 1, new Date(), new Date(), 1, 1);
            em.persist(board1);
        }

        private Member createMember(String name, String password) {
            Member member = new Member();
            member.setName(name);
            member.setPassword(password);

            return member;
        }

        private Board createBoard(String type, String title, String contents, Integer memberNo, Date createdTime, Date updatedTime, Integer likes, Integer counts) {
            Board board = new Board();
            board.setType(type);
            board.setTitle(title);
            board.setContents(contents);
            board.setMemberNo(memberNo);
            board.setCreatedTime(createdTime);
            board.setUpdatedTime(updatedTime);
            board.setLikes(likes);
            board.setCounts(counts);

            return board;
        }
    }
}
