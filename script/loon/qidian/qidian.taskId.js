var taskResult = JSON.parse($response.body);
var task1 = taskResult.Data.DailyBenefitModule.TaskList[0].TaskId;
var task2 = taskResult.Data.VideoRewardTab.TaskList[0].TaskId;
$persistentStore.write(task1,"TASK_1");
$notification.post("起点任务","",`task1获取成功：${task1}`,"loon://switch");
$persistentStore.write(task2,"TASK_2");
$notification.post("起点任务","",`task1获取成功：${task2}`,"loon://switch");
$done();