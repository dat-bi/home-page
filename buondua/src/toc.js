// mục lục 
function execute(url) {
    let id = /https:\/\/buondua.com\/([\w-]+(?:-\w+)*)/.exec(url);
    if (id) id = id[1];
    let newUrl = "https://buondua.com/" + id;

    let response= fetch(newUrl);
    let doc = response.html();
    let div = doc.select(".pagination-list").first()
    let el = div.select("span")
    let data = [];  
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.select("a").attr("href"),
            host: "https://buondua.com"
        })
    }

    return Response.success(data);
}