<template>
	<!-- 主界面的寻宠 -->
	<view>
		<!-- 搜索框静态样式 -->
		<view class="orange iconfont">
			<view class="orange__icon">
				&#xe62f;
			</view>
			
			<input class="search" type="text" placeholder="搜索你想要的" placeholder-style="font-size:14px">
		</view>

		<!-- 点击切换样式 -->
		<view class="switchover">
			<view class="cate" v-for="(item,index) in cate" :class="{vvv:activeIndex==index}" :key="item.name"
				@click="handleCategoryClick(index)">
				<text class="name">
					{{item.name}}
				</text>
				<view :class="{xiabiao:activeIndex==index}">
				</view>
			</view>
		</view>

		<!-- 从vuex 获取寻宠数据 并循环渲染 -->
		<view class="pet iconfont" v-for="(item,index) in forpe" :key="item.derivation">

			<!-- 加条件 类型是狗出现在1 -->
			

		</view>



	</view>
</template>

<script>
	export default {
		data() {

			const cate = [{
					name: "狗狗"
				},
				{
					name: "猫咪"
				},
				{
					name: "其他"
				},
				{
					name: "筛选",
				}
			]
			// 调用vuex 里的寻找宠物数据
			const forpe = this.$store.state.pet

			return {
				cate,
				activeIndex: 0,
				forpe,
			}
		},
		methods: {

			// 导航栏滑动函数
			handleCategoryClick: function(index) {
				this.activeIndex = index
			},
		},
		
	
		
		
	}
</script>

<style lang="scss">

	.orange{
		display: flex;
		margin: 50rpx auto 40rpx auto;
		width: 702rpx;
		height: 68rpx;
		background-color: #ffffff;
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

	.cate {
		width: 132rpx;
		height: 58rpx;
		background-color: #e9e9e9;
		border-radius: 28rpx;
		text-align: center;
		line-height: 58rpx;
	}

	.vvv {
		width: 132rpx;
		height: 58rpx;
		background-color: #f99015;
		border-radius: 28rpx;
		text-align: center;
		color: #ffffff;
	}

	.xiabiao {
		margin-top: 20rpx;
		width: 132rpx;
		height: 12rpx;
		background-color: #fd843e;
		border-radius: 6rpx;
	}

	.switchover {
		display: flex;
		justify-content: space-around;
	}

	// 寻宠的一些css样式
	.pet {
		margin: 60rpx 12rpx 0 12rpx;
		&__dog {
			display: flex;
			flex-wrap: wrap;
			box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
			border-radius: 30rpx;
			&__print {
				width: 240rpx;
				height: 240rpx;
				border-radius: 20rpx;
				margin: 15rpx 0 0 22rpx;
			}

			&__title {
				margin-left: 30rpx;
				font-size: 34rpx;
				color: #444444;
			}

			&__icon {
				width: 40rpx;
				height: 40rpx;
				margin: 20rpx 0 0 20rpx;
			}

			&__describe {
				width: 316rpx;
				height: 100rpx;
				font-size: 24rpx;
				color: #999999;
				margin: 5rpx 0 20rpx 30rpx;
				word-wrap:break-word
			}
			
			&__time{
				margin:  0 0 15rpx 30rpx;
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
</style>
