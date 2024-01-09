<template>
	<!-- 发布里的 发布捐赠写成组件 -->
	<view>
		<view class="caption">
			捐赠物资类型
		</view>
		<!-- 点击切换颜色 -->
		<view class="cate">
			<view class="cate__title" v-for="(item,index) in cate" :key='item.name' :class="{food:tag==index}"
				@click="alter(index)">
				{{item.name}}
			</view>
		</view>
		<!-- 灰色栏 -->
		<view class="grays">
		</view>
		<view class="supplies">
			<text class="supplies__name">物资数量:</text>
			<textarea placeholder="例如：500斤狗粮/50罐罐头/300盒..." class="supplies__miao" v-model="result.wuzi"></textarea>
		</view>
		<view class="supplies">
			<text class="supplies__name">物资名称:</text>
			<textarea placeholder="例如：迈吉客全价全期粮" class="supplies__miao" v-model="result.goods"></textarea>
		</view>
		<view class="validity">
			有效期
		</view>
		<view class="life">
			<view class="life__name" v-for="(item,index) in times" :key='item.name' :class="{snacks:mark==index}"
				@click="life(index)">
				{{item.time}}
			</view>
		</view>
		<view class="price">
			<text class="price__name">预估价格（元）:</text>
			<input type="text" value="" placeholder="请输入预估价格" class="price__shur" v-model="result.price" />
		</view>

		<!-- 文件上传插件 -->
		<uni-file-picker v-model="imageValue" file-mediatype="image" mode="grid" file-extname="png,jpg" :limit="2"
			class='upload' :image-styles="imageStyles" />

		<view class="entity">物资实物照片</view>

		<view class="price">
			<text class="price__name">捐赠方名称:</text>
			<input type="text" value="" placeholder="请输入名称" class="price__shur" v-model="result.giving" />
		</view>

		<view class="supplies">
			<text class="supplies__name">一句话的简介:</text>
			<textarea placeholder="请输入简介" class="supplies__miao" v-model="result.abstract"></textarea>
		</view>
		<view class="grayss">
		</view>

		<view class="price">
			<text class="price__name">姓名:</text>
			<input type="text" value="" placeholder="请输入姓名" class="price__shur" v-model="result.name" />
		</view>


		<view class="price">
			<text class="price__name">手机号:</text>
			<input type="text" value="" placeholder="请输入手机号" class="price__shur" v-model="result.shouj" />
		</view>

		<view class="price">
			<text class="price__name">微信:</text>
			<input type="text" value="" placeholder="请输入微信" class="price__shur" v-model="result.weix" />
		</view>


		<view class="buttn" @click="memory()">
			发布捐赠
		</view>
	</view>
</template>

<script>
	export default {
		name: "donate",
		data() {
			const cate = [{
					name: "宠物"
				},
				{
					name: "零食"
				},
				{
					name: "用品"
				},
				{
					name: "药品"
				},
				{
					name: '其他'
				}
			]
			const times = [{
					time: "24个月"
				},
				{
					time: "18个月"
				},
				{
					time: "12个月"
				},
				{
					time: "6个月"
				},
				{
					time: "3个月"
				},
				{
					time: "1个月"
				},
				{
					time: "无有效期"
				},
			]

			const result = {
				wuzi: '',
				goods: '',
				price: '',
				giving: '',
				abstract: '',
				name: '',
				shouj: '',
				weix: ''
			}

			return {
				cate,
				tag: 0,
				times,
				mark: 1,
				imageValue: [],
				imageStyles: {
					width: 100,
					height: 100,
					border: {
						color: " #d4d4d4",
						width: 2,
						style: 'solid',
						radius: '2px'
					}
				},
				result
			}
		},
		methods: {
			alter: function(index) {
				this.tag = index
			},

			life: function(index) {
				this.mark = index
			},

			// 点击事件随后把数据存入缓存
			memory: function() {
				const genre = this.cate[this.tag].name
				const time = this.times[this.mark].time
				console.log(this.result, '前端')


			}




		}

	}
</script>

<style lang="scss">
	.caption {
		width: 180rpx;
		height: 30rpx;
		font-size: 30rpx;
		color: #666666;
		margin-left: 22rpx;
		margin-bottom: 24rpx;
	}

	.cate {
		display: flex;
		justify-content: space-around;
		margin-bottom: 42rpx;

		&__title {
			width: 120rpx;
			height: 60rpx;
			background-color: #e9e9e9;
			border-radius: 28rpx;
			text-align: center;
			line-height: 60rpx;
			color: #999999;
		}

	}

	.food {
		background-color: #f98912;
		color: #ffffff;
	}

	.grays {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
	}

	.grayss {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
		margin-top: 40rpx;
	}


	.supplies {
		&__name {
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #666666;
			line-height: 100rpx;
			padding-left: 22rpx;
		}

		&__miao {
			width: 702rpx;
			height: 196rpx;
			background-color: #f8f8f8;
			margin-left: 22rpx;
			padding-top: 42rpx;
			padding-left: 12rpx;
		}
	}

	.validity {
		font-size: 30rpx;
		color: #666666;
		margin-left: 22rpx;
		margin-top: 42rpx;
		margin-bottom: 42rpx;
	}


	.life {
		display: flex;
		flex-wrap: wrap;

		&__name {
			width: 130rpx;
			height: 60rpx;
			background-color: #e9e9e9;
			border-radius: 28rpx;
			text-align: center;
			line-height: 60rpx;
			color: #999999;
			margin: 0rpx 22rpx 34rpx 22rpx;

		}
	}

	.snacks {
		background-color: #f98912;
		color: #ffffff;

	}



	.price {
		display: flex;
		height: 100rpx;
		width: 100%;
		border-bottom: solid 2rpx #e6e6e6;
		border-top: solid 2rpx #e6e6e6;
		position: relative;

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

	.upload {
		margin: 32rpx 0 0 22rpx
	}

	.entity {
		font-size: 30rpx;
		color: #666666;
		margin: 26rpx 0 34rpx 22rpx;
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
</style>
