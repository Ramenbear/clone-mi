<template>
	<view class="px-2 py-3 animated fadeIn faster ">
		<card cardShadow cardRounded 
		:cover="item.titlepic" 
		coverHeight="250"
		:showhead="false">
			<view class="border-bottom border-light-secondary p-2 pt-1 d-flex j-sb a-center">
				<view>
					<view class="font-md"> {{item.title}} </view>
					<view class="text-light-muted font"> {{item.desc}} </view>
				</view>
				<view class="font-md main-bg-color text-light py-1 px-2" 
				hover-class="main-bg-hover-color"
				style="border-radius: 60upx;">去购买</view>
			</view>
			<view class="d-flex j-center a-center py-2 font-md"
			hover-class="bg-light-secondary" @tap="openDetail">
				了解更多 <view class="icon iconfont icon-you text-light-muted ml"></view> 
			</view>
		</card>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue";
	export default {
		components: {
			card
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
			openDetail(){
				uni.navigateTo({
					url: '../../pages/detail/detail',
				});
			}
		}
	}
</script>

<style>
</style>
