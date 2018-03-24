const ballList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const shortcut = [{
  title: '全',
  balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}, {
  title: '大',
  balls: [5, 6, 7, 8, 9]
}, {
  title: '小',
  balls: [0, 1, 2, 3, 4]
}, {
  title: '单',
  balls: [1, 3, 5, 7, 9]
}, {
  title: '双',
  balls: [0, 2, 4, 6, 8]
}, {
  title: '清',
  balls: []
}]

export const pattern = [{
  title: '万位',
  ballList: ballList,
  leaveOutList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],      // 动态数据在组件中绑定即可
  ballShortcutSelection: shortcut
}, {
  title: '千位',
  ballList: ballList,
  leaveOutList: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ballShortcutSelection: shortcut
}, {
  title: '百位',
  ballList: ballList,
  leaveOutList: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  ballShortcutSelection: shortcut
}, {
  title: '十位',
  ballList: ballList,
  leaveOutList: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  ballShortcutSelection: shortcut
}, {
  title: '个位',
  ballList: ballList,
  leaveOutList: [5, 6, 3, 2, 12, 5, 2, 16, 1, 5],
  ballShortcutSelection: shortcut
}]
