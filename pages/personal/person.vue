<template>
	<!-- 个人资料 页面 -->
	<view>

		<view class="nickname">
			<text class="nickname__name">昵称:</text>
			<input type="text" value="" placeholder="请输入昵称" class="nickname__shur" />
		</view>

		<view class="nickname">
			<text class="nickname__name">性别:</text>
			<input type="text" value="" placeholder="♂/♀" class="nickname__shur" />
		</view>

		<view class="nickname">
			<text class="nickname__name">生日:</text>
			<picker mode="date" :value="date" @change="dateChange" :start="startDate" end="2022-01-01"
				class="nickname__shur">
				<view>{{date}}</view>
			</picker>
		</view>

		<view class="nickname">
			<text class="nickname__name">所在城市:</text>
			<input type="text" value="" placeholder="输入所在城市" class="nickname__shur" />
		</view>

		<view class="gray">
		</view>


		<view class="realName">
			<text class="realName__text">实名认证</text>

			<view class="iconfont  realName__card">
				<view class="realName__card__box1">
					<view class="realName__card__icon">&#xe602;</view>
					<image :src="images" mode="" class="realName__card__just"></image>
					<button type="default" class="realName__card__front" @click="camera">正面</button>
				</view>
				<view class="realName__card__box1">
					<text class="realName__card__icon">&#xe603;</text>
					<image :src="source" mode="" class="realName__card__just"></image>
					<button type="default" class="realName__card__front" @click="contrary">反面</button>
				</view>
			</view>

			<view class="realName__approve">
				<view class="">
					1.实名认证后将获得实名认证标识
				</view>
				<view class="">
					2.实名认证后，发布的送养，寻宠等信息无需等待人工审核，将实时显示
				</view>
				<view class="">
					3.实名认证有利于与其他用户建立信任关系
				</view>
				<view class="">
					4.实名认证将更好地规范领养双方行为，所发布
					信息更具参考价
				</view>
			</view>
		</view>
		
		<button type="default" class="refer">提交</button>





	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true,
			})

			return {
				date: currentDate,
				currentDate,
				startDate: "1990-01-01",
				images: '../../static/image/idcard1.png',
				source: '../../static/image/idcard2.png',
			}
		},
		methods: {
			// 事件会在 日期 改变时发生。
			dateChange: function(e) {
				this.date = e.target.value
				console.log(this.date, 'll')

			},
			// 方法可返回月份的某一天。
			getDate(e) {
				console.log(e, 'pp')
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 点击身份证正面
			camera: function() {
				//this 指向 注意 
				let _self = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'], //从相册选择
					success: function(res) {
						_self.images = res.tempFilePaths[0],
							console.log(_self.images,'上传')
					}
				})
			},
			// 点击反面
			contrary: function() {
				let self = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'], //从相册选择
					success: function(res) {
						self.source = res.tempFilePaths[0],
							console.log(self.source)
					}
				})
			}
		},

	}
</script>

<style lang="scss">
	.nickname {
		display: flex;
		height: 100rpx;
		width: 100%;
		border-bottom: solid 2rpx #e6e6e6;
		position: relative;
		top: 70rpx;

		&__name {
			font-size: 30rpx;
			color: black;
			line-height: 100rpx;
			padding-left: 22rpx;
		}

		&__shur {
			width: 194rpx;
			height: 30rpx;
			font-size: 28rpx;
			color: #999999;
			position: absolute;
			top: 32rpx;
			left: 512rpx;
		}
	}

	.gray {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
		margin-top: 68rpx;
	}

	.realName {
		margin-top: 34rpx;
		&__text {
			font-size: 34rpx;
			color: #444444;
			margin-left: 24rpx;
		}

		&__card {
			// display: flex;
			// justify-content: space-around;
			margin-top: 34rpx;

			&__box1 {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
			}

			&__icon {
				border-radius: 10rpx;
				font-size: 200rpx;
				background-image: linear-gradient(180deg,
						#fbc720 0%,
						#f83f02 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			&__just {
				width: 300rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}

			&__front {
				width: 300rpx;
				height: 56rpx;
				background-color: #f8a223;
				color: #FFFFFF;
				line-height: 56rpx;
				font-size: 24rpx;
				margin-left: 40rpx;
				margin-bottom: 24rpx;
			}
		}
		
		&__approve{
			width: 614rpx;
			height: 296rpx;
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #999999;
			margin-left: 24rpx;
		}
	}
	.refer{
		width: 704rpx;
		height: 84rpx;
		background-image:linear-gradient( to left,red,orange);
		border-radius: 8rpx;
		color: #FFFFFF;
	}
	
	
</style>
