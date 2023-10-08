// mục lục 
function execute(url) {
    let id = /xiuren.biz\/([\u4e00-\u9fff\w-]+)\/?/.exec(url);
    if (id) id = id[1];

    let data = [];
    data.push({
        name: 'OneShot',
        url: "https://xiuren.biz/" + id
    })

    return Response.success(data);
}