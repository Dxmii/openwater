/**
 * Created by anr on 2017/12/10.
 */

module.exports = {
  ellipsis(str, length = 200){
    let l = str.length;
    let blen = 0;
    for (let i = 0; i < l; i++) {
      if ((str.charCodeAt(i) & 0xff00) != 0) {
        blen++;
      }
      if (blen++ > length) {
        return str.substr(0, i) + '..';
      }
    }
    return str;
  },
};
