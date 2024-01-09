<template>
	<!-- 主页面的领养 -->
	<view>
		<!-- 搜索框静态样式 -->
		<view class="orange iconfont">
			<view class="orange__icon" v-for="(item,index) in adopts" :key="item.shuju.nickname" @click="handss(item)">
				<text v-if="index==0"> &#xe62f;</text>
			</view>

			<input class="search" type="text" placeholder="搜索你想要的" placeholder-style="font-size:14px" v-model="sous"
			confirm-type="search" @confirm="handss()"
			>
		</view>
		<view class="" v-if="flag">
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
			<view class="pet iconfont" v-for="(item,index) in adopts" :key="item.shuju.nickname"
				@click="details(index)">

				<!-- 加条件 类型是狗出现在 下标0 -->
				<view class="pet__dog" v-if="item.leix=='狗' && activeIndex==0 ">
					<image :src="item.tupian" mode="aspectFill" class="pet__dog__print"></image>
					<view class="">
						<view class="pet__dog__title">
							宠物昵称: {{item.shuju.nickname}}
							<image src="../../../static/image/img12.png" class="pet__dog__icon" mode=""></image>
						</view>

						<view class="pet__dog__describe">
							捡回来的时候还没出满月，我可以
							养到满月送人，希望善良家人收养
						</view>

						<view class="pet__dog__yimiao">
							疫苗: {{item.yimiao}}
						</view>

						<view class="pet__dog__quc">
							{{item.quc}}驱虫
						</view>

						<view class="pet__dog__jueyu">
							{{item.jueyu}}绝育
						</view>

					</view>
				</view>

				<!-- 加条件 类型是猫出现在1 -->
				<view class="pet__dog" v-if="item.leix=='猫' && activeIndex==1">
					<image :src="item.tupian" mode="aspectFill" class="pet__dog__print"></image>
					<view class="">
						<view class="pet__dog__title">
							宠物昵称: {{item.shuju.nickname}}
							<image src="../../../static/image/img12.png" class="pet__dog__icon" mode=""></image>
						</view>

						<view class="pet__dog__describe">
							捡回来的时候还没出满月，我可以
							养到满月送人，希望善良家人收养
						</view>

						<view class="pet__dog__yimiao">
							疫苗: {{item.yimiao}}
						</view>

						<view class="pet__dog__quc">
							{{item.quc}}驱虫
						</view>

						<view class="pet__dog__jueyu">
							{{item.jueyu}}绝育
						</view>

					</view>
				</view>
			</view>
		</view>


		<!-- 搜索的东西样式 -->
		<!-- <view class="boxx" v-if="!flag">
			<view class="pet__dog" v-for="(item,index) in results" :key="item.shuju.nickname">

				<image :src="item.tupian" mode="aspectFill" class="pet__dog__print"></image>
				<view class="">
					<view class="pet__dog__title">
						宠物昵称: {{item.shuju.nickname}}
						<image src="../../../static/image/img12.png" class="pet__dog__icon" mode=""></image>
					</view>

					<view class="pet__dog__describe">
						捡回来的时候还没出满月，我可以
						养到满月送人，希望善良家人收养
					</view>

					<view class="pet__dog__yimiao">
						疫苗: {{item.yimiao}}
					</view>

					<view class="pet__dog__quc">
						{{item.quc}}驱虫
					</view>

					<view class="pet__dog__jueyu">
						{{item.jueyu}}绝育
					</view>
				</view>
			</view>
		</view> -->
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
			// 调用vuex 里的发布数据
			const adopts = this.$store.state.adopt

			return {
				cate,
				activeIndex: 0,
				adopts,
				sous: '',
				results: [],
				flag: true

			}
		},
		methods: {
			// 导航栏滑动函数
			handleCategoryClick: function(index) {
				this.activeIndex = index
			},
			// 点击跳转详情页面  路由传参
			details: function(index) {
				uni.navigateTo({
					url: `./xiangq?index=` + index,
				})
			},
			// 点击搜索框
			handss(item) {
				console.log(item,'咖喱')
				let list = this.adopts
				let sous = this.sous
				let results = null
				if (sous) {
					results = list.filter(
						item => item.shuju.nickname.indexOf(sous) > -1
					)					
				}
				// 搜索成功符合条件的数据
				this.results = results
				console.log(this.results, '饭')
				this.flag = !this.flag
			}
		}
	}
</script>

<style lang="scss">
	.switchover {
		display: flex;
		justify-content: space-around;
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

	.pet {
		margin: 60rpx 0 0 24rpx;
		box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
		width: 700rpx;
		border-radius: 30rpx;

		&__dog {
			display: flex;
			margin-bottom: 40rpx;
			box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
			border-radius: 30rpx;

			&__print {
				width: 220rpx;
				height: 220rpx;
				border-radius: 20rpx;
				margin: 40rpx 0 0 24rpx;
			}

			&__title {
				margin-left: 30rpx;
				font-size: 25rpx;
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
				font-size: 18rpx;
				color: #999999;
				margin: 15rpx 0 10rpx 30rpx;
				word-wrap: break-word
			}

			&__yimiao {
				margin-left: 30rpx;
				width: 130rpx;
				height: 30rpx;
				background-color: #3893eb;
				border-radius: 18rpx;
				font-size: 15rpx;
				text-align: center;
				color: #ffffff;
				line-height: 30rpx;
				margin-bottom: 5rpx;
			}

			&__quc {
				margin-left: 30rpx;
				width: 120rpx;
				height: 30rpx;
				background-color: #59c8c9;
				border-radius: 18rpx;
				font-size: 15rpx;
				text-align: center;
				color: #ffffff;
				line-height: 30rpx;
				margin-bottom: 5rpx;
			}

			&__jueyu {
				margin: 0 0 5rpx 30rpx;
				width: 120rpx;
				height: 30rpx;
				border-radius: 18rpx;
				font-size: 15rpx;
				text-align: center;
				color: #ffffff;
				line-height: 30rpx;
				background-color: #ff799c;
				margin-bottom: 15rpx;
			}

		}
	}

	.orange {
		display: flex;
		margin: 50rpx auto 40rpx auto;
		width: 702rpx;
		height: 68rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.11);
		border-radius: 8rpx;

		&__icon {
			line-height: 68rpx;
			margin-left: 20rpx;
		}
	}

	.search {
		width: 702rpx;
		height: 68rpx;
		text-indent: 24rpx
	}
</style>
