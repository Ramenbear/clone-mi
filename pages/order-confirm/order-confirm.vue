<template>
	<view>
		<!-- 头部 -->
		<choose-path></choose-path>
		<!-- 订单详情 -->
		<view class="bg-white" 
		style="border-top-left-radius: 25upx;border-top-right-radius: 25upx;margin-top: -25upx;">
			<uni-list-item showRightSlot>
				<block slot="title">
					<view class="d-flex">
						<image src="../../static/images/demo/demo6.jpg" 
						style="width: 90upx;height: 90upx;" 
						class="mr-1"></image>
						<image src="../../static/images/demo/demo6.jpg" 
						style="width: 90upx;height: 90upx;" 
						class="mr-1"></image>
						<image src="../../static/images/demo/demo6.jpg" 
						style="width: 90upx;height: 90upx;" 
						class="mr-1"></image>
					</view>
				</block>
				<block slot="right">共3件</block>
			</uni-list-item>
			<uni-list-item :showArrow="false" showRightSlot>
				<block slot="title">商品总价</block>
				<block slot="right">
					<show-price color="text-dark">20.00</show-price>
				</block>
			</uni-list-item>
			<uni-list-item :showArrow="false" showRightSlot>
				<block slot="title">运费</block>
				<block slot="right">包邮</block>
			</uni-list-item>
			<uni-list-item showRightSlot>
				<block slot="title">优惠券</block>
				<block slot="right">
					<text class="text-light-muted">无可用</text>
				</block>
			</uni-list-item>
			<uni-list-item :showArrow="false" showRightSlot>
				<block slot="title"><text class="main-text-color">小计</text></block>
				<block slot="right">
					<show-price>20.00</show-price>
				</block>
			</uni-list-item>
		</view>
		<!-- 发票 -->
		<divider></divider>
		<view class="bg-white">
			<uni-list-item extraStyle="width:40%;" showRightSlot @tap="openInvoice">
				<block slot="title">发票</block>
				<block slot="right">
					电子发票-个人
				</block>
			</uni-list-item>
		</view>
		<!-- 底部按钮 -->
		<view class="px-4 px position-fixed left-0 right-0 bottom-0 bg-white d-flex j-end a-center" style="height: 100upx;font-size: 32upx;">
			合计：<show-price>20.00</show-price>
			<view class="main-bg-color text-white px-4 py ml-3" 
			hover-class="main-bg-hover-color"
			style="font-size: 32upx;border-radius: 50upx;"> 去付款 </view>
		</view>
	</view>
</template>

<script>
	import showPrice from "@/components/common/show-price.vue";
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue"
	import choosePath from "@/components/order-confirm/choose-path.vue";
	export default {
		components: {
			showPrice,
			uniListItem,
			choosePath
		},
		data() {
			return {
				
			}
		},
		methods: {
			openInvoice(){
				uni.navigateTo({
					url: '../order-invoice/order-invoice',
				});
			}
		}
	}
</script>

<style>
page{ background: #EFEEEC; }
</style>
