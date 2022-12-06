package spring.practice.demo.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.practice.demo.Entity.Board;
import spring.practice.demo.Entity.Member;

import java.util.List;

@Repository
@RequiredArgsConstructor        // final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션
public class BoardRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Board board) {
        em.persist(board);
    }

    public Board findOne(Long id) {
        return em.find(Board.class, id);
    }

    public List<Board> findAll() {
        return em.createQuery("select b from Board b", Board.class)
                .getResultList();
    }
}
