<template>
	<view class="boxx">
		<!-- 商城页面 -->
		<view class="box">

			<view class="orange">
				<text class="iconfont  arrow">&#xe6b6; 商城</text>
				<input value="" class="search " type="text" placeholder="搜索你想要的" placeholder-style="font-size:14px">
			</view>

			<view class="page">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="3000">
					<swiper-item>
						<image src="../../static/image/shoppicpath1495006717.jpg" class="carousel"></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/image/shoppicpath1495006572.jpg" class="carousel"></image>
					</swiper-item>
				</swiper>
			</view>


			<view class="biaoq">
				<view class="qian">
				</view>
				<text class="gouliang">狗粮</text>
				<view class="hou">
				</view>
			</view>

			<view class="foodbox">
				<view class="foodd" v-for="(item,index) in food " :key="item.name">
					<view class="">
						<image :src="item.url" mode="" class="pet" @click="jump(item,index)"></image>
						<view class="Dogfood">
							{{item.name}}
						</view>
						<view class="number">
							{{item.weight}}
						</view>
						<view class="price">
							￥{{item.price}}
						</view>
						<view class="" @click="join">
							<image :src="item.imgurl" class="shopping" />
						</view>
					</view>
				</view>
			</view>

			<view class="maob">
				<view class="maoq">
				</view>
				<text class="maoliang">猫粮</text>
				<view class="maoh">
				</view>
			</view>

			<view class="foodbox">
				<view class="foodd" v-for="(item,index) in cat " :key="item.name">
					<view class="">
						<image :src="item.url" mode="" class="pet"></image>
						<view class="Dogfood">
							{{item.name}}
						</view>
						<view class="number">
							{{item.weight}}
						</view>
						<view class="price">
							￥{{item.price}}
						</view>
						<view class="">
							<image :src="item.imgurl" class="shopping" />
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="suspend iconfont" @click="popup">
			&#xe63b;
		</view>
		<view class="tag">
			{{scale.length}}
		</view>

	</view>
</template>

<script>
	export default {

		data() {
			const food = [{
					url: "/static/image/shoppicpath11621413551_y.jpg",
					name: "麦富迪佰萃成犬粮牛肉",
					weight: "3斤",
					price: 170,
					imgurl: "/static/image/购物车.png",

				},

				{
					url: "../../static/image/shoppicpath11602210719_y.jpg",
					name: "好之味 添加牛肉海藻卵磷脂成犬粮 ",
					weight: "3斤",
					price: 100,
					imgurl: "/static/image/购物车.png"
				},
				{
					url: "/static/image/shoppicpath11616380411_y.jpg",
					name: "优倍滋 牛肉味全犬种全期犬粮 10kg 滋养被毛 ",
					weight: "3斤",
					price: 150,
					imgurl: "/static/image/购物车.png"
				},

				{
					url: "/static/image/shoppicpath11630912743_y.jpg",
					name: "伯纳天纯 无谷冻干海洋盛宴全犬种全期犬粮 12kg 72%含肉量 ",
					weight: "3斤",
					price: 399,
					imgurl: "/static/image/购物车.png"
				},
			]

			const cat = [{
					url: "/static/image/shoppicpath11612166936_y.png",
					name: " 尹正推荐 WOWO 冻干三鲜全价成猫粮 1kg 肉裹肉 适口性好",
					weight: "3斤",
					price: 45,
					imgurl: "/static/image/购物车.png"
				},
				{
					url: "/static/image/shoppicpath11616380647_y.jpg",
					name: "怡亲Yoken 去毛球成猫粮 ",
					weight: "3斤",
					price: 93,
					imgurl: "/static/image/购物车.png"
				},
			]
			const shoppings = this.$store.state.shopcart
			return {
				food,
				cat,
				tag: 0,
				flag: false,
				carr: [],
				shoppings
			}
		},
		methods: {
			// 跳转详情页面并传参
			jump: function(item, index) {
				uni.navigateTo({
					url: `/pages/shopping/items?id=${index}`
				})
			},
			// 点击悬浮按钮 出现遮罩层
			popup: function() {
				this.flag = !this.flag
			},

			// 点击灰色关闭弹窗
			close: function() {
				this.flag = false
			},
			// 点击小购物车图标
			join: function() {},

		},



		// 计算属性 
		computed: {
			// 购物车小标的函数效果
			scale: function() {
				const gods = this.shoppings
				let pp = []
				for (let i in gods) {
					if (gods[i].count > 0) {
						pp.push(gods[i])
					}
				}
				return pp
			},

		}

	}
