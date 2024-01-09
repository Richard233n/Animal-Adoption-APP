<template>
	<!-- 发布主页面 -->
	<view class="Bigbox">
		<view class="iconfont  cross" @click="Shutdown">
			&#xe632;
		</view>

		<view class="release">
			<view class="release__box" v-for="(item,index) in send" :key="item.url" :class="{bbb:logs==index}"
				@click="cut(index)">
				<image :src="item.url" mode="" class="release__icon"></image>
			</view>
		</view>

		<view class="issue">
			<view class="issue__title">
				发布送养
			</view>
			<view class="issue__title">
				发布寻宠
			</view>
			<view class="issue__title">
				发布捐赠
			</view>
		</view>

		<view class="grays">
		</view>

		<!--发布送养  -->
		<view class="adoption" v-if="logs==0">
			<view class="adoption__local">
				<view class="adoption__local__plus iconfont" @click="getImg">
					&#xe727;
					<image :src="ttt" mode="aspectFill" class="picturess"></image>
				</view>


				<view class="adoption__local__add">
					添加照片
				</view>
			</view>

			<view class="grayss">
			</view>

			<view class="">
				<view class="nickname">
					<text class="nickname__name">昵称:</text>
					<input type="text" value="" placeholder="输入宠物名称" class="nickname__import"
						v-model="results.nickname" />
				</view>

			<!-- 	<view class="species">
					<text class="species__name">种类:</text>
					<input type="text" value="" placeholder="输入种类列如猫" class="species__import" v-model="results.kind" />
				</view> -->

				<view class="age">
					<text class="age__name">年龄:</text>
					<input type="text" value="" placeholder="输入年龄" class="age__import" v-model="results.age" />
				</view>

				<view class="sex">
					<text class="sex__name">公母:</text>
					<uni-data-checkbox v-model="value" :localdata="range" selectedColor="orange" class="sex__text">
					</uni-data-checkbox>
				</view>

				<view class="sex">
					<text class="sex__name">是否注射疫苗:</text>
					<uni-data-checkbox v-model="valu" :localdata="yimiao" selectedColor="orange" class="sex__text">
					</uni-data-checkbox>
				</view>

				<view class="fertility">
					<text class="fertility__name">是否绝育:</text>
					<uni-data-checkbox v-model="val" :localdata="jueyu" selectedColor="orange" class="fertility__text">
					</uni-data-checkbox>
				</view>

				<view class="fertility">
					<text class="fertility__name">是否驱虫:</text>
					<uni-data-checkbox v-model="va" :localdata="jueyu" selectedColor="orange" class="fertility__text">
					</uni-data-checkbox>
				</view>

				<view class="free">
					<text class="free__name">是否免费:</text>
					<uni-data-checkbox v-model="vv" :localdata="mianfei" selectedColor="orange" class="free__text">
					</uni-data-checkbox>
				</view>

				<view class="free">
					<text class="free__name">宠物类型:</text>
					<uni-data-checkbox v-model="dig" :localdata="leix" selectedColor="orange" class="free__text">
					</uni-data-checkbox>
				</view>


			</view>

			<view class="graysss">
			</view>



			<view class="">
				<view class="nickname">
					<text class="nickname__name">姓名:</text>
					<input type="text" value="" placeholder="输入你的姓名" class="nickname__import" v-model="results.name" />
				</view>

				<view class="species">
					<text class="species__name">手机号:</text>
					<input type="text" value="" placeholder="输入你的手机号" class="species__import" v-model="results.shouj" />
				</view>

				<view class="age">
					<text class="age__name">微信:</text>
					<input type="text" value="" placeholder="输入你的微信号" class="age__import" v-model="results.weix" />
				</view>

				<view class="age">
					<text class="age__name">城市名称:</text>
					<input type="text" value="" placeholder="输入你所在的城市" class="age__import" v-model="results.city" />
				</view>

				<view class="age">
					<text class="age__name">详细地址:</text>
					<input type="text" value="" placeholder="输入详细地址" class="age__import" v-model="results.site" />
				</view>


				<view class="fertility">
					<text class="fertility__name">是否显示电话号码:</text>
					<uni-data-checkbox v-model="call" :localdata="phone" selectedColor="orange" class="fertility__text">
					</uni-data-checkbox>
				</view>

				<view class="fertility">
					<text class="fertility__name">是否显示微信号码:</text>
					<uni-data-checkbox v-model="we" :localdata="weChat" selectedColor="orange" class="fertility__text">
					</uni-data-checkbox>
				</view>
			</view>

			<view class="graysss">
			</view>

			<view class="conditions">
				<view class="conditions__text">
					领养条件
				</view>
				<view>
					<!-- 文件选择器插件 -->
					<uni-data-checkbox multiple v-model="multi" :localdata="conditions" selectedColor="orange"
						class="conditions__choose">
					</uni-data-checkbox>
				</view>
			</view>
			<view class="graysss">
			</view>
			<view class="buttn" @click="publish">
				发布送养
			</view>
		</view>

		<forpet v-if="logs==1"></forpet>
		<donate v-if="logs==2"></donate>



	</view>
