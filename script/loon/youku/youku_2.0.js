const url = $request.url;
if (url.includes("mtop.youku.play.ups.appinfo.get")) {
    let obj = JSON.parse($response.body);
    delete obj.data.data.ad;
    delete obj.data.data.ykad;
    delete obj.data.data.stream;
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
