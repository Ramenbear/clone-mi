<template>
	<view class="row" style="box-sizing: border-box!important;">
		<view class="col-6 d-flex a-stretch">
			<image style="height: 530upx;width: 373upx;"
			:src="resdata[0].src"></image>
		</view>
		<view class="col-6 d-flex flex-column j-sb">
			<image style="height: 260upx;"
			:src="resdata[1].src"
			mode="widthFix"></image>
			<image style="height: 260upx;"
			:src="resdata[2].src"
			mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			resdata:Array
		}
	}
</script>

<style>
</style>
