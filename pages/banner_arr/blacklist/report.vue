<template>
	<!-- 黑名单里的举报 -->
	<view>

		<view class="position">
			<text class="position__text">TA的身份</text>
		</view>

		<view class="adopt">
			<view class="adopt__text" v-for="(item,index) in status" :key="item.name" :class="{done :statu==index}"
				@click="done(index)">
				{{item.name}}
			</view>
		</view>

		<view class="position">
			<text class="position__text">TA的性别</text>
		</view>

		<view class="adopt">
			<view class="adopt__text" v-for="(item,index) in gender" :key="item.name" :class="{done :digit==index}"
				@click="digits(index)">
				{{item.sex}}
			</view>
		</view>

		<view class="position">
			<text class="position__text">TA的微信昵称</text>
		</view>
		<input type="text" value="" placeholder="选填" class="sheet"  v-model="colle.nickname"/>

		<view class="position">
			<text class="position__text">所在地</text>
		</view>
		<input type="text" value="" placeholder="选填" class="sheet"  v-model="colle.home"/>

		<view class="position">
			<text class="position__text">身份证号</text>
		</view>
		<input type="text" value="" placeholder="选填" class="sheet"  v-model="colle.idhao"/>

		<view class="position">
			<text class="position__text">手机号</text>
		</view>
		<input type="text" value="" placeholder="选填" class="sheet" v-model="colle.shouj "/>

		<view class="position">
			<text class="position__text">举报理由</text>
		</view>
		<textarea placeholder="请填写举报理由..." class="describe"  v-model="colle.reason" ></textarea>

		<view class="position">
			<text class="position__text">你的手机号</text>
		</view>
		<input type="text" value="" placeholder="请输入您的手机号" class="sheet" v-model="colle.self"/>



		<button type="" class="inform"   @click="cache">点击举报</button>


	</view>






	</view>
</template>

<script>
	export default {
		data() {
			const status = [{
					name: "领养人"
				},
				{
					name: '送养人'
				}
			]
			const gender = [{
					sex: "男"
				},
				{
					sex: '女'
				}
			]
			
			const colle={
				nickname:"",
				home:'',
				idhao:'',
				shouj:"",
				reason:"",
				self:""
				
				
			}
			return {
				status,
				statu: 0,
				gender,
				digit: 1,
				colle
			}
		},
		methods: {
			done: function(index) {
				this.statu = index
			},
			digits: function(index) {
				this.digit = index
			},
			
			cache:function(){
				const status=this.status[this.statu].name
				const  gender=this.gender[this.digit].sex
				const colle=this.colle
				// vuex 里方法
				this.$store.commit('cache',{status,gender,colle})
				console.log(colle,'举报')
			}
			
			
			
		}
	}
</script>

<style lang="scss">
	.position {
		margin-top: 40rpx;

		&__text {
			font-size: 30rpx;
			letter-spacing: 0rpx;
			color: #666666;
			margin-left: 22rpx;
		}
	}

	.adopt {
		display: flex;

		&__text {
			width: 120rpx;
			height: 62rpx;
			background-color: #f1f1f1;
			color: #999999;
			text-align: center;
			line-height: 62rpx;
			border-radius: 15rpx;
			margin: 50rpx 30rpx 0 22rpx;
		}
	}

	.done {
		background-color: #f98912;
		color: #FFFFFF;
	}

	.sheet {
		width: 704rpx;
		height: 90rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
		margin: 38rpx 0 0 12rpx;
		padding-left: 22rpx;
	}

	.describe {
		width: 704rpx;
		height: 258rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
		margin: 38rpx auto;
		padding-top: 20rpx;
		padding-left: 22rpx;
	}

	.inform {
		width: 704rpx;
		height: 84rpx;
		background-color: #f99214;
		border-radius: 8rpx;
		color: #FFFFFF;
		margin-top: 44rpx;
	}
</style>
