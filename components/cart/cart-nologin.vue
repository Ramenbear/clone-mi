<template>
	<view>
		<view class="bg-white position-fixed left-0 right-0 border-top border-light-secondary animated fadeIn faster " style="z-index: 100;">
			<uni-list-item title="登录后享受更多优惠">
				<block slot="right">去登录</block>
			</uni-list-item>
		</view>
		<view style="height: 95upx;"></view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	export default {
		components:{
			uniListItem
		}
	}
</script>

<style>
</style>
