package spring.practice.demo.Controller.Dto.Board;
import lombok.Data;

@Data
public class BoardRequestDto {

    private String type;

    private String title;

    private String contents;

    private Integer memberNo;
}
