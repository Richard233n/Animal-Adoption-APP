<template>
	<!-- 发布里的  发布寻宠写成组件 -->
	<view>

		<view class="forpet">
			<view class="side">
				<view class="plus iconfont" @click="getImg">
					&#xe727;
				</view>
				<view class="">
					<image :src="quarry" mode="aspectFill" class="release"></image>
				</view>

			</view>



			<view class="forpet__photo">宠物照片</view>
			<!-- 灰色栏 -->
			<view class="grays">
			</view>


			<view class="forpet__sex">
				<text class="forpet__sex__name">发布类型:</text>
				<uni-data-checkbox v-model="value" :localdata="range" selectedColor="orange" class="forpet__sex__text">
				</uni-data-checkbox>
			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">昵称:</text>
				<input type="text" value="" placeholder="输入宠物名称" class="forpet__gongg__shur"
					v-model="mation.nickname" />

			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">城市名称:</text>
				<input type="text" value="" placeholder="请选择城市" class="forpet__gongg__shur" v-model="mation.city" />

			</view>


			<view class="forpet__gongg">
				<text class="forpet__gongg__name">丢失时间:</text>
				<input type="text" value="" placeholder="请选择时间" class="forpet__gongg__shur" v-model="mation.time" />
			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">丢失地址:</text>
				<input type="text" value="" placeholder="请输入详细地址" class="forpet__gongg__shur" v-model="mation.mag" />
			</view>


			<view class="forpet__valid">
				<text class="forpet__valid__name">有效期:</text>
				<uni-data-checkbox v-model="valu" :localdata="choice" selectedColor="orange"
					class="forpet__valid__text">
				</uni-data-checkbox>
			</view>

			<view class="forpet__valid">
				<text class="forpet__valid__name">种类:</text>
				<uni-data-checkbox v-model="val" :localdata="kind" selectedColor="orange" class="forpet__valid__text">
				</uni-data-checkbox>
			</view>

			<view class="forpet__pet">
				<text class="forpet__pet__name">宠物描述:</text>
				<textarea placeholder="请输入宠物描述..." class="forpet__pet__describe" v-model="mation.describe"></textarea>
			</view>

			<view class="grays">
			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">姓名:</text>
				<input type="text" value="" placeholder="输入你的姓名" class="forpet__gongg__shur" v-model="mation.name" />
			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">手机号:</text>
				<input type="text" value="" placeholder="输入你手机号" class="forpet__gongg__shur" v-model="mation.shouj" />
			</view>

			<view class="forpet__gongg">
				<text class="forpet__gongg__name">微信:</text>
				<input type="text" value="" placeholder="输入你的微信" class="forpet__gongg__shur" v-model="mation.weix" />
			</view>

			<view class="grays">
			</view>

			<button type="default" class="buttn" @click="forpet" hover-class='down' hover-stay-time='1000'>发布寻宠</button>

		</view>

	</view>




</template>

<script>
	export default {
		name: "forpet",
		data() {

			const mation = {
				nickname: '',
				city: '',
				time: '',
				mag: '',
				describe: '',
				name: '',
				shouj: '',
				weix: '',
			}
			return {
				value: 0,
				range: [{
					"value": 0,
					"text": "丢失"
				}, {
					"value": 1,
					"text": "捡到"
				}],

				valu: 0,
				choice: [{
					"value": 0,
					"text": "10"
				}, {
					"value": 1,
					"text": "20"
				}, {
					"value": 2,
					"text": "30"
				}],

				val: 0,
				kind: [{
					"value": 0,
					"text": "狗狗"
				}, {
					"value": 1,
					"text": "猫咪"
				}, {
					"value": 2,
					"text": "其他"
				}],
				mation,
				quarry: ""
			};
		},

		methods: {
			// 点击发布寻宠按钮
			forpet: function() {
				const type = this.range[this.value].text
				const choice = this.choice[this.valu].text
				const kind = this.kind[this.val].text
				const derivation = this.quarry
				const write = this.mation
				// console.log(kind, '天')
				// console.log(this.mation, '晴天')
				// // console.log(this.quarry,'出处')

				// vuex 里的同步方法 函数名要一致
				this.$store.commit('forpet', {
					type,
					choice,
					kind,
					derivation,
					write
				})

			},
			// 文件上传插件 获取上传图片的临时地址
			// select(e) {

			// 	this.quarry=e.tempFilePaths[0]
			// 	console.log(this.quarry, '完成');
			// }

			// 调取本地图片
			getImg: function() {
				let _self = this
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					success: function(res) {
						//  _self.ttt=res.tempFilePaths[0]
						// console.log(res.tempFilePaths[0], '猴嘴')

						// blob 怎么转成base64格式代码
						var reader = new FileReader()
						reader.readAsDataURL(res.tempFiles[0])
						reader.onload = () => {
							console.log(reader.result, '什么')
							_self.quarry = reader.result
						}

						// 预览图片
						uni.previewImage({
							urls: res.tempFilePaths,
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data
										.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						});

					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.grays {
		width: 100%;
		height: 20rpx;
		background-color: #f8f8f8;
		margin-top: 34rpx;
	}



	.forpet {
		&__shangc {
			margin-left: 22rpx;
		}

		&__photo {
			margin-top: 26rpx;
			margin-left: 42rpx;
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #666666;
		}

		&__gongg {
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

			&__shur {
				width: 178rpx;
				height: 30rpx;
				font-size: 30rpx;
				letter-spacing: 0rpx;
				color: #999999;
				position: absolute;
				top: 32rpx;
				left: 466rpx;
			}
		}

		&__sex {
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

			&__text {
				height: 30rpx;
				font-size: 30rpx;
				letter-spacing: 0rpx;
				color: #999999;
				position: absolute;
				top: 32rpx;
				left: 12rem,
			}
		}

		&__valid {
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

			&__text {
				height: 30rpx;
				font-size: 30rpx;
				letter-spacing: 0rpx;
				color: #999999;
				position: absolute;
				top: 32rpx;
				left: 8rem,
			}
		}

		&__pet {
			&__name {
				font-size: 30rpx;
				letter-spacing: 0rpx;
				color: #666666;
				line-height: 100rpx;
				padding-left: 22rpx;
			}

			&__describe {
				width: 147rem;
				height: 196rpx;
				background-color: #f8f8f8;
				margin-left: 22rpx;
			}
		}
	}

	.buttn {
		background-color: #f99214;
		border-radius: 8rpx;
		line-height: 84rpx;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		width: 704rpx;
		height: 84rpx;
		margin: 0 auto;
		margin-top: 44rpx;
	}

	.down {
		background-color: #CD853F;
	}


	.plus {
		font-size: 90rpx;
		color: #d4d4d4;
		text-align: center;
		line-height: 154rpx;
		margin-bottom: 26rpx;
		width: 156rpx;
		height: 154rpx;
		background-color: #f8f8f8;
		border-radius: 12rpx;
		margin-left: 26rpx;

	}

	.release {
		width: 156rpx;
		height: 154rpx;
		margin-left: 26rpx;

	}

	.side {
		display: flex;
	}
</style>
