package spring.practice.demo.Controller.api;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spring.practice.demo.Controller.Dto.Board.BoardRequestDto;
import spring.practice.demo.Controller.Dto.Board.BoardResponseDto;
import spring.practice.demo.Entity.Board;
import spring.practice.demo.Service.BoardService;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BoardApiController {

    private final BoardService boardService;

    @GetMapping("/board")
    public List<BoardResponseDto> getAllBoards() {
        List<Board> boardList = boardService.getAllBoard();
        List<BoardResponseDto> boardResponseDtoList = boardList.stream()
                .map(board -> {
                    BoardResponseDto boardResponseDto = new BoardResponseDto();
                    boardResponseDto.setBoardResponseDtoByBoard(board);
                    return boardResponseDto;

                }).toList();

        return boardResponseDtoList;
    }

    @PostMapping("/board")
    public String createBoard(@RequestBody BoardRequestDto boardRequestDto) {
        System.out.println("type : " + boardRequestDto.getType());
        System.out.println("title : " + boardRequestDto.getTitle());

        boardService.createBoard(boardRequestDto);
        return "/";
    }
}
