package spring.practice.demo.Controller.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import spring.practice.demo.Controller.Dto.Item.ItemRequestDto;
import spring.practice.demo.Controller.Dto.Item.ItemResponseDto;
import spring.practice.demo.Entity.Item;
import spring.practice.demo.Service.ItemService;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ItemApiController {

    private final ItemService itemService;

    @GetMapping("/item/{itemId}")
    public ItemResponseDto getItem(@PathVariable Long itemId){

        Item item = itemService.getItem(itemId);
        ItemResponseDto itemResponseDto = new ItemResponseDto();
        itemResponseDto.setItemResponseDtoByItem(item);

        return itemResponseDto;
    }

    @PostMapping("/item")
    public String createItem(@RequestBody ItemRequestDto itemRequestDto) {
        itemService.createItem(itemRequestDto);
        return "/";
    }

    @PatchMapping("/item/{itemId}")
    public String updateItem(@PathVariable Long itemId, @RequestBody ItemRequestDto itemRequestDto){
        itemService.updateItem(itemId, itemRequestDto);
        return "/";
    }

    @DeleteMapping("/item/{itemId}")
    public String deleteItem(@PathVariable Long itemId){
        itemService.deleteItem(itemId);
        return "/";
    }

    @GetMapping("/items")
    public List<ItemResponseDto> getAllItems() {
        List<Item> itemList = itemService.getAllItem();
        List<ItemResponseDto> itemResponseDtoList = itemList.stream()
                .map(item -> {
                    ItemResponseDto itemResponseDto = new ItemResponseDto();
                    itemResponseDto.setItemResponseDtoByItem(item);
                    return itemResponseDto;
                }).toList();

        return itemResponseDtoList;
    }
}
