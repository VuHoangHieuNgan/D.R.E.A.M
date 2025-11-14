import re

# Read the file
with open('d:/User/Download/D.R.E.A.M/client/src/game/data/socialFeedData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Comments data for each category
comments_data = {
    'travel_1': [
        "{ id: 'c1', author: 'Travel Bug', text: 'Mình đi năm ngoái, view đẹp mê ly! Nên ở Oia để ngắm hoàng hôn nhé!' }",
        "{ id: 'c2', author: 'Wanderlust Soul', text: 'Chi phí bao nhiêu cho chuyến đi vậy bạn? Mình đang plan đây!' }",
        "{ id: 'c3', author: 'Photo Enthusiast', text: 'Bức ảnh này chụp bằng máy gì vậy? Màu sắc đẹp quá!' }"
    ],
    'travel_2': [
        "{ id: 'c4', author: 'Budget Traveler', text: '5 triệu/tuần là quá tốt! Bạn ở hostel hay sao vậy?' }",
        "{ id: 'c5', author: 'Curious Mind', text: 'Quốc gia nào rẻ nhất trong số đó? Mình muốn thử!' }",
        "{ id: 'c6', author: 'Safety First', text: 'Đi một mình có an toàn không bạn? Đặc biệt là nữ.' }"
    ],
    'travel_3': [
        "{ id: 'c7', author: 'Miles Collector', text: 'Bạn book bằng miles hay trả tiền? Giá bao nhiêu vậy?' }",
        "{ id: 'c8', author: 'Foodie Flyer', text: 'Đồ ăn trên chuyến bay thế nào? Nghe nói Qatar ngon lắm!' }",
        "{ id: 'c9', author: 'Comfort Seeker', text: 'Ghế có nằm phẳng 180 độ không? Quan trọng với mình lắm!' }"
    ],
    'food_4': [
        "{ id: 'c41', author: 'FoodLover99', text: 'Nhìn ngon quá! Cho mình xin địa chỉ với bạn ơi!' }",
        "{ id: 'c42', author: 'Người Sành Ăn', text: '30K mà được như này thì đúng là đỉnh cao.' }",
        "{ id: 'c43', author: 'Đống Đa Resident', text: 'Mình ở gần đó! Đường nào vậy bạn?' }",
        "{ id: 'c44', author: 'Mắm Tôm Hater', text: 'Mắm tôm có thơm không? Mình hơi sợ mùi này.' }"
    ],
    'politics_1': [
        "{ id: 'c129', author: 'Công Dân Trẻ', text: 'Tôi hoàn toàn phản đối đề xuất này, nó không thực tế cho người thu nhập thấp.' }",
        "{ id: 'c130', author: 'Người Quan Sát', text: 'Cần phải xem xét kỹ lưỡng các tác động xã hội trước khi quyết định.' }",
        "{ id: 'c131', author: 'Tax Expert', text: 'Chính sách này sẽ tăng gánh nặng cho tầng lớp trung lưu thêm 15%.' }"
    ]
}

# Pattern to find each object's closing brace
pattern = r"(id: '([^']+)',[\s\S]*?comments: \d+)(\s*})"

def add_comments_list(match):
    full_match = match.group(0)
    post_id = match.group(2)
    
    # Get comments for this post (use default if not in dict)
    if post_id in comments_data:
        comments = comments_data[post_id]
    else:
        # Default generic comments
        comments = [
            f"{{ id: 'c_auto', author: 'User', text: 'Hay quá! Cảm ơn bạn đã chia sẻ!' }}"
        ]
    
    comments_str = ',\n      '.join(comments)
    comments_list = f",\n    comments_list: [\n      {comments_str}\n    ]"
    
    return match.group(1) + comments_list + match.group(3)

# Replace
new_content = re.sub(pattern, add_comments_list, content)

# Write back
with open('d:/User/Download/D.R.E.A.M/client/src/game/data/socialFeedData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Added comments_list to all posts.")
