<template>
	<view class="d-flex flex-column">
		<view class="border-bottom bg-white p-2 d-flex a-center">
			<view class="text-secondary mr-1 flex-shrink font-md">收货人：</view>
			<input type="text" value="楚绵" class="px-1 flex-1 font-md"/>
		</view>
		<view class="bg-white p-2 d-flex a-center">
			<view class="text-secondary mr-1 flex-shrink font-md">手机号码：</view>
			<input type="number" value="15623545123" class="px-1 flex-1 font-md"/>
		</view>
		<divider></divider>
		<view class="bg-white border-bottom p-2 d-flex a-center">
			<view class="text-secondary mr-1 flex-shrink font-md">所在地区：</view>
			<view class="px-1 flex-1 font-md">广东 广州 白云</view>
		</view>
		<view class="bg-white p-2 d-flex a-center">
			<view class="text-secondary mr-1 flex-shrink font-md">详细地址：</view>
			<view class="px-1 flex-1 font-md">XXXX地区</view>
		</view>
		<divider></divider>
		<view class="bg-white p-2 d-flex a-center">
			<view class="text-secondary mr-1 flex-shrink font-md">设为默认地址：</view>
			<switch class="ml-auto" checked color="#FF7200" />
		</view>
		<view class="p-3 d-flex j-center a-center mt-auto">
			<view class="rounded main-bg-color text-white w-100 text-center py-2 font-md"
			hover-class="main-bg-hover-color">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{ background: #EEEEEE; }
</style>
