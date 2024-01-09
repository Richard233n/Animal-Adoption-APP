<template>
	<!-- 我的 个人中心 -->
	<view class="great">

		<view class="mine">
			<view class="mine__head">
				<image :src="image" class='head'   mode="aspectFill"></image>
				
			</view>
			<text class="mine__name">{{nickname}}</text>
		</view>

		<view class="order">
			<text class="order__me">我的订单</text>
			<text class="order__all">全部订单</text>

			<view class=" iconfont  order__image">
				<view class=" " @click="together">
					<view class="order__image__icon">
						&#xe61b;
					</view>
					<view class="order__image__text"  >
						全部
					</view>
				</view>
				<view class=" " @click="fail">
					<view class="order__image__icon">
						&#xe600;
					</view>
					<view class="order__image__text">
						代付款
					</view>
				</view>
				<view class=" "  @click="paid">
					<view class="order__image__icon">
						&#xe622;
					</view>
					<view class="order__image__text">
						已付款
					</view>
				</view>
				<view class=" "  >
					<view class="order__image__icon">
						&#xe61e;
					</view>
					<view class="order__image__text">
						待收货
					</view>
				</view>
				<view class=" ">
					<view class="order__image__icon">
						&#xe601;
					</view>
					<view class="order__image__text">
						代评价
					</view>
				</view>

			</view>
		</view>

		<view class="location  iconfont">
			<view class=" ">
				<view class="location__icon">
					&#xe612;
				</view>
				<view class="location__text">
					我的领养
				</view>
			</view>
			<view class=" "  @click="collect">
				<view class="location__icon">
					&#xe687;
				</view>
				<view class="location__text">
					我的关注
				</view>
			</view>
			<view class=" "  @click="site">
				<view class="location__icon">
					&#xe60e;
				</view>
				<view class="location__text">
					我的地址
				</view>
			</view>
			<view class=" ">
				<view class="location__icon">
					&#xe604;
				</view>
				<view class="location__text">
					我的订单
				</view>
			</view>

			<view class=" "  @click="person">
				<view class="location__icon">
					&#xe618;
				</view>
				<view class="location__text">
					个人资料
				</view>
			</view>

			<view class=" " @click="adopt" >
				<view class="location__icon">
					&#xe608;
				</view>
				<view class="location__text">
					领养协议
				</view>
			</view>

			<view class=" " @click="issue"   >
				<view class="location__icon">
					&#xe672;
				</view>
				<view class="location__text">
					我的送养
				</view>
			</view>

		</view>

		<button type="default" class="enter" @click="quit">退出登录</button>



	</view>
</template>

<script>
	export default {
		data() {
			const image=uni.getStorageSync('delu').image
			const nickname=uni.getStorageSync('delu').name
			console.log(image,'头像')
			return {
				image,
				nickname
			}
		},
		methods: {
				// 跳转个人资料
			person:function(){
				uni.navigateTo({
				    url: "./person"
				});
			},
			// 跳转我的地址
			site:function(){
				uni.navigateTo({
					url:"./profile"
				})
			},
			// 跳转领养协议
			adopt:function(){
				uni.navigateTo({
					url:"./lingyang/lingyang"
				})
			},
			// 跳转我的关注
			collect:function(){
				uni.navigateTo({
					url:"./gzhu"
				})
			},
			// 跳转我的发布
			issue:function(){
				uni.navigateTo({
					url:"./mefab"
				})
			},
			// 跳转全部订单
			together(){
				uni.navigateTo({
					url:"./quanbu"
				})
			},
			// 跳转成功支付状态
			paid(){
				uni.navigateTo({
					url:"./paid"
				})
			},
			// 跳转未支付页面
			fail(){
				uni.navigateTo({
					url:"./daifuk"
				})
			},
			// 点击退出登录
			quit(){
				uni.removeStorage({key:'delu'});
				uni.navigateTo({
					url:"/pages/Login/Login"
				})
			}
			
			
			
			
			
		}
	}
</script>

<style lang="scss">
	.great {
		position: relative;

	}

	.mine {
		background: -webkit-linear-gradient(left, orangered, orange);
		width: 100%;
		height: 400rpx;
		border-bottom-left-radius: 80rpx;
		border-bottom-right-radius: 80rpx;

		&__head {
			background-size: cover;
			border-radius: 50%;
			width: 98rpx;
			height: 96rpx;
			background-color: #ffffff;
			border: solid 2rpx #707070;
			position: absolute;
			top: 72rpx;
			left: 38rpx;
		}

		&__name {
			height: 32rpx;
			font-size: 34rpx;
			letter-spacing: 0rpx;
			color: #ffffff;
			position: absolute;
			top: 104rpx;
			left: 154rpx;
		}
	}

	.order {
		width: 702rpx;
		height: 220rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 8rpx;
		position: absolute;
		top: 228rpx;
		left: 24rpx;

		&__me {
			color: #222222;
			position: absolute;
			left: 46rpx;
			top: 30rpx;
		}

		&__all {
			color: #b8b8b8;
			position: absolute;
			right: 46rpx;
			top: 30rpx;
		}

		&__image {
			display: flex;
			justify-content: space-around;
			margin-top: 85rpx;

			&__icon {
				font-size: 55rpx;
				background-image: linear-gradient(180deg,
						#fbc720 0%,
						#f83f02 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			&__text {
				font-size: 24rpx;
				color: #222222;
				margin-top: 22rpx;
			}
		}
	}

	.location {
		width: 357px;
		height: 364rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 8rpx;
		margin: 90rpx 24rpx 0 24rpx;
		display: flex;
		flex-wrap: wrap;

		&__icon {
			font-size: 55rpx;
			background-image: linear-gradient(180deg,
					#fbc720 0%,
					#f83f02 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin: 48rpx 50rpx 22rpx 60rpx;
		}

		&__text {
			color: #222222;
			font-size: 24rpx;
			margin: 0 40rpx 0 40rpx;
		}
	}

	.enter {
		width: 702rpx;
		height: 84rpx;
		background-image: linear-gradient(180deg,#fbc720 0%,#f83f02 100%);
		border-radius: 8rpx;
		color: #FFFFFF;
		margin-top: 86rpx;
	}
	
	.head{
		border-radius: 50%;
		width: 98rpx;
		height: 96rpx;
		
	}
	
	
</style>
