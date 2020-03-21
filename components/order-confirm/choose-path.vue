<template>
	<view class="px-4 main-bg-color d-flex text-white j-sb" 
	hover-class="main-bg-hover-color"
	style="height: 250upx;" @tap="open">
		<view class="d-flex flex-column j-center" style="height: 200upx;">
			<view class="font-weight d-flex a-center" style="font-size: 35upx;">
				楚绵 158****1235 
				<view class="border rounded font-sm border-light text-light d-flex j-center a-center px-2 ml-2">默认</view>
			</view>
			<view class="text-light">
				广东省 广州市 白云区 帝莎IT学院实战基地</view>
		</view>
		<view class="icon iconfont icon-you d-flex a-center j-center border-light-secondary" 
		style="color: rgba(255, 255, 255, 0.54);height: 200upx!important;"></view>
	</view>
</template>

<script>
	export default {
		methods: {
			open() {
				uni.navigateTo({
					url: '../../pages/user-path-list/user-path-list'
				});
			}
		},
	}
</script>

<style>
</style>
