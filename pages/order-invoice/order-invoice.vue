<template>
	<view>
		<divider></divider>
		<view class="bg-white">
			<card title="发票类型" :titleWeight="false" bodyPadding>
				<zcm-radio-group :currentIndex="labels1.selected" 
				:labels="labels1.list"></zcm-radio-group>
				<view class="text-light-muted">
					电子发票与纸质发票具有相同的法律效力，可作为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。
				</view>
			</card>
		</view>
		<divider></divider>
		<view class="bg-white">
			<card title="发票抬头" :titleWeight="false" bodyPadding>
				<zcm-radio-group :currentIndex="labels2.selected" 
				:labels="labels2.list"
				@change="labels2Select"></zcm-radio-group>
			</card>
		</view>
		<divider></divider>
		<view class="bg-white">
			<view class="border-bottom bg-white p-2 d-flex a-center">
				<view class="text-dark mr-1 flex-shrink font-md">个人姓名：</view>
				<text>个人</text>
			</view>
			<view class="bg-white p-2 d-flex a-center">
				<view class="text-dark mr-1 flex-shrink font-md">发票内容：</view>
				<text>商品明细</text>
			</view>
		</view>
		<divider></divider>
		<view class="bg-white">
			<view class="bg-white p-2 d-flex a-center">
				<view class="text-secondary mr-1 flex-shrink font-md">收票人手机：</view>
				<text>158****1215</text>
			</view>
		</view>
		<view class="text-light-muted p-2">
			发票须知：
			<view>1.发票为实际支付金额，不包括优惠券等；</view>
			<view>2.电子发票可在订单完成后，在订单详情中查看；</view>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue";
	import zcmRadioGroup from "@/components/common/zcm-radio-group.vue";
	export default {
		components:{
			card,
			zcmRadioGroup
		},
		data() {
			return {
				labels1:{
					selected:0,
					list: [
						{ name:'电子发票' }
					]
				},
				labels2:{
					selected:0,
					list: [
						{ name:'个人' },
						{ name:'单位' },
					]
				},
			}
		},
		methods: {
			labels2Select(val){
				this.labels2.selected = val;
			}
		}
	}
</script>

<style>
page{ background: #EEEEEE; }
</style>
