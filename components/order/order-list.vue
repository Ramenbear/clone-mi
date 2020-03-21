<template>
	<view class="bg-white animated fadeIn faster">
		<card :title="item.time" :titleWeight="false"
		headTitleStyle="color:#BBBBBB!important;" 
		showheadRight headBorderBottom bodyPadding>
			<block slot="right">
				<text class="main-text-color">{{item.status}}</text>
			</block>
			<block v-for="(v,i) in item.list" :key="i">
				<view 
				class="d-flex a-center border-bottom border-light-secondary pb-2">
					<image :src="v.titlepic" 
					mode="widthFix"
					style="width: 150upx;height: 150upx;"
					class="mx-2 border border-light-secondary rounded">
					</image>
					<view style="color: #9D9993;">
						<view class="d-flex j-sb">
							<text class="text-dark" 
							style="width: 350upx;font-size: 35upx;">{{v.title}}</text>
							<text class="font-md">￥{{v.pprice}}</text>
						</view>
						<view class="d-flex j-sb">
							<text style="width: 350upx;">{{v.attrs}}</text>
							<text>x{{v.num}}</text>
						</view>
					</view>
				</view>
			</block>
		</card>
		<view class="d-flex j-end px-2 pb-2">
			共3件商品，合计：￥299.00
		</view>
		<view class="d-flex j-end pb-2">
			<view class="border rounded px-2 py-1 text-secondary mr-2"
			hover-class="bg-light-secondary" @tap="openLogistics">查看物流</view>
			<view class="border rounded px-2 py-1 text-secondary mr-2"
			hover-class="bg-light-secondary">确认收货</view>
		</view>
		<divider></divider>
	</view>
</template>
<script>
	import card from '@/components/common/card.vue';
	export default {
		components: {
			card
		},
		props:{
			item:Object,
			index:Number
		},
		methods: {
			openLogistics() {
				uni.navigateTo({
					url: '../../pages/logistics-detail/logistics-detail'
				});
			}
		},
	}
</script>

<style>
</style>
