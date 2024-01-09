<template>
	<!-- 我的地址 -->
	<view>
		<view class="wrapper">

			<view class="iconfont  management" @click="manage" :class="flags ? 'guan' :'management' ">
				&#xe615;
				<view class="" style="font-size: 24rpx;">
					管理
				</view>
			</view>

			<view class="goods" v-for="(item,index) in location" :key='item.city'  >
				<view class="goods__site iconfont" v-if="item.name!=''">

					<text class="goods__site__check " v-html="item.check ? '&#xe767;' : '&#xe605;'"
						@click="choice(item)" v-if="flags"></text>
					<text class="goods__site__name">姓名:{{item.name}}</text>
					<text class="goods__site__phone">{{item.phone}}</text>
					<text class="goods__site__city">地址:{{item.city}}{{item.street}}</text>
					<text class="goods__site__edit" @click="redact(index)">&#xe649;</text>
				</view>

				<view class="default" v-if="flags">
					<view class="default__text"   @click="addr(item)">
						设为默认地址
					</view>
					<view class="default__delete"  @click="cancel(item,index)"  >
						删除
					</view>
				</view>
			</view>


			<view class="iconfont  append" @click="again">
				<text class="append__icon">&#xe640;</text>
				<view class="append__text">
					添加新的收货地址
				</view>
				<text class="append__arrow">&#xe641;</text>
			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: '',
				flags: false
			}
		},
		methods: {
			// 点击跳转新建地址
			again: function() {
				uni.navigateTo({
					url: "./found"
				})
			},
			// 点击跳转编辑地址  路由传参
			redact: function(index) {
				uni.navigateTo({
					url: `/pages/personal/bianji?item=${encodeURIComponent(JSON.stringify(index))}`
				})
			},
			// 点击勾选按钮
			choice: function(item) {
				console.log(item, '9999999')
				item.check = !item.check
			},
			// 点击 管理按钮
			manage: function() {
				this.flags = !this.flags
			},
			// 点击 删除效果
			cancel:function(item,index){
				console.log(this.location,'5555')
				if(item.check==true){
					let _selft=this
					  _selft.location.splice(index,1)
					  uni.setStorageSync('site',this.location )
					  
				} else{
					console.log(2)
				}
			},
			// 点击设置默认地址
			addr:function(item){
				console.log(item,'默认')
				uni.setStorageSync('moren',item )
			}
		},
		// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面，页面生命周期
		onShow: function() {
			this.location = uni.getStorageSync('site')
		}
	}
</script>

<style lang="scss">
	.wrapper {
		background-color: #f8f8f8;
		height: 1500rpx;
		position: relative;
	}

	.append {
		height: 94rpx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		margin-top: 20rpx;

		&__icon {
			color: #fcb826;
			margin: 0 24rpx 0 30rpx;
		}

		&__text {
			font-size: 30rpx;
			color: #666666;
		}

		&__arrow {
			position: absolute;
			left: 696rpx;
		}
	}

	.goods {
		margin-top: 50rpx;

		&__site {
			width: 750rpx;
			height: 148rpx;
			background-color: #ffffff;
			position: relative;

			&__name {
				font-size: 30rpx;
				color: #666666;
				position: absolute;
				top: 24rpx;
				left: 84rpx;
			}

			&__phone {
				font-size: 30rpx;
				color: #666666;
				position: absolute;
				top: 24rpx;
				left: 304rpx
			}

			&__city {
				font-size: 30rpx;
				color: #666666;
				position: absolute;
				top: 84rpx;
				left: 84rpx
			}

			&__edit {
				line-height: 148rpx;
				font-size: 60rpx;
				position: absolute;
				left: 660rpx;
				background-image: linear-gradient(to left, #fbc720, #f83f02);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			&__check {
				line-height: 148rpx;
				margin-left: 30rpx;
				color: #fc9022;
			}
		}
	}

	.management {
		font-size: 50rpx;
		position: relative;
		left: 608rpx;
		top: 20rpx;
		margin-bottom: 30rpx;
	}

	.default {
		display: flex;
		color: #9e9e9e;
		position: relative;
		border-top: 2rpx solid #b2b2b2;
		margin: 0 auto;
		background-color: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;

		&__text {
			margin-left: 84rpx;
		}

		&__delete {
			position: absolute;
			left: 550rpx;
		}
	}

	.guan {
		color: red;
	}
</style>
