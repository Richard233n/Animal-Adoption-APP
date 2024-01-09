<template>
	<!-- 主页面 -->
	<view>
		<!-- 导航栏 -->
		<view class="iconfont title ">
			<text class="city">
				{{cityname.name}}
			</text>
			<text class="dizhi" @click="address()">&#xe640;</text>
			
			<input class="navigation" placeholder="搜索" v-model="listing" confirm-type="search" @confirm="handss()" />
			<text class="ssuo" @click="handss(item)" v-for="(item,index) in adopts" :key="item.shuju.nickname"
				v-show="index==0">
				&#xe62f;<!-- 搜索图标 -->
			</text>
			
			
		</view>

		<view class="" v-if="flag">

			<!-- 轮播图 -->
			<view class="page">
				<image src="../../static/image/img2.jpg" class="carousel"></image>
			</view>
			<!-- 黑名单图标等 -->
			<view class="blacklist">
				<view @click="skip">
					<image src="../../static/image/img5.png" class="dog"> </image>
					<view class="shower">
						黑名单
					</view>
				</view>
				<view class="" @click="adop">
					<image src="../../static/image/img7.png" class="dog"> </image>
					<view class="shower">
						领 养
					</view>
				</view>
				<view class="" @click="lookfor">
					<image src="../../static/image/img3.png" class="dog"></image>
					<view class="shower">
						寻 宠
					</view>
				</view>
				<view class="" @click="topic">
					<image src="../../static/image/img6.png" class="dog"></image>
					<view class="shower">
						话 题
					</view>
				</view>
				<view class="" @click="shower">
					<image src="../../static/image/img4.png" class="dog"></image>
					<view class="shower">
						洗 澡
					</view>
				</view>
			</view>

			<view class="box">
			</view>

			<view class="nutrition">
				<text class="nurture">营养品</text>
			</view>
			<!-- 营养品 -->
			<view class="reddog">
				<view class="">
					<image src="../../static/image/img8.jpg" class="rabbit"></image>
				</view>
				<view class="zhizhu">
					<view class="bunny">
						RedDog红狗营养膏12...
					</view>
					<text class="liulang">
						义卖品 销售额10%用于流浪动物....
					</text>
					<view class="look">
						查看详情
					</view>
				</view>
			</view>

			<!-- 导航的切换 -->
			<view class="tiaojian">
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
							<image src="../../static/image/dog_img.png" class="pet__dog__icon" mode=""></image>
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
							<image src="../../static/image/cat_img.png" class="pet__dog__icon" mode=""></image>
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
		<view class="boxx" v-if="!flag">
			<view class="pet__dog" v-for="(item,index) in results" :key="item.shuju.nickname">

				<image :src="item.image" mode="aspectFill" class="pet__dog__print"></image>
				<view class="">
					<view class="pet__dog__title">
						宠物昵称: {{item.shuju.nickname}}
						<image src="../../static/image/img12.png" class="pet__dog__icon" mode=""></image>
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

</template>

<script>
	export default {

		data() {
			let cityname = {}
			let results = []
			// 调用vuex 里的发布数据''
			let adopts = this.$store.state.adopts

			return {
				activeIndex: 0,
				listing: "",
				results,
				flag: true,
				cate: [{
						name: "狗狗",
					},
					{
						name: "猫咪",

					},
					{
						name: "其他",
					},
					{
						name: "筛选",

					}
				],
				cityname,
				adopts

			}

		},

		methods: {
			// 导航栏滑动函数
			handleCategoryClick: function(index) {
				this.activeIndex = index
			},

			// 地图定位函数
			address: function() {
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						// 存入本地缓存
						uni.setStorage({
							key: 'getAddress',
							data: res,
						});
					}
				});
			},
			// 点击跳转  加传参
			urlTap: function(item, index) {
				console.log(item, 'dddd')
				uni.navigateTo({
					url: `/pages/home/Animal_item?id=${index}`
				});
			},


			// 搜索功能
			handss: function(item) {
				var List = this.adopts
				var listing = this.listing
				let results = null
				if (listing) {
					results = List.filter(
						item => item.shuju.nickname.indexOf(listing) > -1
					)
				} else
				if (listing == '') {
					uni.showToast({
						title: '搜索框不能为空',
						duration: 2000,
						icon: "error",
					});
				}
				// 搜索成功符合条件的数据
				this.results = results

				this.flag = !this.flag
			},


			// 点击跳转黑名单
			skip: function() {
				uni.navigateTo({
					url: '/pages/banner_arr/BlackList/BlackList'
				});
			},
			// 点击跳转寻宠
			lookfor: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/Found/Found"
				})
			},
			// 点击跳转领养
			adop: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/AnimalAdopt/AnimalAdopt"
				})
			},
			// 点击跳转话题
			topic: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/Topic/Topic"
				})
			},

			// 点击跳转宠物详情页面  路由传参
			details: function(index) {
				uni.navigateTo({
					url: `/pages/home/Animal_item?index=` + index,
				})
			},

			// 点击跳转洗澡的页面
			shower: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/AnimalShower/AnimalShower"
				})
			}
		},
		// 取得定位地址
		onShow() {
			let Address = uni.getStorageSync('getAddress')
			this.cityname = Address;
		}
	}
