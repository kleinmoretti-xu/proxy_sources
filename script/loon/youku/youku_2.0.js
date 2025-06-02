const url = $request.url;
if (url.includes("mtop.youku.play.ups.appinfo.get")) {
    let obj = JSON.parse($response.body);
    delete obj.data.data.ad;
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
