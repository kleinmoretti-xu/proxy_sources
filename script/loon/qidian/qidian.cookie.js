var task1 = $persistentStore.read("TASK_1");
var task2 = $persistentStore.read("TASK_2");

var session= {};
session.url = $request.url;
session.body = $request.body;
session.headers = $request.headers;
console.log(JSON.stringify(session));
if (session.body.indexOf(task1) != -1) {
    if ($persistentStore.write(JSON.stringify(session), "session_1")) {
        console.log("🎉广告1信息获取成功!");
    } else {
        console.log("🔴广告1信息获取失败!");
        console.log(session);
    }
} else if(session.body.indexOf(task2) != -1) {
    if ($persistentStore.write(JSON.stringify(session), "session_2")) {
        console.log("🎉广告2信息获取成功!");
    } else {
        console.log("🔴广告2信息获取失败!");
        console.log(session);
    }
} else {
    console.log(session);
    console.log("🔴广告信息获取失败!");
}
$done();