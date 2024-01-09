<template>
	<!-- 主页面领养 点进去里的详情 -->

	<view>
		<view class="boxes">

			<view class="" v-for="(item,index) in bbb" :key="item.shuju.nickname">
				<image :src="item.tupian" mode="" class="print"></image>
				<view class="content">
					<view class="circle">
						
					</view>
					<view class="fawai">
						法外狂徒张三
					</view>
					<view class="dizhi">
						济南唐冶 <text>|</text>1小时前发布
					</view>
					<view class="gender">
						驱虫
					</view>
					<view class="vaccine">
						疫苗
					</view>
					<view class="reason">
						精力旺盛，喜欢拆家。绝对的开心果
					</view>
				</view>

				<view class="varieties">
					<view class="varieties__dog">
						品种:{{item.shuju.kind}}
					</view>
					<view class="varieties__sixe">
						性别:{{item.sixe}}
					</view>
				</view>

				<view class="condition">
					<view class="condition__title">
						| 领养条件
					</view>
					<view class="condition__item" v-for="(items,index) in item.select" :key="items">
						{{items}}
					</view>
				</view>
			</view>

		</view>

		<view class="base iconfont"    >
			<view class="" @click="urltap">
				<view class="base__fanhui">
					&#xe642;
				</view>
				<view class="base__shouy">
					返回首页
				</view>
			</view>

			<view class=" iconfont" @click="focus"  :class="flag ? 'vv' : '' "  >
				<view class="base__Focus">
					&#xe687;
				</view>
				<view class="base__guanzhu">
					关注
				</view>
			</view>

			<!-- flag是false 是不显示 点击功能取反 所以显示  -->
			<view class="mm  iconfont"  v-if="flag" @click="focus"  >
				<view class="base__Focus">
					&#xe687;
				</view>
				<view class="followed">
					已关注
				</view>
			</view>

			<view class="boxx">
				<view class="apply">
					申请领养
				</view>
			</view>

		</view>


	</view>


</template>

<script>
	export default {
		data() {
			// 调用vuex 里的发布数据
			const adoptt = this.$store.state.adopt
			console.log(adoptt, "领养数据")
			
			return {
				adoptt,
				bbb: [],
				flag:false,
				
			}
		},
		methods: {
			// 点击返回首页
			urltap: function() {
					uni.switchTab({
						url: '/pages/home/home'
					})
				},
				
			//点击关注  并把关注的数据本地缓存
			 focus:function(){
				 this.flag=!this.flag	
							  
				// 展开运算 把数组 变成对象
				 const collect={...this.bbb}
				 // console.log(collect,'是啥')
				 const guanzhu= uni.getStorageSync('guanz')||[]
				 guanzhu.push(collect)
				 console.log(guanzhu,'是啥')
				 // 当点击关注变红色的时候 把数据本地缓存
				 if(this.flag==true){
					 uni.setStorageSync('guanz',guanzhu)
					
				 }
			 },
			 
	
			 
			

		},

		// 路由传参 接收从领养 页面跳转携带的参数
		onLoad(options) {
			this.bbb.push(this.adoptt[options.index])
			
			console.log(this.bbb, '数据')
		},

	}
</script>

<style lang="scss">
	.boxes {
		background-color: #f1f1f1;
		overflow-y: scroll;
		height: 1200rpx;
	}

	.print {
		width: 702rpx;
		height: 400rpx;
		margin: 0 auto;
		display: block;
		border-radius: 20rpx;
	}

	.content {
		width: 702rpx;
		height: 208rpx;
		background-color: #FFFFFF;
		border-radius: 0rpx 0rpx 24rpx 24rpx;
		position: relative;
		margin: 0 auto;
	}

	.circle {
		width: 68rpx;
		height: 68rpx;
		background-color: #ffffff;
		border: solid 2rpx #707070;
		border-radius: 50%;
		position: absolute;
		top: 38rpx;
		left: 32rpx;
		background-image: url(/static/image/img12.png);
		background-size: cover;
	}

	.fawai {
		width: 166rpx;
		height: 28rpx;
		font-size: 28rpx;
		letter-spacing: 0rpx;
		color: #444444;
		position: absolute;
		top: 34rpx;
		left: 126rpx;
	}

	.dizhi {
		width: 280rpx;
		height: 26rpx;
		font-size: 26rpx;
		letter-spacing: 0rpx;
		color: #999999;
		position: absolute;
		top: 86rpx;
		left: 126rpx;
	}

	.gender {
		width: 72rpx;
		height: 46rpx;
		border-radius: 22rpx;
		border: solid 4rpx #4ed67f;
		text-align: center;
		color: #4ed67f;
		position: absolute;
		top: 32rpx;
		left: 458rpx;
		font-size: 26rpx;
	}

	.vaccine {
		width: 86rpx;
		height: 46rpx;
		border-radius: 22rpx;
		border: solid 4rpx #3893eb;
		color: #3893eb;
		position: absolute;
		top: 32rpx;
		left: 542rpx;
		text-align: center;
		font-size: 26rpx;
	}

	.reason {
		height: 34rpx;
		font-size: 30rpx;
		letter-spacing: 0rpx;
		color: #444444;
		position: absolute;
		top: 140rpx;
		left: 34rpx;
	}

	.varieties {
		width: 702rpx;
		height: 80rpx;
		background-color: #ffffff;
		border-radius: 12rpx;
		margin: 0 auto;
		margin-top: 34rpx;
		border-bottom: solid 2rpx #e6e6e6;
		display: flex;

		&__dog {
			color: #444444;
			line-height: 80rpx;
			margin-left: 44rpx;
		}

		&__sixe {
			color: #444444;
			line-height: 80rpx;
			margin-left: 154rpx;
		}
	}

	.condition {
		width: 702rpx;
		overflow:auto;
		min-height:200px;
		background-color: #ffffff;
		border-radius: 12rpx;
		margin: 0 auto;
		position: relative;

		&__title {
			width: 140rpx;
			height: 28rpx;
			font-size: 28rpx;
			color: #f99015;
			position: absolute;
			top: 30rpx;
			left: 60rpx;
		}

		&__item {
			margin-left: 60rpx;
			position: relative;
			top: 82rpx;
			color: #999999;
		}
	}

	.base {
		display: flex;
		justify-content: space-around;
		
		&__fanhui {
			padding-top: 15rpx;
			font-size: 45rpx;
		}

		&__shouy {
			height: 24rpx;
			font-size: 24rpx;
			margin-left: -20rpx;
		}

		&__Focus {
			padding-top: 15rpx;
			font-size: 45rpx;
		}

		&__guanzhu {
			height: 24rpx;
			font-size: 24rpx;
		}
	}

	.apply {
		width: 308rpx;
		height: 82rpx;
		background-color: #f99015;
		border-radius: 40rpx;
		text-align: center;
		color: #FFFFFF;
		line-height: 82rpx;
	}
	
	.boxx {
		padding-top: 10rpx;
	}
	
	.mm{
		color: red;
	}
	
	.vv{
		display: none;
	}
	
	.followed{
		height: 24rpx;
		font-size: 24rpx;
		margin-left: -10rpx;
	}
</style>
