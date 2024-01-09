<template>
	<!-- 我的页面 我的送养 -->
	
	<view>

		<!-- 从vuex 获取寻宠数据 并循环渲染 -->
		<view class="pet iconfont" v-for="(item,index) in issues" :key="item.shuju.nickname">

			<image :src="item.tupian" mode="aspectFill" class="pet__dog__print"></image>
			<view class="">
				<view class="pet__dog__title">
					朋友家的泰迪，1岁半，疫苗已打，由于朋
					友结婚了无法照看，希望有新主人~~
				</view>

				<view class="pet__dog__box">
					<view class="pet__dog__box__ly">
						已被张三领养
					</view>

					<view class="pet__dog__box__sc">
						&#xe616; 收藏：42
					</view>

					<view class="pet__dog__box__liu">
						&#xe64b; 留言：999
					</view>

				</view>
				
				<view class="shanc" @click="subtract(index)" >
					&#xe615;  删除
				</view>
				
			</view>

		</view>




	</view>
</template>

<script>
	export default {
		data() {
			// vuex 里的发布数据
			const issues = this.$store.state.adopt

			return {
				issues,
			}
		},
		methods: {
			// 删除
			subtract:function(index){
				console.log(index,'99666')
				this.issues.splice(index,1)
				uni.setStorageSync('yang',this.issues)
				
			}
		}
	}
</script>

<style lang="scss">
	.pet {
		display: flex;
		margin: 60rpx 0 0 24rpx;
		width: 702rpx;
		height: 240rpx;
		border-radius: 18rpx;
		box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
		
		&__dog__print {
			width: 170rpx;
			height: 170rpx;
			background-color: #ffffff;
			border-radius: 15rpx;
			margin: 24rpx 0 0 20rpx;
		}

		&__dog__title {
			width: 452rpx;
			height: 60rpx;
			font-size: 26rpx;
			color: #222222;
			margin: 24rpx 0 0 20rpx;
		}
		
		&__dog__box{
			display: flex;
			justify-content: space-between;
			margin-top: 50rpx;
			
			&__ly{
				font-size: 22rpx;
				color: #f96c0d;
				margin-left: 20rpx;
			}
			&__sc{
				font-size: 22rpx;
				color: #999999;
			}
			&__liu{
				font-size: 22rpx;
				color: #999999;
				
			}
		}
	}
	
	.shanc{
		color: red;
		font-size: 25rpx;
		margin: 40rpx 0 0 400rpx;
	}
	
	
	
	
</style>