</script>

<style lang="scss">
	.title {
		margin-left: 24rpx;
		margin-top: 66rpx;
		display: flex;
		margin-bottom: 40rpx;
	}

	.city {
		font-size: 32rpx;
		color: #444444;
		width: 180rpx;
		height: 68rpx;
		line-height: 68rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.dizhi {
		color: #fcb826;
		margin-right: 40rpx;
		height: 68rpx;
		line-height: 68rpx;
		font-size: 20px;
	}

	.navigation {
		width: 350rpx;
		height: 68rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.11);
		border-radius: 8rpx;
		text-indent: 1em;
	}

	.carousel {
		width: 702rpx;
		height: 260rpx;
		border-radius: 16rpx;
	}

	.page {
		width: 100%;
		height: 100%;
		text-align: center;
		margin-bottom: 45rpx;
	}

	.dog {
		width: 68rpx;
		height: 68rpx;
	}

	.blacklist {
		display: flex;
		justify-content: space-around;
		margin-bottom: 10rpx;
	}

	.shower {
		font-size: 25rpx;
	}

	.box {
		width: 750rpx;
		height: 16rpx;
		background-color: #f9f9f9;
		margin-bottom: 30rpx;
	}

	.nutrition {
		text-align: center;
	}

	.nurture {
		font-size: 28rpx;
		color: #fd843e;

	}

	.nurture::after {
		content: "";
		width: 64rpx;
		border: solid 1rpx #fd843e;
		position: absolute;
		margin-top: 20rpx;
		margin-left: 16rpx;
	}

	.nurture::before {
		content: "";
		width: 64rpx;
		border: solid 1rpx #fd843e;
		position: absolute;
		margin-top: 20rpx;
		margin-left: -82rpx;
	}

	.reddog {
		width: 702rpx;
		height: 254rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
		margin: 0 auto;
		margin-top: 22rpx;
		display: flex;
	}

	.rabbit {
		width: 156rpx;
		height: 190rpx;
		margin-top: 32rpx;
		margin-left: 16rpx;
		margin-right: 24rpx;
	}

	.bunny {
		width: 352rpx;
		height: 36rpx;
		font-size: 32rpx;
		color: #444444;
		margin-top: 32rpx;
		margin-bottom: 32rpx;
	}

	.liulang {
		width: 346rpx;
		height: 22rpx;
		font-family: PingFangSC-Medium;
		font-size: 22rpx;
		color: #666666;
	}

	.look {
		width: 130rpx;
		height: 46rpx;
		background-color: #f99015;
		border-radius: 22rpx;
		opacity: 0.5;
		margin-top: 20rpx;
		font-size: 25rpx;
		color: #ffffff;
		text-align: center;
		line-height: 46rpx;

	}


	.tiaojian {
		display: flex;
		justify-content: space-around;
		margin-top: 36rpx;
		flex-wrap: wrap;
	}

	.cate {
		width: 132rpx;
		height: 58rpx;
		background-color: #e9e9e9;
		border-radius: 28rpx;
		text-align: center;
	}

	.vvv {
		width: 132rpx;
		height: 58rpx;
		background-color: #f99015;
		border-radius: 28rpx;
		text-align: center;
	}

	.name {
		width: 54rpx;
		height: 28rpx;
		font-size: 28rpx;
		letter-spacing: 0rpx;
		color: #ffffff;
		line-height: 58rpx;
	}

	.xiabiao {
		margin-top: 20rpx;
		width: 132rpx;
		height: 12rpx;
		background-color: #fd843e;
		border-radius: 6rpx;
	}

	.ssuo {
		width: 80rpx;
		height: 68rpx;
		background-color: #f99015;
		color: #FFFFFF;
		line-height: 68rpx;
		text-align: center;
		border-radius: 0 30rpx 30rpx 0;
	}


	.pet {
		margin: 60rpx 0 0 24rpx;
		box-shadow: 0rpx 0rpx 34rpx 0rpx rgba(0, 0, 0, 0.08);
		width: 700rpx;
		border-radius: 30rpx;
		display: flex;

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
				width: 13rem;
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

	.boxx {
		margin: 0 auto;
		width: 700rpx;
		border-radius: 15rpx;
	}
</style>
