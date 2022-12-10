package spring.practice.demo.Controller.Dto.Item;
import lombok.Data;

@Data
public class ItemRequestDto {

    private String itemName;

    private String category;

    private String description;

    // private long memberId;

    private Integer price;
}
