package spring.practice.demo.Controller.Dto.Item;

import lombok.Data;
import spring.practice.demo.Entity.Item;

import java.text.SimpleDateFormat;
import java.util.Date;

@Data
public class ItemResponseDto {

    private long id;

    private String itemName;

    private String category;

    private String description;

    private String memberName;

    private Integer price;

    private String createdTime;

    private String updatedTime;

    public void setItemResponseDtoByItem(Item item){
        this.id = item.getId();
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.description = item.getDescription();
        this.memberName = item.getMember().getName();
        this.price = item.getPrice();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일 HH시 mm분");
        this.createdTime = simpleDateFormat.format(item.getCreatedTime());
        this.updatedTime = simpleDateFormat.format(item.getUpdatedTime());
    }
}