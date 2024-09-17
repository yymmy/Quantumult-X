// Quantumult X 脚本: bilibili_filter.js

let body = $response.body; // 获取响应体
let obj = JSON.parse(body); // 将响应体转为 JSON 对象

if (obj.data && obj.data.replies) {
    // 过滤评论：只保留用户等级大于或等于2的评论
    obj.data.replies = obj.data.replies.filter(reply => reply.member.level_info.current_level >= 2);
}

$done({ body: JSON.stringify(obj) }); // 将修改后的响应返回
