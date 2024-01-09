import {
	createStore
} from "vuex";

export default createStore({
	state: {
		shopcart: uni.getStorageSync("cart") || {},

		// 黑名单举报的一些数据
		cart: uni.getStorageSync("report") || [],

		// 寻宠里的一些数据
		pet: uni.getStorageSync("xunpet") || [],

		// 发布领养的数据
		adopts: uni.getStorageSync("yang") || [],
	},
	mutations: {

		// 点击加入购物车 传递数据到vuex
		purchased: function(state, ite) {},

		// 点击加减购物车
		subtract: function(state, payload) {
			const {
				goods,
				indexes,
				num
			} = payload
			goods[0].count = goods[0].count + num
			state.shopcart[indexes] = goods[0]
			// 数量不能小于0 			
			if (goods[0].count < 0) {
				goods[0].count = 0
			}
			uni.setStorageSync('cart', state.shopcart)
		},

		// 点击举报存进缓存
		cache: function(state, jubao) {
			state.cart.push(jubao)
			console.log(state.cart, '周')
			uni.setStorageSync('report', state.cart)
		},

		// 点击发布寻宠 进行数据缓存
		forpet: function(state, forpet) {
			state.pet.push(forpet)
			console.log(state.pet, '寻')
			uni.setStorageSync('xunpet', state.pet)
		},
		// 点击发布送养 进行数据缓存
		publish: function(state, adoption) {
			console.log(adoption)
			state.adopts.push(adoption)

			uni.setStorageSync('yang', state.adopts)
		},
		// 定义mutations，用于修改状态(同步)
		// updateUid(state, payload) {
		// 	state.uid = payload
		// }
	},
	actions: {
		// 定义actions，用于修改状态(异步)
		// 2秒后更新状态
		updateUid(context, payload) {
			setTimeout(() => {
				context.commit('updateUid', payload)
			}, 2000)
		}
	},
	getters: {
		// // 定义一个getters
		// formatUid(state) {
		// 	return state.uid + ' Tom'
		// }
	},
	modules: {}
});