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
@Table(name = "item")
@DynamicInsert      // Insert시 Null인 필드 제외
@DynamicUpdate      // Update시 Null인 필드 제외
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name = "price")
    private Integer price;

    @Column(name = "created_time")
    private Date createdTime;

    @Column(name = "updated_time")
    private Date updatedTime;
}
