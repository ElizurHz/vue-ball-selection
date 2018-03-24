// 用于返回当前彩票的选号是否可以提交 Boolean 变量
// 可根据不同彩票和不同玩法定制判断方式

// 时时彩官方：个十百千万位都要选至少一个号码
export const canBet = state => state.ballSelection.length === state.slotAmount   
