<template>
	<view>
		<divider></divider>
		<view class="bg-white">
			<uni-list-item title="头像" :showArrow="false" showRightSlot>
				<block slot="right">
					<image src="../../static/images/demo/demo6.jpg" 
					style="width: 90upx;height: 90upx;" 
					class="rounded-circle border border-light-secondary"></image>
				</block>
			</uni-list-item>
			<uni-list-item title="姓名">
				<block slot="right">楚绵</block>
			</uni-list-item>
			<uni-list-item title="性别"></uni-list-item>
			<uni-list-item title="生日"></uni-list-item>
		</view>
		<divider></divider>
		<view class="bg-white">
			<uni-list-item title="修改密码"></uni-list-item>
			<uni-list-item title="密保手机"></uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	export default {
		components:{
			uniListItem,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{ background: #EEEEEE; }
</style>
