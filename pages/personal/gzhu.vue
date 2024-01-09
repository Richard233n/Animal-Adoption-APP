<template>
	<!-- 我的关注 界面 -->
	<view>

		<view class="iconfont  management" @click="manage" :class="flags ? 'guan' :'management' ">
			&#xe615;
			<view class="" style="font-size: 24rpx;">
				管理
			</view>
		</view>


		<view class="pet iconfont" v-for="(item,index) in collect" :key="index" >
			<view class="pet__dog" v-for="(items,index) in item" :key="items.shuju.nickname">
				<text class="pet__dog__check " v-html="items.check ? '&#xe767;':'&#xe605;' " v-if="flags"
					@click="choice(items)"></text>

				<image :src="items.tupian" mode="aspectFill" class="pet__dog__print"></image>

				<view class="">
					<view class="pet__dog__title">
						宠物昵称: {{items.shuju.nickname}}
						<image src="../../static/image/img12.png" class="pet__dog__icon" mode=""></image>
					</view>

					<view class="pet__dog__describe">
						捡回来的时候还没出满月，我可以
						养到满月送人，希望善良家人收养
					</view>

					<view class="pet__dog__yimiao">
						疫苗: {{items.yimiao}}
					</view>

					<view class="pet__dog__quc">
						{{items.quc}}驱虫
					</view>

					<view class="pet__dog__jueyu">
						{{items.jueyu}}绝育
					</view>
				</view>


			</view>
		<button type="default" class="save" hover-class='down' hover-stay-time='1000' @click="cancel(index)"v-if="flags">
			删除
		</button>

		</view>




	</view>
</template>

<script>
	export default {
		data() {

			const collect = uni.getStorageSync('guanz')
			console.log(collect, '888999')
			return {
				collect,
				flags: false,
				choose: "",
				information: "",
				
			}
		},
		methods: {
			// 点击 管理按钮
			manage: function() {
				this.flags = !this.flags
			},
			// 点击勾选按钮
			choice: function(item) {
				item.check = !item.check
				this.choose = item.check
				this.information = item
				
				console.log(item, '删除收藏')
			},
			// 点击删除按钮
			cancel:function(index){
				console.log(index,'对对对')
				if(this.choose==true){
					let _selft=this
					_selft.collect.splice(index,1)
					  uni.setStorageSync('guanz',_selft.collect )
				}
			},
			


		}
	}
</script>

<style lang="scss">

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
			&__check {
						line-height: 300rpx;
						margin: 0 10rpx 0 10rpx;
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


	.save {
		width: 704rpx;
		height: 84rpx;
		border-radius: 8rpx;
		color: red;
	}

	.down {
		background-color: #CD853F;
	}

	.guan {
		color: red;
	}
</style>
