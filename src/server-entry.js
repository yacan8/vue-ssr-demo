import createApp from './createApp';

export default context => {
    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前就已经准备就绪。
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        // 设置服务器端 router 的位置
        router.push(context.url)
        // onReady 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            // 对所有匹配的路由组件调用 `asyncData()`
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    });
                }
            })).then(() => {
                // 状态传递给renderer的上下文，方便后面客户端激活数据
                context.state = store.state;
                resolve(app)
            }).catch(reject);
        }, reject);
    })
}