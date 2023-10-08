load('config.js');
function execute(url) {
    let id = /https:\/\/xiuren.biz\/([\u4e00-\u9fff\w-]+)\/?/.exec(url);

    if (id) id = id[1];
    let newUrl = "https://xiuren.biz/" + id + "/";
    let response = fetch(newUrl);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.jeg_post_title").text(),
            cover: doc.select("div.content-inner > p > a > img").last().attr("src"),
            author: doc.select("div.jeg_post_tags a").last().text(),
            description: doc.select("div.jeg_post_tags a").first().text() + "   Người Mẫu: " +  doc.select("div.jeg_post_tags a").last().text(),
            host: BASE_URL,
            url: newUrl
        });
    }
    return null;
}