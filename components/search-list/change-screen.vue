<template>
	<view class="row border-top border-bottom bg-white position-fixed left-0 right-0 top-0 border-light-secondary" style="z-index: 10;">
		<block v-for="(item,index) in screen.list" :key="index">
			<view class="col-3 d-flex a-center j-center py-2 font-md"
			:class="screen.currentIndex === index ? 'main-text-color':'text-secondary'"
			@tap="changeScreen(index)">
				{{item.name}} 
				<view class="d-flex flex-column">
					<view class="line-h0 icon iconfont icon-paixu-shengxu" 
					:class="item.status === 1 ? 'main-text-color' : 'text-light-muted'"></view>
					<view class="line-h0 icon iconfont icon-paixu-jiangxu" 
					:class="item.status === 2 ? 'main-text-color' : 'text-light-muted'"></view>
				</view>
			</view>
		</block>
		<view class="col-3 d-flex a-center j-center py-2 font-md main-text-color"
		@tap="openRightModel">筛选</view>
	</view>
</template>

<script>
	export default {
		props:{
			screen:Object
		},
		methods:{
			changeScreen(index){
				this.$emit('change',index)
			},
			openRightModel(){
				this.$emit('open')
			}
		}
	}
</script>

<style>
</style>
