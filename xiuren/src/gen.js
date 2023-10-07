load('config.js');
function execute(url, page) {
    if (!page) page = "1";

    let response = fetch(url + "/page/" + page + "/");
    if (response.ok) {
        let doc = response.html();
        let data = [];

        doc.select(".jeg_posts article").forEach(e => {
            data.push({
                name: e.select(".jeg_post_title a").first().text(),
                link: e.select(".jeg_post_title a").first().attr("href"),
                cover: e.select(".thumbnail-container img").first().attr("src"),
                host: BASE_URL
            })
        });

        var next = /\/page\/(\d+)/.exec(doc.select(".page_nav.next").attr("href"));
        if (next) next = next[1];
        else next = "";
        return Response.success(data, next)
    }
    return null;
}