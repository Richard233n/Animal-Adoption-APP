<template>
	<!-- 新建地址页面 -->
	<view>

		<view class="nickname">
			<text class="nickname__name">姓名:</text>
			<input type="text" value="" placeholder="输入你的姓名" class="nickname__import" v-model="site.name" />
		</view>

		<view class="nickname">
			<text class="nickname__name">手机号:</text>
			<input type="text" value="" placeholder="输入你的手机号" class="nickname__import" v-model="site.phone" />
		</view>

		<view class="nickname">
			<text class="nickname__name">城市:</text>
			<input type="text" value="" placeholder="输入你所在的城市" class="nickname__import" v-model="site.city" />
		</view>

		<view class="nickname">
			<text class="nickname__name">街道:</text>
			<input type="text" value="" placeholder="请输入您的详细地址" class="nickname__import" v-model="site.street" />
		</view>

		<view class="bedeck">

		</view>

		<button type="default" class="save" @click="keep" hover-class='down' hover-stay-time='1000'>保存地址</button>


	</view>
</template>

<script>
	export default {
		data() {
			const site = {
				name: "",
				phone: "",
				city: "",
				street: "",
				check:false,
				id:'',
			}
			return {
				site,
				
			}
		},
		methods: {
			keep: function() {
				// 首先 去本地缓存 或者空数组  把双向绑定的数据推到数组里 在把数组缓存进去
				const bb = uni.getStorageSync('site') || []
				// console.log(bb, '看看')
				bb.push(this.site)
				// 缓存里加入一个唯一的id标识
				this.site.id=bb.length+0
				if(this.site.name!=''&&this.site.phone!=''&&this.site.city!=''){
					uni.setStorageSync('site', bb)
				}else{
					uni.showToast({
					    title: '输入栏不能为空',
					    duration: 2000,
						icon:"error"
					});
				}
	
			}
		}
	}
</script>

<style lang="scss">
	.nickname {
		display: flex;
		height: 100rpx;
		width: 100%;
		border-bottom: solid 2rpx #e6e6e6;
		position: relative;

		&__name {
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #666666;
			line-height: 100rpx;
			padding-left: 22rpx;
		}

		&__import {
			height: 30rpx;
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #999999;
			position: absolute;
			top: 32rpx;
			left: 266rpx;
		}
	}

	.bedeck {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
	}


	.save {
		width: 704rpx;
		height: 84rpx;
		background-color: #f99214;
		background-image: linear-gradient(to left,red);
		border-radius: 8rpx;
		color: #ffffff;
		margin-top: 500rpx;
	}

	.down {
		background-color: #CD853F;
	}
</style>
