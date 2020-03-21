<template>
	
	<view class="p-2">
		<!-- 标题 -->
		<view class="font-lg">{{item.title}}</view>
		<!-- 描述 -->
		<view class="text-light-muted font mb-4 line-h-md" style="font-size: 28upx;"> 
			{{item.desc}}
		</view>
		<!-- 价格 -->
		<view class="d-flex main-text-color line-h font-weight font-lg mb-1">
			<view class="font a-self-start line-h font-weight-100">￥</view>
			{{item.pprice}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		}
	}
</script>

<style>
</style>
