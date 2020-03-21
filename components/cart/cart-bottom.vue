<template>
	<view class="d-flex a-stretch bg-white position-fixed bottom-0 left-0 right-0 border-top border-light-secondary animated fadeIn faster" 
	style="height: 100upx;z-index: 99;">
		<view class="flex-1 d-flex a-center flex-shrink j-center">
			<cart-checkbox :checked="checkAll"
			@change="change">
			</cart-checkbox> 
		</view>
		<template v-if="!isedit">
			<!-- 合计 -->
			<view class="d-flex a-center j-center" style="flex: 2;font-size: 32upx;">
			合计：<show-price>{{totalPrice}}</show-price>
			</view>
			<!-- 结算 -->
			<view class="main-bg-color text-white d-flex a-center j-center flex-shrink" hover-class="main-bg-hover-color"
			style="flex: 2;font-size: 32upx;margin-top: -1upx;" @tap="submit">
				结算 {{getTotalNum}}
			</view>
		</template>
		<template v-else>
			<!-- 移入收藏 -->
			<view class="main-bg-color text-white d-flex a-center j-center flex-shrink" hover-class="main-bg-hover-color"
			style="flex: 2;font-size: 32upx;margin-top: -1upx;" @tap="removeFava">
				移入收藏
			</view>
			<!-- 删除 -->
			<view class="bg-danger text-white d-flex a-center j-center flex-shrink" hover-class="main-bg-hover-color"
			style="flex: 2;font-size: 32upx;margin-top: -1upx;" @tap="delect">
				删除
			</view>
		</template>
	</view>
</template>

<script>
	import cartCheckbox from "@/components/cart/cart-checkbox.vue";
	import showPrice from "@/components/common/show-price.vue";
	export default {
		components: {
			cartCheckbox,
			showPrice
		},
		props:{
			isedit:{
				type:Boolean,
				default:false
			},
			totalPrice:{
				type:[Number,String],
				default:0
			},
			totalNum:{
				type:[Number,String],
				default:0
			},
			checkAll:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			getTotalNum(){
				return this.totalNum > 0 ? "("+this.totalNum+")" : '';
			}
		},
		methods: {
			change(e) {
				this.$emit('change',e)
			},
			submit(){
				this.$emit('submit')
			},
			removeFava(){
				this.$emit('fava')
			},
			delect(){
				this.$emit('delect')
			}
		},
	}
</script>

<style>
</style>
