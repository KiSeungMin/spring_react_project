package spring.practice.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.Date;

@Getter @Setter
@AllArgsConstructor     // 모든 필드 값을 파라미터로 받는 기본 생성자 생성
@NoArgsConstructor()      // 파라미터가 없는 기본 생성자 생성
@Entity
@Table(name = "board")
@DynamicInsert      // Insert시 Null인 필드 제외
@DynamicUpdate      // Update시 Null인 필드 제외
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer no;

    @Column(name = "type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "contents")
    private String contents;

    @Column(name = "member_no")
    private Integer memberNo;

    @Column(name = "created_time")
    private Date createdTime;

    @Column(name = "updated_time")
    private Date updatedTime;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "counts")
    private Integer counts;

}
