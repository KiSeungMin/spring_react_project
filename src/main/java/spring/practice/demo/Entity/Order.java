package spring.practice.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor     // 모든 필드 값을 파라미터로 받는 기본 생성자 생성
@NoArgsConstructor()      // 파라미터가 없는 기본 생성자 생성
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member buyer;

    @Column(name = "quantity")
    private Long quantity;
}
