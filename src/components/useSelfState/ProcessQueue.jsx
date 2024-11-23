export function getFinalState(baseState, queue) {
	let finalState = baseState;
	// 在不考虑异步的情况下
	queue.forEach((queueItem, index) => {
		if (Object.prototype.toString.call(queueItem) === '[object Function]') {
			console.log(queueItem, '== getFinalState', queueItem(finalState));
			const result = queueItem(finalState);
            // 因为我要获取到函数返回的结果作为下次函数的参数
			finalState = result;
		} else {
            // 这样保证了如果是数字 他肯定会去取最后一个的值
			finalState = baseState + queueItem;
		}
	});

	// TODO: 对队列做些什么...

	return finalState;
}
