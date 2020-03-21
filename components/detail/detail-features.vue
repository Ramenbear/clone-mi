<template>
	<view>
		<scroll-view scroll-x class="scroll-row">
			<block v-for="(item,index) in basicAttrs" :key="index">
				<view class="scroll-row-item detail-scroll-row-item">
					<view class="d-flex flex-column a-center j-center font">
						<view class="icon iconfont line-h-sm" :class="item.icon"></view>
						<view class="line-h-sm">{{item.title}}</view>
						<view class="text-light-muted line-h-sm font-sm">{{item.desc}}</view>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			basicAttrs:Array
		}
	}
</script>

<style scoped>
	.detail-scroll-row-item{
		height: 110upx; width:170upx;
	}
</style>
