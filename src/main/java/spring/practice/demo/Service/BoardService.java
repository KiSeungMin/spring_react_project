package spring.practice.demo.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.practice.demo.Controller.Dto.Board.BoardRequestDto;
import spring.practice.demo.Entity.Board;
import spring.practice.demo.Repository.BoardRepository;

import java.util.Date;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }

    public void createBoard(BoardRequestDto boardRequestDto){
        Board board = new Board();
        board.setType(boardRequestDto.getType());
        board.setTitle(boardRequestDto.getTitle());
        board.setContents(boardRequestDto.getContents());
        board.setMemberNo(boardRequestDto.getMemberNo());
        board.setCreatedTime(new Date());
        board.setUpdatedTime(new Date());
        board.setLikes(0);
        board.setCounts(0);

        boardRepository.save(board);
    }
}
