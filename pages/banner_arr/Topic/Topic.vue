<!-- 主页面的话题  -->
<template>
	<!-- 主页面的话题  -->
	<view class="setting">

		<view class="tybox">

		</view>

		<view class="print">
			<image src="../../../static/image/img14.jpg" mode="" class="print__theme"></image>

			<view class="print__title">
				国际爱猫日：快乐相伴·费利威，免费送
			</view>

			<view class="print__content">
				获奖名单 —等奖:奶广、大号奶猫二等奖:婷婷的啾
				咪小朋友、嘟嘟的宠物乐园、mobi0177423三...
			</view>

			<view class="print__icon  iconfont">
				<view class="print__icon__yan">
					&#xe661;51542
				</view>
				<view class="print__icon__yan">
					&#xe64b;51542
				</view>
				<view class="print__icon__yan">
					&#xe616;51542
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
	.setting {
		background-color: #f1f1f1;
		height: 1300rpx;
		position: relative;
	}

	.tybox {
		height: 50rpx;
	}

	.print {
		width: 700rpx;
		height: 500rpx;
		background-color: #ffffff;
		margin: 0 auto;
		border-radius: 20rpx;

		&__theme {
			width: 704rpx;
			height: 302rpx;
			border-radius: 20rpx;
			display: block;
		}

		&__title {
			font-size: 32rpx;
			font-weight: normal;
			color: #444444;
			margin-top: 15rpx;
			text-indent:15rpx;
		}
		
		&__content{
			font-size: 24rpx;
			color: #999999;
			margin: 17rpx 15rpx 0 15rpx;
		}
		
		&__icon{
			display:flex;
			color: #c6c6c6;
			&__yan{
				margin: 20rpx 15rpx 0 15rpx;
			}
			
		}
		
	}
</style>
