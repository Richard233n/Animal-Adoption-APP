<template>
	<view>
		<!-- 黑名单页面 -->
		<view class="blacklist">
			<view class="query">
				<view class=" " @click="report">
					<image src="../../../static/image/个人举报登记.png" mode="" class="query__icon"></image>
					<view class="query__text">
						举报
					</view>
				</view>
				<view class=" " @click="query">
					<image src="../../../static/image/查询.png" mode="" class="query__icon"></image>
					<view class="query__text">
						查询
					</view>
				</view>
				<view class=" " @click="share">
					<image src="../../../static/image/上传.png" mode="" class="query__icon"></image>
					<view class="query__text">
						转发
					</view>
					
					<uni-popup ref="popupShare" type="share">
					    <uni-popup-share title="分享到" @select="select">分享</uni-popup-share>
					</uni-popup>
					
				</view>

			</view>

			<view class="crew">
				<view class="crew__q">
				</view>
				<text class="crew__text">失信人员</text>
				<view class="crew__h">
				</view>
			</view>

			<view class="adopter">
				<view class="adopter__box">
					<view class="adopter__box__title" v-for="(item,index) in cate" :key='item.name'
						:class="{cutbox:cut==index}" @click="alter(index)">
						{{item.name}}
					</view>

				</view>

				<view class="column iconfont" v-if="cut==0">
					<uni-table border border stripe>
						<!-- 表头行 -->
						<uni-tr>
							<uni-th width="130rpx">微信昵称</uni-th>
							<uni-th>手机号</uni-th>
							<uni-th>领养人/送养人</uni-th>
							<uni-th>详情</uni-th>
						</uni-tr>
						<!-- 表格数据行 -->
						<uni-tr v-for="(item,index) in inform" :key="item.shouj" v-if="item.status=='领养人'">
							<uni-td>{{item.colle.nickname}}</uni-td>
							<uni-td>{{item.colle.shouj}}</uni-td>
							<uni-td>{{item.status}}</uni-td>
							<uni-td>详情 &#xe641;</uni-td>
						</uni-tr>

					</uni-table>
				</view>

				<view class="column iconfont" v-if="cut==1">
					<uni-table border border stripe>
						<!-- 表头行 -->
						<uni-tr>
							<uni-th width="130rpx">微信昵称</uni-th>
							<uni-th>手机号</uni-th>
							<uni-th>领养人/送养人</uni-th>
							<uni-th>详情</uni-th>
						</uni-tr>
						<!-- 表格数据行 -->
						<uni-tr v-for="(item,index) in inform" :key="item.shouj" v-if="item.status=='送养人'">
							<uni-td>{{item.colle.nickname}}</uni-td>
							<uni-td>{{item.colle.shouj}}</uni-td>
							<uni-td>{{item.status}}</uni-td>
							<uni-td>详情 &#xe641;</uni-td>
						</uni-tr>

					</uni-table>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const cate = [{
					name: "领养人"
				},
				{
					name: "送养人"
				}
			]
			const inform = this.$store.state.cart
			console.log(inform, '黑名单')
			return {
				cate,
				cut: 0,
				inform,

			}
		},
		methods: {
			alter: function(index) {
				this.cut = index
			},
			// 点击跳转举报
			report: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/blacklist/report"
				})
			},
			// 点击跳转查询页面
			query: function() {
				uni.navigateTo({
					url: "/pages/banner_arr/blacklist/find"
				})
			},
	
			share(){
				  this.$refs.popupShare.open()
			},
			select(e){
				uni.showToast({
					title:`您选择了${e.index+1}项:${e.item.text}`,
					icon:'none'
				})
			}
		},
		// 监听分享  小程序使用
		onShareAppMessage() {
			return {
				title: "微信小程序",
				path: "pages/news/news",
				imageUrl: "https://www.baidu.com/img/bd_logo1.png"
			}
		}

	}
</script>

<style lang="scss">
	.blacklist {
		background-color: #f8f8f8;
	}

	.query {
		display: flex;
		justify-content: space-around;

		&__icon {
			width: 88rpx;
			height: 88rpx;
			margin-top: 60rpx;
		}

		&__text {
			width: 48rpx;
			height: 24rpx;
			font-size: 24rpx;
			color: #444444;
			margin: 0 0 42rpx 15rpx;
		}
	}

	.crew {
		width: 702rpx;
		height: 108rpx;
		background-color: #ffffff;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		margin: 0 auto;
		text-align: center;
		position: relative;

		&__q {
			width: 62rpx;
			height: 2rpx;
			border-bottom: solid 2rpx #fd843e;
			position: absolute;
			top: 50rpx;
			left: 192rpx;
		}

		&__text {
			font-size: 30rpx;
			color: #fd843e;
			line-height: 108rpx;
		}

		&__h {
			width: 62rpx;
			height: 2rpx;
			border-bottom: solid 2rpx #fd843e;
			position: absolute;
			top: 50rpx;
			right: 204rpx;

		}
	}

	.adopter {
		background-color: #ffffff;
		width: 702rpx;
		height: 890rpx;
		margin: 0 auto;
		margin-top: 24rpx;

		&__box {
			display: flex;
			justify-content: space-around;

			&__title {
				margin-top: 34rpx;
			}
		}

	}

	.cutbox {
		width: 176rpx;
		height: 58rpx;
		background-color: #fd843e;
		border-radius: 28rpx;
		text-align: center;
		line-height: 58rpx;
		color: #ffffff;
		margin-top: 16rpx;
	}

	.column {
		margin-top: 20rpx;
	}
</style>
