<template>
	<view>
		<swiper indicator-dots autoplay circular 
		:interval="3000" :duration="1000" :style="getStyle">
			<block v-for="(item,idx) in banners" :key="idx">
				<swiper-item style="height: 825upx;">
					<view class="swiper-item" @tap="tapEvent(item,idx)">
						<image 
						:src="item.src" 
						mode="widthFix"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			banners:Array,
			height:String,
			preview:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			getStyle(){
				if (this.height) {
					let height=uni.upx2px(this.height);
					return `height:${height}px;`;
				}
			}
		},
		methods: {
			tapEvent(item,idx){
				if (!this.preview) {
					// 跳转
					return;
				}
				let arr = [];
				for (let i = 0; i < this.banners.length; i++) {
					arr.push(this.banners[i].src);
				}
				// 预览图片
				uni.previewImage({
					urls: arr,
					current:idx,
					loop:true,
					indicator:"default"
				});
			}
		},
	}
</script>

<style>
</style>
