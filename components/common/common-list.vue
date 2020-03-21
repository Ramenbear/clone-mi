<template>
	<view class="col-6 pb-2 px animated fadeIn faster " @tap="openDetail">
		<image class="w-100" 
		:src="item.titlepic" 
		mode="widthFix"></image>
		<view class="font-md text-dark px-2">{{item.title}}</view>
		<view class="text-muted font px-2 line-h-md">{{item.desc}}</view>
		<view class="d-flex px-2 pt-2">
			<view class="font-md text-danger mr-1 line-h d-flex">
				<view class="line-h font-sm a-self-start">
					￥</view> 
				{{item.pprice}}
			</view>
			<text class="font-sm text-muted a-self-end line-through">￥{{item.oprice}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '../../pages/detail/detail'
				});
			}
		},
	}
</script>

<style>
</style>
