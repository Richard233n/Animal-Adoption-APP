<template>
	<!-- 我的页面  全部按钮 -->
	<view class="box">

		<view class="boxx">
			<view class="iconfont back" @click="jump">
				&#xe6b6;
			</view>

			<!-- 搜索框静态样式 -->
			<view class="orange iconfont">
				<view class="orange__icon">
					&#xe62f;
				</view>
				<input class="search" type="text" placeholder="搜索订单" placeholder-style="font-size:14px">
			</view>
		</view>


		<!-- 点击切换样式 -->
		<view class="switchover">
			<view class="" v-for="(item,index) in cate" :class="{vvv:activeIndex==index}" :key="item.name"
				@click="handleCategoryClick(index)">
				<text class="name">
					{{item.name}}
				</text>
				<view :class="{xiabiao:activeIndex==index}">
				</view>
			</view>
		</view>


		<view class="" v-if="activeIndex==0">
			<!-- 	<view class="order" v-for="(item,index) in allorders" :key="item.id">
				<text class="order__head">订单号 {{item.id}}</text>
				<view class="">
					<view class="" v-for="(its,index) in item.products" :key="its.title">

						<view class="order__box">
							<image :src="its.imgurl" class="order__img"></image>
							<view class="">
								<view class="order__title">
									{{its.title}}
								</view>

								<view class="order__price">
									￥：{{its.price}}
								</view>

								<view class="order__count">
									x {{its.count}}
								</view>
							</view>
						</view>

					</view>

				</view>

				<view class="cancel" @click="aways(item,index)">
					删除订单
				</view>
			</view> -->
			<view class="order" v-for="(item,index) in wine" :key="item.id">
				<text class="order__head">{{item.state}}</text>
				<view class="">
					<view class="" v-for="(its,index) in item.list" :key="its.title">

						<view class="order__box">
							<image :src="its.imgurl" class="order__img"></image>
							<view class="">
								<view class="order__title">
									{{its.title}}
								</view>

								<view class="order__price">
									￥：{{its.price}}
								</view>

								<view class="order__count">
									x {{its.count}}
								</view>
							</view>
						</view>

					</view>

				</view>
				<view class="tevaluate">
					<view class="appraise">
						去评价
					</view>
					<view class="cancel" @click="aways(item,index)">
						删除订单
					</view>

				</view>

			</view>

			<view class="order" v-for="(item,index) in fail" :key="item.id">
				<text class="order__hea">{{item.state}}</text>
				<view class="">
					<view class="" v-for="(its,index) in item.list" :key="its.title">

						<view class="order__box">
							<image :src="its.imgurl" class="order__img"></image>
							<view class="">
								<view class="order__title">
									{{its.title}}
								</view>

								<view class="order__price">
									￥：{{its.price}}
								</view>

								<view class="order__count">
									x {{its.count}}
								</view>
							</view>
						</view>

					</view>

				</view>
				<view class="canc" @click="cancel(item,index)">
					取消订单
				</view>

			</view>
		</view>


		<view class="" v-if="activeIndex==1">
			<view class="order" v-for="(item,index) in fail" :key="item.id">
				<text class="order__hea">{{item.state}}</text>
				<view class="">
					<view class="" v-for="(its,index) in item.list" :key="its.title">

						<view class="order__box">
							<image :src="its.imgurl" class="order__img"></image>
							<view class="">
								<view class="order__title">
									{{its.title}}
								</view>

								<view class="order__price">
									￥：{{its.price}}
								</view>

								<view class="order__count">
									x {{its.count}}
								</view>
							</view>
						</view>

					</view>

				</view>
				<view class="canc" @click="cancel(item,index)">
					取消订单
				</view>

			</view>
		</view>


		<view class="" v-if="activeIndex==2">
			<view class="order" v-for="(item,index) in wine" :key="item.id">
				<text class="order__head">{{item.state}}</text>
				<view class="">
					<view class="" v-for="(its,index) in item.list" :key="its.title">

						<view class="order__box">
							<image :src="its.imgurl" class="order__img"></image>
							<view class="">
								<view class="order__title">
									{{its.title}}
								</view>

								<view class="order__price">
									￥：{{its.price}}
								</view>

								<view class="order__count">
									x {{its.count}}
								</view>
							</view>
						</view>

					</view>

				</view>
			<view class="tevaluate">
				<view class="appraise">
					去评价
				</view>
				<view class="cancel" @click="aways(item,index)">
					删除订单
				</view>
			
			</view>
			</view>
		</view>










	</view>






