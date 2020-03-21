<template>
	<view>
		<common-popup :showClass="showClass" @hide="hide">
			<!-- 头部 -->
			<view class="d-flex a-center w-100" style="height: 275upx;">
				<image src="../../static/images/demo/cate_01.png" 
				mode="widthFix" style="width: 200upx;height: 200upx;" 
				class="border rounded"></image>
				<view class="ml-2">
					<view class="d-flex main-text-color line-h font-weight font-lg mb-1">
						<view class="font a-self-start line-h font-weight-100">￥</view>
						3369
					</view>
					<view class="d-flex">
						<block v-for="(item,index) in selects" :key="index">
							<text class="mr-1">
							{{item.list[item.selected].name}}</text>
						</block>
					</view>
				</view>
			</view>
			<!-- 内容 -->
			<scroll-view scroll-y  class="w-100" 
			style="height: 660upx;">
				<!-- 属性筛选 -->
				<block v-for="(item,index) in selects" :key="index">
					<card :title="item.title" :titleWeight="false" showheadRight
					titleStyle="color:#767676!important;">
						<zcm-radio-group :currentIndex="item.selected" 
						:labels="item.list"
						@change="labelsSelect(index,$event)"></zcm-radio-group>
					</card>
				</block>
				<!-- 购买数量 -->
				<view class="py-3 d-flex a-center j-sb border-top border-bottom mt-2 border-light-secondary">
					<view>购买数量</view>
					<view>
						<uni-number-box :min="min" :max="max" 
						:value="num" @change="changeNum">
						</uni-number-box>
					</view>
				</view>
			</scroll-view>
			<!-- 底部按钮 -->
			<view class="d-flex j-center a-center main-bg-color text-white font-md position-fixed bottom-0 left-0 right-0" style="height: 100upx;z-index: 210;"
			hover-class="main-bg-hover-color"
			@tap="hide">加入购物车</view>
		</common-popup>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue";
	import commonPopup from "../common/common-popup.vue";
	import zcmRadioGroup from "@/components/common/zcm-radio-group.vue";
	import uniNumberBox from '@/components/uni-common/uni-number-box/uni-number-box.vue';
	export default {
		components:{
			commonPopup,
			zcmRadioGroup,
			uniNumberBox,
			card,
		},
		props:{
			// 选择属性
			selects:Array,
			showClass: String,
			num:{
				type:Number,
				default:1
			},
			min:{
				type:Number,
				default:1
			},
			max:{
				type:Number,
				default:100
			},
		},
		methods:{
			labelsSelect(index,val){
				this.$emit('onselect',index,val)
			},
			hide(){
				this.$emit('hide')
			},
			changeNum(e){
				this.$emit('change',e)
			}
		}
	}
</script>

<style>
</style>
