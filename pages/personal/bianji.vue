<template>
	<!-- 编辑地址页面 -->
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

		<button class="save" hover-class='down' hover-stay-time='1000' @click="amend">确认修改</button>


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
			}
			return {
				site,
				digitid: "",
			}
		},
		methods: {
			// 编辑地址
			amend: function() {

				const addre = uni.getStorageSync('site')
				const id = this.digitid
				console.log(addre[id], '湖')
				console.log(this.site.name, '花湖')
				addre[id].name = this.site.name
				addre[id].phone = this.site.phone
				addre[id].city = this.site.city
				addre[id].street = this.site.street
				uni.setStorageSync('site', addre)
			}



		},

		// 接收我的地址页面传过来的参数
		onLoad: function(option) {
			this.digitid = JSON.parse(decodeURIComponent(option.item))
			console.log(this.digitid, '数据')
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
		background-image: linear-gradient(to left, red);
		border-radius: 8rpx;
		color: #ffffff;
		margin-top: 500rpx;
	}

	.down {
		background-color: #CD853F;
	}
</style>
