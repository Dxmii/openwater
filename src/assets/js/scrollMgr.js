/**
 * scroll全局监听管理器
 * @type {{}}
 */
window.__ScrollManager = window.__ScrollManager || {};
let win = $(window); //得到窗口对象
let sc = $(document);//得到document文档对象。
win.scroll(() => {
  if (window.__ScrollManager) {
    let top = sc.scrollTop();
    for (k in window.__ScrollManager) {
      window.__ScrollManager[k](top);
    }
  }
});

module.exports = {
  on(key, callback){
    window.__ScrollManager[key] = callback;
  },
  off(key){
    delete window.__ScrollManager[key];
  },
};
