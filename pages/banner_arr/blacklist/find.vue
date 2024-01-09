<template>
	<!-- 黑名单里的查询 -->
	<view class="main">

		<view class="iconfont  demand ">
			<picker :range="condition" @change="choose" :value="index">
				<view>{{condition[index]}} <text class="demand__icon"> &#xe60c; </text></view>
			</picker>
			<input type="text" value="" class="demand__seek" placeholder="请输入.." />
			<button type="default" class="demand__ensure">确定</button>
		</view>


	</view>

</template>

<script>
	export default {
		data() {
			return {
				condition: ['--请选择查询条件--', '按真实姓名查询', '按领养身份查询'],
				index: 0,
			}
		},
		methods: {
			// 从底部弹起的滚动选择器的方法
			choose: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			}


		}
	}
</script>

<style lang="scss">
	.demand {
		width: 704rpx;
		height: 88rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		position: relative;
		top: 152rpx;
		line-height: 88rpx;
		text-indent: 2em;
		color: #999999;

		&__icon {
			position: absolute;
			left: 600rpx;
			font-size: 26rpx;
		}

		&__seek {
			width: 704rpx;
			height: 90rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
			margin-top: 40rpx;
		}

		&__ensure {
			width: 704rpx;
			height: 76rpx;
			background-color: #f99214;
			border-radius: 38rpx;
			position: absolute;
			top: 600rpx;
			color: #FFFFFF;
			line-height: 76rpx;
			
		}
	}
</style>
