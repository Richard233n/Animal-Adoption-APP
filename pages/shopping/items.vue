<template>
	<!-- 物品界面 -->
	<view>
		<view class="boxes">
			<!-- 轮播图 -->
			<view class="swiper">
				<swiper :indicator-dots="false" :duration="2000" :current="count" @change="tab" class="swiper-item">
					<swiper-item v-for="(item,index) in title[indexes]" :key="item.title">
						<view>
							<image :src="item.url" mode="aspectFill" class="pictur"></image>
						</view>
					</swiper-item>
				</swiper>

				<view class="dots">
					<text>{{count+1}}/{{title[indexes].length}}</text>
				</view>
			</view>

			<view class="details" v-for="(item,index) in title[indexes]" :key="item.title">
				<!-- v-if  v-for 不要放一个标签使用 -->
				<view class="" v-if="item.id==1">
					<view class="details__title">
						{{item.title}}
					</view>
					<view class="details__sales">
						{{item.sales}}
					</view>
					<view class="details__price">
						{{item. price}}
					</view>
					<view class="details__digital">
						{{item.digital}}
					</view>
					<view class="details__residue">
						{{item.residue}}
					</view>
				</view>

			</view>

			<view class="modality">
			</view>

			<view class="site">
				<view class="site__city iconfont">
					<text class="site__city__name"> 送至: {{mapname.name}}</text>
					<text class="site__city__area" @click="atlas()">选择区 &#xe641; </text>
				</view>
				<view class="site__box">
				</view>
			</view>

			<view class="idea">
				<text class="idea__count"> 评价:</text>
				<text class="iconfont   idea__query">查看全部 &#xe641; </text>
				<view class="idea__box">
				</view>
			</view>

			<view class="users">
				<view class="users__portrait">
					<image :src="message.image" mode="aspectFill" class="users__portrait"></image>
				</view>
				<view class="users__name">
					{{message.name}}
				</view>
				<view class="users__title">
					此用户没有填写评论
				</view>
				<view class="users__box">

				</view>
			</view>
		</view>

		<!-- 底部栏 -->
		<view class="cart">
			<view class="cart__icon">
				<image src="../../static/image/购物车.png" class="cart__icon__picture" @click="trolley"></image>
				<view class="cart__icon__title">
					购物车
				</view>
				<!-- 购物车小标 -->
				<view class="cart__icon__tag">
					{{scale.length}}
				</view>
			</view>

			<view class="cart__join">
				<view class="cart__join__title" @click="purchased">
					加入购物车
				</view>
			</view>

			<view class="cart__once">
				<view class="cart__once__title" @click="buy()">
					立即购买
				</view>
			</view>
		</view>


		<!-- 加入购物车弹窗 -->
		<view class="product" v-if="flag">
			<view class="product__pop" @click="close" v-if="flag">
			</view>

			<view class="product__bezel">
				<view v-for="(item,index) in goods" :key="item.title">
					<view class="" v-if="item.id">
						<view>
							<image :src="item.imgurl" class="product__bezel__photo" mode="aspectFill"></image>
						</view>

						<view class="product__bezel__title">
							{{item.title}}
						</view>
						<view class="product__bezel__price">
							{{item.price}}
						</view>

					</view>

					<view class="product__bezel__shopp" v-if="item.id">
						购买数量 <text class="product__bezel__shopp__stock">有货</text>
						<view class="product__bezel__shopp__subtract">
							<text class="product__bezel__shopp__subtract__minus" @click="subtract(-1)">-</text>
							<text class="product__bezel__shopp__subtract__count">{{item.count}}</text>
							<text class="product__bezel__shopp__subtract__plus" @click="subtract(1)">+</text>
						</view>
					</view>
				</view>
			</view>
		</view>


		<!-- 点击打开购物车图标 -->
		<view class="trolley" v-if="flags">
			<view class="trolley__pop" v-if="flags" @click="close">
			</view>

			<view class="trolley__list iconfont">

				<view class="guanli">
					<view class="select" @click="checkall">
						<text v-html="checkal ? '&#xe767;': '&#xe605;'" class="select__all"></text> 全选
					</view>

					<view class="remove" @click="empty">
						清除购物车
					</view>

				</view>
				<view class="" v-for="(item,index) in shoppings" :key="item.price" class="trolley__box">

					<view class="fud" v-if="item.count>0">
						<view class="checks" v-html="item.check ?  '&#xe767;':'&#xe605;'" @click="selected(item)">
						</view>
						<image :src="item.imgurl" class="trolley__list__photo"></image>
						<view class="trolley__boxx">
							<view class="trolley__list__title">
								{{item.title}}
							</view>
							<view class="trolley__list__price">
								{{item.price}} * {{item.count}}/件
							</view>
							<view class="trolley__list__zj">
								共{{item.count}}件 /{{price}} {{item.add}}元
							</view>
						</view>
					</view>
				</view>

				<view class="gross">
					<view class="">
						合计：￥{{accounts}}
					</view>

					<view class="gross__button" @click="leave">
						结算
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {atlas} from "./atlas.js"

	export default {
		data() {
			const shop1 = this.$store.state.shopcart[0] || []
			const shop2 = this.$store.state.shopcart[1] || []
			const shop3 = this.$store.state.shopcart[2] || []
			let mapname = {}
			const totality = this.$store.state.shopcart.length || 0
			const title = [
				[{
						title: "RedDog红狗营养膏（金毛专用)",
						sales: "销售额度10%用于流浪动物救助",
						price: "170",
						digital: "销量：147",
						residue: "库存：1471",
						id: 1,
						imgurl: require("../../static/image/shoppicpath11621413551_y.jpg"),
						count: shop1.count || 0,
						// count: 0,
						digit: 1,
						check: false,
						url: "../../static/image/shoppicpath21621413551_y.jpg",

					},
					{
						url: "../../static/image/shoppicpath51621413551_y.jpg"
					}
				],
				[{
						url: "../../static/image/shoppicpath31602210748_y.jpg",
						title: "RedDog红狗营养膏（柴犬专用)",
						sales: "销售额度10%用于流浪动物救助",
						price: "100",
						digital: "销量：258",
						residue: "库存：2582",
						id: 1,
						imgurl: require("../../static/image/shoppicpath11602210719_y.jpg"),
						count: shop2.count || 0,
						// count: 0,
						digit: 1,
						check: false
					},
					{
						url: "../../static/image/shoppicpath41602210748_y.jpg"
					},
					{
						url: "https://img0.baidu.com/it/u=1795788851,1917720946&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=434"
					}
				],
				[{
						url: "../../static/image/shoppicpath41523609619_y.jpg",
						title: "RedDog红狗营养膏（哈士奇专用)",
						sales: "销售额度10%用于流浪动物救助",
						price: "150",
						digital: "销量：369",
						residue: "库存：3693",
						id: 1,
						imgurl: require("../../static/image/shoppicpath11616380411_y.jpg"),
						count: shop3.count || 0,
						// count: 0,
						digit: 1,
						check: false
					},
					{
						url: "../../static/image/shoppicpath51523609619_y.jpg"
					}

				]
			]
			const goods = ""
			const ff = []
			const shoppings = this.$store.state.shopcart
			const suer = uni.getStorageSync('sureorder') || []
			const message= uni.getStorageSync('delu') 
			return {
				count: 0,
				title,
				indexes: null,
				atlas,
				mapname,
				goods,
				flag: false,
				flags: false,
				shop1,
				shop2,
				shop3,
				ff,
				shoppings,
				checkal: false,
				suer,
				message
			}
		},
		methods: {
			// 轮播图切换时，数字变化的方法   e.target 获取事件触发元素的 current
			tab: function(e) {
				this.count = Number(e.target.current)
			},

			//点击加入购物车时，数据传入vuex里 
			purchased: function() {
				this.flag = !this.flag
				this.goods = this.title[this.indexes]
			},
			// 点击灰色关闭弹窗
			close: function() {
				this.flag = false
				this.flags = false
			},

			// 点击加购和点击减  vuex里的方法
			subtract: function(num) {
				const goods = this.title[this.indexes]
				const indexes = this.indexes
				this.$store.commit("subtract", {
					goods,
					indexes,
					num
				})

			},

			// 点击打开购物车
			trolley: function() {
				this.flags = !this.flags
			},
			//点击立即购买 跳转订单页面并传参过去
			buy: function() {
				const aa = this.title[this.indexes][0]
				uni.navigateTo({
					// 页面传参 接收时数据刷新不在
					// url: `/pages/shopping/order?item=${encodeURIComponent(JSON.stringify(aa))}`
					url: "./order"
				})
				uni.setStorageSync("order", aa)
			},
			// 点击清空购物车 并把缓存存成空
			empty: function() {
				this.shoppings = {}
				uni.setStorageSync('cart', this.shoppings)
			},
			// 点击全选
			checkall: function() {
				this.checkal = !this.checkal
				if (this.checkal == true) {
					for (let i in this.shoppings) {
						this.shoppings[i].check = true
					}
				} else {
					for (let i in this.shoppings) {
						this.shoppings[i].check = false
					}
				}
			},
			// 点击购物车反选
			selected: function(item) {
				item.check = !item.check
				if (item.check == false) {
					this.checkal = false
				}
			},
			// 点击结算 跳转
			leave:function(){
				uni.navigateTo({
					url:"./neworder"
				})
				for (let i in this.shoppings) {
						if(this.shoppings[i].check==true){
							this.suer.push(this.shoppings[i])
							uni.setStorageSync('sureorder',this.suer )
							this.shoppings[i] = {}
							uni.setStorageSync('cart', this.shoppings)
						}
					}
			}
		},

		// 接收从 商城页面跳转的传参
		onLoad: function(option) {
			this.indexes = option.id
		},

		// 地图定位取缓存
		onShow: function() {
			this.mapname = uni.getStorageSync('re')

		},
		// 计算属性    
		computed: {
			// 购物车小标的数量
			scale: function() {
				const gods = this.$store.state.shopcart
				let pp = []
				for (let i in gods) {
					if (gods[i].count > 0) {
						pp.push(gods[i])
					}

				}
				return pp
			},
			// 总价
			price: function() {
				const gos = this.$store.state.shopcart
				for (let i in gos) {
					const pp = gos[i].count * gos[i].price
					gos[i].add = pp
				}
				return 
			},
			// 去结算价格
			accounts: function() {
				let ap = 0
				for (let i in this.shoppings) {
					if (this.shoppings[i].check == true) {
						ap = ap + this.shoppings[i].add
					}
				}
				return ap
			}
		}






	}
