<template>
	<!-- 点击立即购买时的订单页面 -->
	<view>
		<view class="orange">
			<text class="iconfont  arrow" @click="backk">&#xe6b6; 确认订单</text>
		</view>

		<view class="order iconfont" v-for="(item,index) in moren" :key="item.id">
			<view class="order__sh">
				收货地址 &#xe640;
			</view>
			<view class="order__name">
				{{item.name}}
			</view>
			<view class="order__phone">
				{{item.phone}}
			</view>
			<view class="order__city">
				{{item.city}}{{item.street}}
			</view>
		</view>


		<view class="service" v-for="(item,index) in order" :key="item.digital">
			<view class="service__matter">
				<image :src="item.imgurl" class="service__photo"></image>
				<view class="">
					<view class="service__title">
						{{item.title}}
					</view>
					<view class="service__price">
						{{item.price}} * {{item.digit}} 件
					</view>

				</view>

			</view>

		</view>

		<view class="base">
			<view class="base__box">
				<view class="base__box__zj">
					总计：￥{{order[0].price}}
				</view>
				<view class="base__box__zf"  @click="pay" >
					提交订单
				</view>
			</view>
		</view>




	</view>
</template>

<script>
	export default {
		data() {
			const moren = [uni.getStorageSync('moren')]
			const order = [uni.getStorageSync('order')]
			return {
				order,
				moren,
			}
		},
		methods: {
			// 点击返回  tabBar 页面
			backk: function() {
				uni.switchTab({
					url: '/pages/shopping/shopping'
				})
			},
			// 点击去支付
			pay:function(){
				let _self=this
				uni.showActionSheet({
				    itemList: ['确认支付', '取消支付'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if(res.tapIndex==0){
							// uni.setStorageSync('win',_self.order)
							// uni.setStorageSync('win',refer)
							console.log('支付成功')
						}
						
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			}
			
			
			
			
		},
		// 接收立即购买页面传过来的参数
		onLoad: function(option) {
			// this.order = [JSON.parse((option.item))[0]]
			// console.log(this.order, '示')
		}




	}
</script>

<style lang="scss">
	.order {
		width: 702rpx;
		height: 270rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 18rpx;
		position: absolute;
		top: 228rpx;
		left: 24rpx;

		&__sh {
			font-size: 40rpx;
			margin: 20rpx 0 0 24rpx;
		}

		&__name {
			font-size: 32rpx;
			color: #444444;
			margin: 20rpx 0 0 24rpx;
		}

		&__phone {
			font-size: 28rpx;
			color: #999999;
			margin: 20rpx 0 0 24rpx;
		}

		&__city {
			color: #999999;
			margin: 10px 0 0 20rpx;
		}
	}

	.orange {
		background-image: linear-gradient(180deg, #fbc720 0%, #f83f02 100%);
		width: 100%;
		height: 400rpx;
		border-bottom-left-radius: 150rpx;
		border-bottom-right-radius: 150rpx;
		position: relative;
	}

	.arrow {
		color: #FFFFFF;
		font-size: 20px;
		position: absolute;
		top: 62rpx;
		left: 22rpx;
	}

	.service {
		width: 704rpx;
		border-radius: 14rpx;
		position: absolute;
		top: 600rpx;
		left: 24rpx;
		box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.16);
		&__matter {
			display: flex;
		}
		&__photo {
			width: 180rpx;
			height: 180rpx;
			border-radius: 10rpx;
			margin: 30rpx 0 0 20rpx;
			box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
		}
		&__title {
			font-size: 24rpx;
			color: #4d4d4d;
			margin: 50rpx 0 0 40rpx;
		}
		&__price {
			color: red;
			margin: 50rpx 0 0 40rpx;
		}
	}

	.base {
		width: 750rpx;
		height: 120rpx;
		position: fixed;
		bottom: 0;

		&__box {
			display: flex;
			box-shadow: 0rpx -6rpx 14rpx 0rpx rgba(0, 0, 0, 0.05);
			font-size: 32rpx;
			color: #444444;
			line-height: 120rpx;
			padding-left: 24rpx;
			justify-content: space-between;

			&__zf {
				width: 258rpx;
				height: 120rpx;
				background-color: #fcb826;
				color: #ffffff;
				text-align: center;
			}
		}
	}
</style>
