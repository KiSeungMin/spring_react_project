package spring.practice.demo.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.practice.demo.Controller.Dto.Item.ItemRequestDto;
import spring.practice.demo.Entity.Item;
import spring.practice.demo.Entity.Member;
import spring.practice.demo.Repository.ItemRepository;
import spring.practice.demo.Repository.MemberRepository;

import java.util.Date;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    private final MemberRepository memberRepository;

    public Item getItem(Long itemId){
        return itemRepository.findItem(itemId);
    }

    public List<Item> getAllItem() {
        return itemRepository.findAllItems();
    }

    public void createItem(ItemRequestDto itemRequestDto){
        Item item = new Item();
        item.setItemName(itemRequestDto.getItemName());
        item.setCategory(itemRequestDto.getCategory());
        item.setDescription(itemRequestDto.getDescription());
        item.setPrice(itemRequestDto.getPrice());
        item.setCreatedTime(new Date());
        item.setUpdatedTime(new Date());

        Member itemMember = memberRepository.findMember(1L);
        item.setMember(itemMember);

        itemRepository.saveItem(item);
    }

    public void updateItem(Long itemId, ItemRequestDto itemRequestDto){
        Item item = itemRepository.findItem(itemId);
        item.setItemName(itemRequestDto.getItemName());
        item.setCategory(itemRequestDto.getCategory());
        item.setDescription(itemRequestDto.getDescription());
        item.setPrice(itemRequestDto.getPrice());
        item.setUpdatedTime(new Date());
    }

    public void deleteItem(Long itemId){
        itemRepository.removeItem(itemId);
    }
}
