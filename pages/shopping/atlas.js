// 一个公共的打开地图位置 函数

export const atlas = function() {
	uni.chooseLocation({
		success: function(res) {
			console.log('位置名称：' + res.name);
			console.log('详细地址：' + res.address);
			console.log('纬度：' + res.latitude);
			console.log('经度：' + res.longitude);
			uni.setStorage({
				key: 're',
				data: res,
			});
		}
	});
}

// export const atlas = function() {
// 	uni.getSetting({
// 		success(res) {
// 			console.log(res)
// 			if (!res.authSetting['scope.userLocation']) {
// 				uni.authorize({
// 					scope: 'scope.userLocation',
// 					success() {
// 					uni.getLocation({
// 					    type: 'wgs84',
// 					    success: function (res) {
// 					        console.log('当前位置的经度：' + res.longitude);
// 					        console.log('当前位置的纬度：' + res.latitude);
// 							uni.showToast({
// 								title: '无题',
// 								mask: true,
// 							});
							
// 					    },	fail(error) {
// 								console.log('失败火影', error)
// 							}
// 					});
						
// 					},
// 					fail(error) {
// 						console.log('拒绝授权', error)
// 						uni.showToast({
// 							title: '标题',
// 							cotent: '不授权无法使用此功能',
// 							cancelText: '不授权',
// 							canceColor: '#f94218',
// 							success(res) {
// 								console.log(res)
// 								if (res.config) {
// 									uni.openSetting({
// 										success(res) {
// 											console.log(res.authSetting)
// 										}
// 									});
// 								} else if (res.cancel) {
// 									console.log("点击不授权")
// 								}
// 							}
// 						});



// 					}
// 				})

// 			} else {
// 			uni.getLocation({
				
// 				type: 'wgs84',
// 				success: function (res) {
// 				    console.log('当前位置的经度：' + res.longitude);
// 				    console.log('当前位置的纬度：' + res.latitude);
// 					uni.showToast({
// 						title: '无题',
// 						mask: true,
// 					});
					
// 				},fail(error) {
// 						uni.showToast({
// 						    title: '不是频繁使用',
// 						    duration: 2000
// 						});
// 						console.log("失败了")
// 					}
// 				});
// 			}
// 		}
// 	})


// }