</script>

<style lang="scss">
	.swiper-item {
		height: 640rpx;
		position: relative;
	}

	.pictur {
		display: block;
		width: 100%;
		height: 640rpx;
	}

	.dots {
		width: 62rpx;
		height: 32rpx;
		color: #ffffff;
		background-color: #000000;
		opacity: 0.36;
		line-height: 32rpx;
		text-align: center;
		border-radius: 20rpx;
		font-size: 22rpx;
		letter-spacing: 0rpx;
		position: absolute;
		left: 638rpx;
		top: 520rpx;
	}

	.details {
		position: relative;

		&__title {
			width: 530rpx;
			height: 36rpx;
			font-size: 32rpx;
			letter-spacing: 0rpx;
			color: #090909;
			position: absolute;
			top: 30rpx;
			left: 24rpx;
		}

		&__sales {
			width: 368rpx;
			height: 26rpx;
			font-size: 26rpx;
			letter-spacing: 0rpx;
			color: #a2a2a2;
			position: absolute;
			top: 84rpx;
			left: 24rpx;
		}

		&__price {
			font-size: 46rpx;
			letter-spacing: 0rpx;
			color: #f81101;
			position: absolute;
			top: 144rpx;
			left: 24rpx;
		}

		&__digital {
			height: 26rpx;
			font-size: 24rpx;
			letter-spacing: 0rpx;
			color: #8f8f99;
			position: absolute;
			top: 152rpx;
			left: 406rpx;
		}

		&__residue {
			height: 26rpx;
			font-size: 24rpx;
			letter-spacing: 0rpx;
			color: #8f8f99;
			position: absolute;
			top: 152rpx;
			left: 570rpx;
		}
	}

	.modality {
		width: 750rpx;
		height: 26rpx;
		background-color: #f8f8f8;
		margin-top: 210rpx;
	}

	.site {
		position: relative;

		&__city {
			color: #090909;
			font-size: 32rpx;
			position: absolute;
			top: 24rpx;
			width: 100%;

			&__name {
				display: inline-block;
				width: 350rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-left: 24rpx;
			}

			&__area {
				color: #8f8f99;
				position: absolute;
				left: 570rpx;
			}
		}

		&__box {
			width: 726rpx;
			height: 2rpx;
			opacity: 0.15;
			position: absolute;
			top: 80rpx;
			border: 2rpx solid #707070;
		}
	}

	.idea {
		margin-top: 100rpx;

		&__count {
			margin-left: 24rpx;
			font-size: 32rpx;
			color: #2e2e2e;
		}

		&__query {
			font-size: 32rpx;
			color: #888888;
			position: absolute;
			left: 570rpx;
		}

		&__box {
			width: auto;
			height: 2rpx;
			border: 2rpx solid #707070;
			opacity: 0.15;
			margin-top: 18rpx;
			margin-bottom: 30rpx;
		}
	}

	.users {
		width: 662rpx;
		height: 160rpx;
		margin-left: 24rpx;
		position: relative;

		&__portrait {
			width: 82rpx;
			height: 82rpx;
			background-color: #ffffff;
			border-radius: 50%;
			// background-image: url(/static/image/img12.png);
			background-size: cover;
			position: absolute;
			left: 24rpx;
		}

		&__title {
			position: absolute;
			left: 24rpx;
			top: 106rpx;
			font-size: 28rpx;
			letter-spacing: 1rpx;
			color: #4e4e4e;
		}

		// &__box {
		// 	width: 662rpx;
		// 	height: 2rpx;
		// 	border-bottom: 2rpx solid #707070;
		// 	position: absolute;
		// 	top: 158rpx;
		// 	background-color: red;
		// }
		&__name{
			margin-left: 160rpx;
			padding-top: 20rpx;
		}
	}

	.cart {
		display: flex;
		width: 100%;
		height: 8%;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		border-top: 1px solid gray;
		padding-top: 24rpx;

		&__icon {
			margin-left: 56rpx;
			margin-right: 26rpx;

			&__picture {
				width: 44rpx;
				height: 40rpx;
			}

			&__title {
				width: 72rpx;
				height: 24rpx;
				font-size: 24rpx;
				font-weight: normal;
				letter-spacing: 0rpx;
				color: #8a8a8a;
			}

			&__tag {
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				background-color: red;
				border-radius: 50%;
				font-size: 17px;
				text-align: center;
				color: #fff;
				transform: scale(0.7);
				position: absolute;
				bottom: 80rpx;
				left: 90rpx;
			}
		}

		&__join {
			margin-right: 26rpx;

			&__title {
				width: 268rpx;
				height: 78rpx;
				background-color: #fcb826;
				border-radius: 38rpx;
				text-align: center;
				line-height: 78rpx;
				font-size: 24rpx;
				font-weight: normal;
				letter-spacing: 0rpx;
				color: #ffffff;
			}
		}

		&__once {
			&__title {
				width: 268rpx;
				height: 78rpx;
				background-color: #f99015;
				border-radius: 38rpx;
				text-align: center;
				line-height: 78rpx;
				font-size: 24rpx;
				letter-spacing: 0rpx;
				color: #ffffff;
			}
		}
	}

	.boxes {
		overflow-y: scroll;
		height: 1100rpx;
		position: relative;
	}

	.product {
		&__pop {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 150rpx;
			top: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 100;
		}

		&__bezel {
			width: 100%;
			height: 300rpx;
			overflow-y: scroll;
			background: white;
			z-index: 2000;
			position: absolute;
			bottom: 149rpx;

			&__photo {
				width: 138rpx;
				height: 138rpx;
				position: relative;
				left: 24rpx;
				top: 24rpx;
			}

			&__title {
				position: absolute;
				left: 175rpx;
				top: 48rpx;
			}

			&__price {
				color: red;
				position: absolute;
				left: 175rpx;
				top: 104rpx;
				margin-bottom: 20rpx;
			}

			&__shopp {
				position: absolute;
				top: 190rpx;
				left: 48rpx;
				display: flex;

				&__stock {
					color: #8f8f99;
					font-size: 24rpx;
					position: relative;
					left: 30rpx;
				}

				&__subtract {
					position: relative;
					left: 400rpx;

					&__minus {
						display: inline-block;
						border: 0.01rem solid #666;
						color: #666;
						width: 30rpx;
						height: 30rpx;
						font-size: 12px;
						border-radius: 50%;
						text-align: center;
					}

					&__plus {
						display: inline-block;
						border: 0.01rem solid #666;
						color: #F1F1F1;
						width: 30rpx;
						height: 30rpx;
						font-size: 12px;
						border-radius: 50%;
						text-align: center;
						background-color: #0091ff;
					}

					&__count {
						display: inline-block;
						margin-left: 20rpx;
						margin-right: 20rpx;
						font-size: 14rpx;
					}
				}
			}

		}
	}



	// 点击购物车的样式
	.trolley {
		&__pop {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 150rpx;
			top: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 100;
		}

		&__box {
			display: flex;
			box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.2);
			width: 702rpx;
			border-radius: 20rpx;
			margin: 50rpx auto;
		}

		&__list {
			width: 100%;
			// height: 500rpx;
			// overflow-y: scroll;
			background: white;
			z-index: 2000;
			position: fixed;
			bottom: 0rpx;

			&__photo {
				width: 200rpx;
				height: 200rpx;
				margin-bottom: 20rpx;
			}

			&__title {
				margin: 30rpx 0 10rpx 24rpx;
			}

			&__price {
				color: red;
				margin-left: 24rpx;
			}

			&__zj {
				font-size: 22rpx;
				margin: 20rpx 0 0 24rpx;
			}
		}
	}

	.checks {
		color: #fcb826;
		line-height: 200rpx;
		margin: 0 10rpx 0 10rpx;
	}

	.remove {
		margin: 20rpx 0 0 400rpx;
	}

	.select {
		margin: 20rpx 0 0 20rpx;

		&__all {
			color: #fcb826;
			margin-right: 10rpx;
		}
	}

	.guanli {
		display: flex;
	}

	.gross {
		display: flex;
		// position: fixed;
		// bottom: 119rpx;
		// background-color: #ffffff;
		width: 100%;
		justify-content: space-around;

		&__button {
			width: 162rpx;
			height: 56rpx;
			background-color: #f98912;
			border: solid 2rpx #cbcbcb;
			border-radius: 50rpx;
			text-align: center;
			line-height: 56rpx;
			color: #ffffff;
			margin-bottom: 20rpx;
		}
	}

	.fud {
		display: flex;
	}
</style>
