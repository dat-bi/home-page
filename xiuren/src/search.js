load('config.js');
function execute(key, page) {
    if (!page) page = "1";
// https://xiuren.biz/page/2/?s=74
    let urlSearch = "https://xiuren.biz/page/" + page + "/?s=" + key;
    let response = fetch(urlSearch);
    if (response.ok) { 
        let doc = response.html();
        let data = [];

        doc.select(".jeg_posts article").forEach(e => {
            data.push({
                name: e.select(".jeg_post_title a").first().text(),
                link: e.select(".jeg_post_title a").first().attr("href"),
                cover: e.select("img").first().attr("data-src"),
                host: BASE_URL
            })
        });

        var next = /\/page\/(\d+)\/?/.exec(doc.select(".page_nav.next").attr("href"));
        if (next) next = next[1];
        else next = "";
        return Response.success(data, next)
    }
    return null;
}