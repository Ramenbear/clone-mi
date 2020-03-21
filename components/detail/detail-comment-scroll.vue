<template>
	<view class="px-2 pb-2">
		<!-- 评论 -->
		<scroll-view scroll-x class="scroll-row mt-1">
			<block v-for="(item,index) in comments" :key="index">
				<view class="scroll-row-item mr-2" 
				style="height: 380upx;width: 620upx;">
					<card cardRounded cardBorder 
					bodyStyle="background:#F5F5F4;" 
					:showhead="false">
						<view style="height: 380upx;" class="p-2">
							<!-- 头像昵称时间|点赞 -->
							<view class="d-flex j-sb a-center mb-2">
								<view class="d-flex a-center">
									<image :src="item.userpic" 
									mode="widthFix" 
									style="width: 70upx;height: 70upx;"
									class="mr-2 rounded-circle"></image>
									<view>
										<text class="d-block font-md">
										{{item.username}}</text>
										<text 
										class="d-block font text-light-muted line-h-sm">
											{{item.create_time}}</text>
									</view>
								</view>
								<view class="icon iconfont icon-dianzan text-light-muted" style="font-size: 28upx!important;padding-left: 10upx!important;">
									{{item.goodnum}}</view>
							</view>
							<!-- 内容 -->
							<text class="d-block mb-2 font-md">
								{{item.content}}
							</text>
							<!-- 多图 -->
							<view class="row">
								<block v-for="(item2,index2) in item.morepic"
								:key="index2">
									<view class="span24-8 px-1">
										<image :src="item2" 
										mode="widthFix" style="height: 115upx;"
										class="rounded"></image>
									</view>
								</block>
							</view>
						</view>
					</card>
				</view>
			</block>
		</scroll-view>
		<!-- 更多评论 -->
		<view class="py-2 text-primary d-flex a-center j-center rounded"
		hover-class="bg-light-secondary">
			更多评论 <view class="icon iconfont icon-you ml-1 font"></view>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue";
	export default {
		components:{
			card
		},
		props:{
			comments:Array
		},
	}
</script>

<style>
</style>
