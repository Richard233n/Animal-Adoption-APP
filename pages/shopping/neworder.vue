<template>
	<!-- 购物车结算时的订单 -->
	<view class="Bigbox">
		<view class="orange">
			<text class="iconfont  arrow" @click="backk">&#xe6b6; 确认订单</text>
		</view>

		<view class="order iconfont" v-for="(item,index) in moren" :key="item.id">
			<view class="order__sh" @click="profile">
				收货地址 &#xe640;
			</view>
			<view class="order__name">
				{{item.name}} {{item.phone}}
			</view>

			<view class="order__city">
				{{item.city}}{{item.street}}
			</view>
		</view>


		<view class="service">
			<view class="" v-for="(item,index) in neworder" :key="item.digital">
				<view class="service__matter">
					<image :src="item.imgurl" class="service__photo"></image>
					<view class="">
						<view class="service__title">
							{{item.title}}
						</view>
						<view class="service__price">
							{{item.price}} * {{item.count}} 件
						</view>
						<view class="service__zj">
							{{item.add}}
						</view>
					</view>

				</view>

			</view>

		</view>

		<view class="base">
			<view class="base__box">
				<view class="base__box__zj">
					总计：￥{{price}}
				</view>
				<view class="base__box__zf" @click="puof">
					支付
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			const moren = [uni.getStorageSync('moren')]
			const neworder = uni.getStorageSync('sureorder')
			return {
				moren,
				neworder
			}
		},
		methods: {
			// 点击返回  tabBar 页面
			backk: function() {
				uni.switchTab({
					url: '/pages/shopping/shopping'
				});
			},
			
			// 支付按钮
			puof(){
				let _self=this
				uni.showModal({
				    title: '确认支付',
				    content: '支付宝支付',
				    success: function (res) {
				        if (res.confirm) {
							const succeed={}
							succeed.state='已支付'
							succeed.list=_self.neworder
							const win= uni.getStorageSync('win')||[]
							 win.push(succeed)
							uni.setStorageSync('win',win)
							setTimeout(() => {
								uni.navigateTo({
									url:"../personal/quanbu"
								})
							}, 2000)
							
				        } else if (res.cancel) {
							const payment={}
							payment.state='待支付'
							payment.list=_self.neworder
							const fail= uni.getStorageSync('fail')||[]
							 fail.push(payment)
							uni.setStorageSync('fail',fail)
							setTimeout(() => {
								uni.navigateTo({
									url:"../personal/quanbu"
								})
							}, 2000)
				        }
				    }
				});
				// 加入唯一标识id  存一个全部订单缓存
				// const aaa= uni.getStorageSync('sureorder')
				// aaa.id=1
				// for(let i in aaa){
				// 	if(aaa[i].add){
				// 		aaa.id=aaa[i].add+aaa.id
				// 	}
				// }
				// const www={}
				// www.id=aaa.id
				// www.products=aaa
				// www.status='未支付'
				//  const alls= uni.getStorageSync('allorders')||[]
				//  alls.push(www)
				// uni.setStorageSync('allorders',alls)
				uni.removeStorage({key:'sureorder'});
			},
			// 点击跳转地址
			profile(){
				uni.navigateTo({
					url:'../personal/profile'
				})
			}
			
			
			
			
			
		},
				
	
		
		
		// 计算属性 渲染层直接{{函数名}}
		computed:{
			price:function(){
				let a=0
				for(let i in this.neworder){
					a=a+this.neworder[i].add
				}
				return a
			} 
		}
		
		
		
	}
</script>

<style lang="scss">
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

	.order {
		width: 702rpx;
		height: 240rpx;
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

		&__city {
			color: #999999;
			margin: 10px 0 0 20rpx;
		}
	}

	.service {
		width: 704rpx;
		margin: 0 auto;
		position: relative;
		top: 150rpx;
		border-radius: 18rpx;
		box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.16);
		&__matter{
			display: flex;
			margin-left: 24rpx;
			padding-top: 24rpx;
		}
		&__photo{
			width: 164rpx;
			height: 166rpx;
			border-radius: 10rpx;
		}
		&__title {
			font-size: 24rpx;
			color: #4d4d4d;
			margin: 0 0 0 40rpx;
		}
		&__price {
			color: #4d4d4d;
			margin: 20rpx 0 0 40rpx;
		}
		&__zj{
			color: red;
			margin: 20rpx 0 0 40rpx;
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
