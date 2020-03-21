<template>
	<view>
		<common-popup :showClass="showClass" @hide="hide">
			<!-- 内容 -->
			<scroll-view scroll-y  class="w-100" 
			style="height: 660upx;">
				<view class="font-weight font-md text-center py-2 border-bottom border-light-secondary">收货地址</view>
				<view class="p-2 border-bottom border-light-secondary"
				hover-class="bg-light-secondary">
					<view class="font-weight d-flex a-center">
						<view class="icon iconfont icon-dingwei mr-1"></view>
						楚绵
					</view>
					<view class="ml-1 text-light-muted font">
						广东省广州市帝莎IT学院基地
					</view>
				</view>
			</scroll-view>
			<!-- 底部按钮 -->
			<view class="d-flex j-center a-center main-bg-color text-white font-md position-fixed bottom-0 left-0 right-0" style="height: 100upx;z-index: 210;"
			hover-class="main-bg-hover-color"
			@tap="hide">选择新的地址</view>
		</common-popup>
	</view>
</template>

<script>
	import commonPopup from "../common/common-popup.vue";
	export default {
		components:{
			commonPopup
		},
		props:{
			showClass: String
		},
		methods:{
			hide(){
				this.$emit('hide')
			}
		}
	}
</script>

<style>
</style>
