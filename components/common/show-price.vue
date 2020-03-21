<template>
	<view class="d-flex line-h font-weight mb-1" :class="color"
	style="font-size: 30upx;">
			<view class="font a-self-start line-h font-weight-100">
				￥</view>
			<slot />
		</view>
</template>

<script>
	export default {
		props:{
			color:{
				type:String,
				default:"main-text-color"
			}
		}
	}
</script>

<style>
</style>
