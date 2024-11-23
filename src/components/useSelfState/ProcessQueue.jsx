export async function getFinalState(baseState, queue) {
	let finalState = baseState;
	// 在不考虑异步的情况下 '[object Function]'
    // 考虑异步的情况下 '[object Promise]
	for (const queueItem of queue) {
		if (typeof queueItem === 'function') {
			// 增加异步函数的处理逻辑
			if (queueItem.constructor.name === 'AsyncFunction') {
				finalState = await queueItem(finalState);
			} else {
				const result = queueItem(finalState);
				// 因为我要获取到函数返回的结果作为下次函数的参数
				finalState = result;
			}
			console.log(queueItem, '== getFinalState', finalState);
		} else {
			// 这样保证了如果是数字 他肯定会去取最后一个的值
			finalState = baseState + queueItem;
		}
	}

	// TODO: 对队列做些什么...

	return finalState;
}
