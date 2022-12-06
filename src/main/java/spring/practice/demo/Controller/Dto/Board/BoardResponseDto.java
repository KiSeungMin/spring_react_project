package spring.practice.demo.Controller.Dto.Board;

import jakarta.persistence.Column;
import lombok.Data;
import spring.practice.demo.Entity.Board;

import java.util.Date;

@Data
public class BoardResponseDto {

    private Integer no;

    private String type;

    private String title;

    private String contents;

    private Integer memberNo;

    private Date createdTime;

    private Date updatedTime;

    private Integer likes;

    private Integer counts;

    public void setBoardResponseDtoByBoard(Board board){
        this.no = board.getNo();
        this.type = board.getType();
        this.title = board.getTitle();
        this.contents = board.getContents();
        this.memberNo = board.getMemberNo();
        this.createdTime = board.getCreatedTime();
        this.updatedTime = board.getUpdatedTime();
        this.likes = board.getLikes();
        this.counts = board.getCounts();
    }
}