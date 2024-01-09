<template>
	<view  class="box"> 
	<!-- 已支付的订单 -->

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


		</view>


	</view>
</template>

<script>
	export default {
		data() {
			const wine = uni.getStorageSync('win')
			return {
				wine
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
	.box {
		background-color: #f8f8f8;
		height: 3000rpx;
	}
	.order {
		width: 704rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: 0 auto 40rpx auto;

		&__head {
			display: inline-block;
			margin: 20rpx 0 0 550rpx;
			font-weight: bold;
			font-size: 32rpx;
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
</style>
