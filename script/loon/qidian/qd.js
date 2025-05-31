var task1 = $persistentStore.read("TASK_1");
var session1 = $persistentStore.read("session_1");
var task2 = $persistentStore.read("TASK_2");
var session2 = $persistentStore.read("session_2");
var waitTime = 8;

var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var doTask = async (session) => {
    var options = JSON.parse(session);
    return $httpClient.post(options, (errormsg, response, data) => {
        var obj = JSON.parse(data);
        if (obj.Result === 0) {
            console.log("🎉成功!");
        } else {
            console.log("🔴失败!");
            console.log(data);
        }
    });
}

var loop = async (step, session) => {
    for (var i = 0; i < step; i++) {
        console.log(`🟡任务执行次数: ${i + 1}次`);
        await doTask(session);
        if (i < (step - 1)) {
            await sleep(waitTime * 1000);
        }
    }
}

if (task1 && session1) {
    (async () => await loop(8, session1))()
}

if (task2 && session2) {
    (async () => await loop(3, session2))()
}