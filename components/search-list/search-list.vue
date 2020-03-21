<template>
	<view class="row border-bottom line-h0 border-light-secondary p-2 animated fadeIn faster " 
	@tap="openDetail">
		<view class="span-7 line-h d-flex">
			<image 
			class="rounded"
			style="width: 100%;height: 100%;" 
			:src="item.titlepic" 
			mode="widthFix"></image>
		</view>
		<view class="span-13 line-h p-1 pl-3 d-flex flex-column j-sb">
			<view>
				<view class="text-dark" style="font-size: 36upx;font-weight: 650;">
					{{item.title}}
				</view>
				<view class="text-secondary font line-h-sm">
					{{item.desc}}
				</view>
			</view>
			<view>
				<view class="d-flex main-text-color line-h font-weight mb-1"
				style="font-size: 35upx;">
					<view class="font a-self-start line-h font-weight-100">￥</view>
					{{item.pprice}}
				</view>
				<view class="d-flex text-secondary font">
					<text class="mr-1">{{item.comment_num}} 条评论</text>
					<text>{{item.good_num}} 满意</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			openDetail(){
				console.log('打开详情页')
			}
		}
	}
</script>

<style>
</style>
