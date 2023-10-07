# Redirect của extension
toc: show list chap của truyện đồng thời lấy url của chap đó 
chap: lấy ra ảnh hoặc chữ (sau khi truy cập vào url trên)


# pulugin.json
![](https://i.imgur.com/NnAYGiy.png)
```json
"regexp": "truyen.tangthuvien.vn/doc-truyenn/[^/]+$",
"regexp": "metruyencv.com/truyen/[^/]+$"
```
+ ___Ở đây là khi truy cập vào 1 truyện gì đó thì nó sẽ hiện cái gì___
+ như trên thì là: truyen.tangthuvien.vn/doc-truyen/my-loi-kien-danh-loi-song-thu và metruyencv.com/truyen/linh-canh-hanh-gia thì sẽ nhận

# Create src folder
+ [config.js](#File-config.js) : tạo url mặc định
+ [home.js](#File-home.js) : tạo danh sách trên app Vbook
+ [genre.js](#File-genre.js) : tạo Danh sách các thể loại
+ [gen.js](#File-gen.js) :
+ [config.js](#File-config.js)
## File config.js
```js
const BASE_URL = "https://truyen.tangthuvien.vn"
```
+Tạo hằng BASE_URL có giá trị như key source trong plugin.json
## File home.js
```js
load("config.js");

function execute() {
    return Response.success([
        {title: "Xem nhiều", script: "gen.js", input: BASE_URL + "/tong-hop?rank=vw"}, //https://truyen.tangthuvien.vn/tong-hop?rank=vw
        {title: "Đề cử", script: "gen.js", input: BASE_URL + "/tong-hop?rank=nm"},
        {title: "Bình luận nhiều", script: "gen.js", input: BASE_URL + "/tong-hop?rank=bl"},
    ]);
}
```
+ Nó sẽ hiện trên list 
![](https://i.imgur.com/ifZTMGI.jpg)
## File gener.js
### Cách 1: tạo mảng chứa link logic
```js
load("config.js");
function execute() {
    var doc = Html.parse("<a href=\"\">Tất cả</a><a href=\"=1\">Tiên Hiệp</a><a href=\"=2\">Huyền Huyễn</a><a href=\"=3\">Đô Thị</a><a href=\"=4\">Khoa Huyễn</a><a href=\"=5\">Kỳ Huyễn</a><a href=\"=6\">Võ Hiệp</a><a href=\"=7\">Lịch Sử</a><a href=\"=8\">Đồng Nhân</a><a href=\"=9\">Quân Sự</a><a href=\"=10\">Du Hí</a><a href=\"=11\">Cạnh Kỹ</a><a href=\"=12\">Linh Dị</a>");

    var genre = [];
    if (doc) {
        var el = doc.select("a"); //lấy thẻ a gán vào biến el
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            genre.push({
                title: e.text(),
                input: BASE_URL +  "/tong-hop?ctg" + e.attr("href"),
                script: "gen.js"
            });
        }
        return Response.success(genre);
    }

    return null;
}
```
### Cách 2: khổ dâm -> liệt kê hết list ra
```js
load('config.js');
function execute() {
    return Response.success([
        {title: "Action", input: BASE_URL + "/the-loai-5-action.html", script: "gen.js"},
        {title: "Adventure", input: BASE_URL + "/the-loai-203-adventure.html", script: "gen.js"}
    ]);
}
```

# File gen.js
```js

```