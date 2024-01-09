<template>
	<view>
		<view class="choose">选择门店</view>
		<!-- 搜索框静态样式 -->
		<view class="search_img iconfont">
			<view class="search_img__icon">
				&#xe62f;
			</view>
			<input class="search" type="text" placeholder="搜索你想要的" placeholder-style="font-size:14px">
		</view>
		<view class="shop_list">
			<view class="">
				<view class="list_img">
					
				</view>
				<view class="list_connect">
					<view class="">
						头
					</view>
					<view class="">
						朝阳区百子湾东里沿海二斜街304
					</view>
					<view class="list_foot">
						<view class="order__count">
							
						</view>
						<view class="order__goods">
							
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
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
    
	.search_img{
		display: flex;
		margin: 10rpx auto 40rpx auto;
		width: 702rpx;
		height: 68rpx;
		background-color: #d6baba;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.11);
		border-radius: 8rpx;
		
		&__icon{
			line-height: 68rpx;
			margin-left: 20rpx;
		}
	}
	.search {
		width: 702rpx;
		height: 68rpx;
		text-indent: 24rpx
	}
	
	.choose{
		margin: 50rpx auto 0 30rpx;
		color: #444444;
	}
	
	
</style>