</template>

<script>
	import forpet from "../../components/forpet.vue"
	import donate from "../../components/donate.vue"
	export default {
		components: {
			forpet,
			donate
		},
		data() {
			const results = {
				nickname: '',
				kind: "",
				age: "",
				name: "",
				shouj: "",
				weix: "",
				city: "",
				site: "",
			}
			var extent =  this.$store.state.adopts.length


			return {
				logs: "0",
				send: [{
						url: "/static/image/爱心领养.png"
					},
					{
						url: "/static/image/爪子.png"
					},
					{
						url: "/static/image/社会捐助接收站点.png"
					}
				],
				value: 0,
				valu: 0,
				val: 0,
				va: 0,
				vv: 0,
				call: 0,
				we: 0,
				dig: 0,
				range: [{
					"value": 0,
					"text": "公"
				}, {
					"value": 1,
					"text": "母"
				}],
				yimiao: [{
					"value": 0,
					"text": "已打"
				}, {
					"value": 1,
					"text": "未打"
				}],
				jueyu: [{
					"value": 0,
					"text": "已绝育"
				}, {
					"value": 1,
					"text": "未绝育"
				}],
				mianfei: [{
					"value": 0,
					"text": "免费"
				}, {
					"value": 1,
					"text": "收费"
				}, {
					"value": 2,
					"text": "收押金"
				}],
				phone: [{
					"value": 0,
					"text": "是"
				}, {
					"value": 1,
					"text": "否"
				}, ],
				weChat: [{
					"value": 0,
					"text": "是"
				}, {
					"value": 1,
					"text": "否"
				}, ],
				multi: [0, 1],
				conditions: [{
					"value": 0,
					"text": "仅限同城"
				}, {
					"value": 1,
					"text": "按时打疫苗"
				}, {
					"value": 2,
					"text": "同意适龄绝育"
				}, {
					"value": 3,
					"text": "不得遗弃、转让、贩卖、繁殖、虐待"
				}, {
					"value": 4,
					"text": "有防盗门，必须封网"
				}, {
					"value": 5,
					"text": "接受领养前家访，领养后回访"
				}, {
					"value": 6,
					"text": "家庭成员全员同意"
				}, {
					"value": 7,
					"text": "工作稳定，有一定经济基础"
				}, {
					"value": 8,
					"text": "文明养宠，出门栓绳，科学喂养"
				}, {
					"value": 9,
					"text": "签订领养协议"
				}, {
					"value": 10,
					"text": "办理狗证"
				}, {
					"value": 11,
					"text": "其他"
				}],
				leix: [{
						"value": 0,
						"text": "狗"
					},
					{
						"value": 1,
						"text": "猫"
					},
					{
						"value": 2,
						"text": "其他"
					}
				],

				results,
				ttt: '',
				extent,

			}
		},
		methods: {
			// 模拟弹窗
			Shutdown: function() {
				uni.showModal({
					title: '提示',
					content: '确定离开本页面吗',
					success: function(res) {
						uni.switchTab({
							url:"/pages/home/home",
							// 在登录页进行操作，这里要注意一点，
							// 跳转到tabBar配置的页面，需要用uni.switchTab，
							// 若只是普通页面之间的跳转，或者tab野跳转到普通页面，
							// 只需要用uni.navigateTo
						})
					}
				});
			},
			// 点击边框颜色切换
			cut: function(index) {
				this.logs = index
			},
			// 调取本地图片
			getImg: function() {
				let _self = this
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					success: function(res) {
						var reader = new FileReader()
						reader.readAsDataURL(res.tempFiles[0])
						reader.onload = () => {
							console.log(reader.result, '什么')
							_self.ttt = reader.result
							uni.setStorageSync('tp', _self.ttt)
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
			// 点击发布事件时  将本页的数据 存入缓存
			publish: function() {
				const sixe = this.range[this.value].text
				const yimiao = this.yimiao[this.valu].text
				const jueyu = this.jueyu[this.val].text
				const quc = this.jueyu[this.va].text
				const mianfei = this.mianfei[this.vv].text
				const leix = this.leix[this.dig].text
				const tupian = this.ttt
				const shuju = this.results
				// 缓存加入id唯一标识 数组的长度加1
				shuju.id = this.extent + 1

				const select = []
				for (let i in this.multi) {
					const aaa = this.multi[i]
					select.push(this.conditions[aaa].text)
				}
				const check = false
				// vuex 里的同步方法 函数名要一致
				this.$store.commit('publish', {
					sixe,
					yimiao,
					jueyu,
					quc,
					mianfei,
					tupian,
					shuju,
					select,
					leix,
					check
				})
				// 点击按钮之后刷新本页面 ，先保留此方法
				setTimeout(() => {
					this.$router.go(0)
				}, 1000)

			}
		}
	}
</script>

<style lang="scss">
	.Bigbox {
		position: relative;
	}


	.cross {
		color: #999999;
		font-size: 30px;
		margin-top: 64rpx;
		margin-left: 26rpx;
	}

	.release {
		display: flex;
		justify-content: space-around;
		margin-top: 54rpx;

		&__box {
			width: 220rpx;
			height: 130rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.06);
			border-radius: 12rpx;
			position: relative;
		}

		&__icon {
			width: 60rpx;
			height: 60rpx;
			position: absolute;
			left: 70rpx;
			top: 28rpx;
		}
	}

	.bbb {
		border: 1rpx solid #f98912;
	}

	.issue {
		display: flex;
		justify-content: space-around;
		margin-top: 42rpx;

		&__title {
			width: 4.4375rem;
			height: 28rpx;
			font-size: 28rpx;
			letter-spacing: 0rpx;
			color: #666666;
		}
	}

	.grays {
		width: 100%;
		height: 20rpx;
		background-color: #f8f8f8;
		margin-top: 40rpx;
		margin-bottom: 28rpx;
	}

	.grayss {
		width: 100%;
		height: 20rpx;
		background-color: #f8f8f8;
		margin-top: 80rpx;
	}

	.graysss {
		width: 100%;
		height: 20rpx;
		background-color: #f8f8f8;
	}

	.adoption {

		&__local {
			width: 156rpx;
			height: 154rpx;
			background-color: #f8f8f8;
			border-radius: 12rpx;
			margin-left: 26rpx;

			&__plus {
				font-size: 90rpx;
				color: #d4d4d4;
				text-align: center;
				line-height: 154rpx;
				margin-bottom: 26rpx;
			}

			&__add {
				color: #666666;
				margin-left: 35rpx;
				font-size: 28rpx;
				position: relative;
				top: -190rpx;
			}
		}
	}

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
			width: 178rpx;
			height: 30rpx;
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #999999;
			position: absolute;
			top: 32rpx;
			left: 156px;
		}
	}

	.species {
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
			left: 155px;
		}
	}

	.age {
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
			left: 152px;
		}
	}


	.sex {
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
			left: 156px
		}
	}

	.fertility {
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
			left: 157px
		}
	}

	.free {
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
			left: 138px
		}
	}

	.conditions {
		margin-left: 24rpx;

		&__text {
			width: 120rpx;
			height: 30rpx;
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #666666;
			margin-top: 42rpx;
			margin-bottom: 34rpx;
		}

		&__choose {
			margin-bottom: 34rpx;
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

	.picturess {
		width: 156rpx;
		height: 154rpx;
		border-radius: 10rpx;
		position: relative;
		top: -157rpx;
		left: 155px;

	}
</style>
