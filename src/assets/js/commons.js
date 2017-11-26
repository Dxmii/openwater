window.ScrollManager = window.ScrollManager || {};

let win = $(window); //得到窗口对象
let sc = $(document);//得到document文档对象。
win.scroll(() => {
  if (window.ScrollManager) {
    let top = sc.scrollTop();
    for (k in window.ScrollManager) {
      window.ScrollManager[k](top);
    }
  }
});

module.exports = {
  listener: ScrollManager,
  on(key, callback){
    window.ScrollManager[key] = callback;
  },
  off(key){
    delete window.ScrollManager[key];
  },
};
