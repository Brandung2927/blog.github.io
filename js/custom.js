 document.addEventListener('visibilitychange', function() {
 	var isHidden = document.hidden;
 	if (isHidden) {
 		document.title = '你不爱我了(ó﹏ò｡)';
 	} else {
 		document.title = '抹茶蛋糕';
 	}
 });

 var randomNum = function(minNum, maxNum) {
 	switch (arguments.length) {
 		case 1:
 			return parseInt(Math.random() * minNum + 1, 10);
 			break;
 		case 2:
 			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
 			break;
 		default:
 			return 0;
 			break;
 	}
 }

 //躲猫猫的「猫猫」形象出自游戏「Don't catch Cats」(https://apps.apple.com/app/dont-catch-cats/id1375311035)。
 var duoMaomao = function() {
 	var maomao = $('#maomao');
 	maomao.css('bottom', randomNum(5, 80) + 'vh');
 }

 // 创建<div>标签
 var divElement = document.createElement("div");

 // 设置id属性
 divElement.setAttribute("id", "maomao");

 // 设置onMouseOut属性
 divElement.setAttribute("onMouseOut", "duoMaomao()");

 // 将<div>标签添加到<body>元素中
 document.body.appendChild(divElement);



// const div = document.createElement('script');
//  div.setAttribute("src", "https://cdn.jsdelivr.net/npm/sakana@1.0.8");
// document.body.appendChild(div);

 // 创建<div>标签
 const sakana = document.createElement("div");
 // 设置class属性
 sakana.setAttribute("class", "sakana-box");
 // 将<div>标签添加到<body>元素中
 document.body.appendChild(sakana);
// setTimeout(()=>{
//  const initSakana = document.createElement('script');
// initSakana.innerHTML = `
// Sakana.setMute(true);
// Sakana.init({
//   el:         '.sakana-box',     // 启动元素 node 或 选择器
//   scale:      .5,                // 缩放倍数
//   canSwitchCharacter: true,      // 允许换角色
// });`;
// document.body.appendChild(initSakana);
// },1000)






