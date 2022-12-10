package spring.practice.demo.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter @Setter
@Builder // 빌더를 사용할 수 있게 함
@AllArgsConstructor     // 모든 필드 값을 파라미터로 받는 기본 생성자 생성
@NoArgsConstructor()      // 파라미터가 없는 기본 생성자 생성
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(nullable = false, unique = true, length = 30, name = "member_name")
    private String name;

    private String password;
}
