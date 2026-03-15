var task1 = $persistentStore.read("TASK_1");
var session1 = $persistentStore.read("session_1");
var task2 = $persistentStore.read("TASK_2");
var session2 = $persistentStore.read("session_2");

var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var doTask = (session) => {
    return new Promise((resolve) => {
        var options = JSON.parse(session);
        $httpClient.post(options, (err, resp, data) => {
            if (err) {
                console.log("🔴网络错误");
            } else {
                var obj = JSON.parse(data);
                console.log(obj.Result === 0 ? "🎉成功!" : "🔴失败: " + data);
            }
            resolve();
        });
    });
}

var loop = async (step, session, delay) => {
    for (var i = 0; i < step; i++) {
        console.log(`🟡任务执行次数: ${i + 1}次`);
        await doTask(session);
        if (i < (step - 1)) {
            await sleep(delay * 1000);
        }
    }
}

if (task1 && session1) {
    (async () => {
        await loop(9, session1, 6);
        $done();
    })();
}

if (task2 && session2) {
    (async () => await loop(3, session2, 8))()
}