</template>

<script>
	export default {
		data() {
			const cate = [{
					name: "全部"
				},
				{
					name: "待付款"
				},
				{
					name: "已付款"
				},
				{
					name: "待收货",
				},
				{
					name: "待评价"
				}
			]
			// const allorders = uni.getStorageSync('allorders')
			const wine = uni.getStorageSync('win')
			const fail = uni.getStorageSync('fail')
			return {
				activeIndex: 0,
				cate,
				// allorders,
				wine,
				fail

			}
		},
		methods: {
			// 跳转
			jump: function() {
				uni.switchTab({
					url: "./personal"
				})
			},
			// 导航栏滑动函数
			handleCategoryClick: function(index) {
				this.activeIndex = index
			},
			// 删除订单
			aways(item, index) {
				console.log(index, 'xxx')
				//  this.allorders.splice(index,1)
				// uni.setStorageSync('allorders',this.allorders )
				this.wine.splice(index, 1)
				uni.setStorageSync('win', this.wine)
			},
			cancel(item, index) {
				this.fail.splice(index, 1)
				uni.setStorageSync('fail', this.fail)

			}


		}
	}
</script>

<style lang="scss">
	.box {
		background-color: #f8f8f8;
		height: 3000rpx;
	}

	.boxx {
		display: flex;
	}

	.orange {
		display: flex;
		margin: 58rpx auto 40rpx 64rpx;
		width: 396rpx;
		height: 58rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.11);
		border-radius: 50rpx;

		&__icon {
			line-height: 68rpx;
			margin-left: 20rpx;
		}
	}

	.search {
		width: 702rpx;
		height: 68rpx;
		text-indent: 24rpx
	}

	.back {
		padding-top: 62rpx;
		padding-left: 22rpx;
	}

	.switchover {
		display: flex;
		justify-content: space-around;

	}

	.vvv {
		text-align: center;
		color: #ffffff;
		font-size: 26rpx;
		color: #f98912;
	}

	.xiabiao {
		margin-top: 20rpx;
		width: 50rpx;
		height: 10rpx;
		background-color: #fd843e;
		border-radius: 6rpx;
	}

	.order {
		width: 704rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: 40rpx auto 40rpx auto;

		&__head {
			display: inline-block;
			margin: 20rpx 0 0 550rpx;
			font-weight: bold;
			font-size: 32rpx;
		}

		&__hea {
			display: inline-block;
			margin: 20rpx 0 0 550rpx;
			font-weight: bold;
			font-size: 32rpx;
			color: red;

		}

		&__img {
			width: 176rpx;
			height: 178rpx;
			border-radius: 10rpx;
			margin: 32rpx 0 0 32rpx;
		}

		&__box {
			display: flex;
		}

		&__title {
			font-size: 28rpx;
			color: #4d4d4d;
			margin: 35rpx 0 15rpx 20rpx;
		}

		&__price {
			color: red;
			margin: 35rpx 0 15rpx 20rpx;
		}

		&__count {
			font-size: 26rpx;
			font-weight: bold;
			color: #4d4d4d;
			margin: 35rpx 0 15rpx 20rpx;
		}

	}

	.cancel {
		width: 162rpx;
		height: 56rpx;
		background-color: #ffffff;
		border: solid 2rpx #cbcbcb;
		border-radius: 50rpx;
		text-align: center;
		line-height: 56rpx;
		
	}

	.appraise {
		width: 162rpx;
		height: 56rpx;
		background-color: #ffffff;
		border: solid 2rpx #cbcbcb;
		border-radius: 50rpx;
		text-align: center;
		line-height: 56rpx;
		margin-left: 200rpx;
	}
	.tevaluate{
		display: flex;
		justify-content: space-around;
	}
	
	.canc {
		width: 162rpx;
		height: 56rpx;
		background-color: #ffffff;
		border: solid 2rpx #cbcbcb;
		border-radius: 50rpx;
		text-align: center;
		line-height: 56rpx;
		margin-left: 490rpx;
	}
	
</style>
