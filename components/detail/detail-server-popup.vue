<template>
	<view>
		<common-popup :showClass="showClass" @hide="hide">
			<!-- 内容 -->
			<scroll-view scroll-y  class="w-100" 
			style="height: 660upx;">
				<view class="font-weight font-md text-center py-2 border-bottom border-light-secondary">服务说明</view>
				<block v-for="(item,index) in servers" :key="index">
					<view class="d-flex py-2 a-center">
						<icon type="success" color="#FD6801" 
						class="mr-2 a-self-start mt-1" size="15"></icon>
						<view>
							<view class="font-md">{{item.title}}</view>
							<text class="text-light-muted font" v-if="item.desc">
								{{item.desc}}</text>
						</view>
					</view>
				</block>

			</scroll-view>
			<!-- 底部按钮 -->
			<view class="d-flex j-center a-center main-bg-color text-white font-md position-fixed bottom-0 left-0 right-0" style="height: 100upx;z-index: 210;"
			hover-class="main-bg-hover-color"
			@tap="hide">确定</view>
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
		data() {
			return {
				servers: [
					{
						title:"仿米自营",
						desc:""
					},
					{
						title:"仿米发货",
						desc:"由仿米发货"
					},
					{
						title:"7天无理由就是不退货",
						desc:""
					},
					{
						title:"运费说明",
						desc:"不管满多少，就是不包邮；\n特殊产品，也是一样；"
					}
				]
			}
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