</script>

<style lang="scss">
	.box {
		background-color: #f1f1f1;
	}

	.orange {
		background-image: linear-gradient(180deg, #fbc720 0%, #f83f02 100%);
		width: 100%;
		height: 400rpx;
		border-bottom-left-radius: 150rpx;
		border-bottom-right-radius: 150rpx;
		position: relative;
	}

	.search {
		width: 704rpx;
		height: 68rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		text-align: center;
		color: black;
		position: absolute;
		top: 148rpx;
		left: 24rpx;
	}

	.page {
		text-align: center;
		margin-top: -150rpx;
		margin-bottom: 30rpx;
	}

	.carousel {
		width: 704rpx;
		height: 300rpx;
		border-radius: 16rpx;
	}

	.biaoq {
		text-align: center;
		position: relative;
	}

	.gouliang {
		font-size: 28rpx;
		letter-spacing: 0rpx;
		color: #fd843e;
	}

	.qian {
		width: 62rpx;
		border: solid 2rpx #fd843e;
		position: absolute;
		left: 264rpx;
		top: 20rpx;
	}

	.hou {
		width: 62rpx;
		border: solid 2rpx #fd843e;
		position: absolute;
		left: 422rpx;
		top: 20rpx;
	}

	.pet {
		width: 355rpx;
		height: 355rpx;
	}

	.Dogfood {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 232rpx;
		font-size: 26rpx;
		margin-left: 36rpx;
	}

	.foodbox {
		display: flex;
		flex-wrap: wrap;
	}

	.foodd {
		background-color: #FFFFFF;
		margin-left: 18rpx;
		margin-top: 30rpx;
	}

	.number {
		margin-left: 36rpx;
		margin-bottom: 32rpx;

	}

	.price {
		font-size: 16px;
		letter-spacing: 0rpx;
		color: #e60002;
		margin-left: 36rpx;
	}

	.shopping {
		color: #fdcf36;
		width: 38rpx;
		height: 38rpx;
		position: relative;
		top: -40rpx;
		left: 272rpx;
	}

	.maob {
		text-align: center;
		position: relative;
		top: 20rpx;
	}

	.maoliang {
		font-size: 28rpx;
		letter-spacing: 0rpx;
		color: #fd843e;
	}

	.maoq {
		width: 62rpx;
		border: solid 2rpx #fd843e;
		position: absolute;
		left: 264rpx;
		top: 20rpx;
	}

	.maoh {
		width: 62rpx;
		border: solid 2rpx #fd843e;
		position: absolute;
		left: 422rpx;
		top: 20rpx;
	}

	.arrow {
		color: #FFFFFF;
		font-size: 20px;
		position: absolute;
		top: 62rpx;
		left: 22rpx;
	}

	.suspend {
		font-size: 40px;
		z-index: 1000;
		position: fixed;
		left: 650rpx;
		top: 1000rpx;
	}

	.boxx {
		z-index: 500;
	}

	.tag {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		background-color: red;
		border-radius: 50%;
		font-size: 17px;
		text-align: center;
		color: #fff;
		transform: scale(0.7);
		position: fixed;
		left: 700rpx;
		top: 980rpx;
	}

	.product {
		&__pop {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 100;
		}
	}
</style>
