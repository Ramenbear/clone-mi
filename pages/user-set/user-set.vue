<template>
	<view>
		<!-- 账号管理 -->
		<card title="账号管理" :titleWeight="false" 
		bodyStyle="background:#FFFFFF;" headBorderBottom>
			<uni-list-item title="个人资料"
			@click="navigate('user-userinfo')"></uni-list-item>
			<uni-list-item title="收货地址"
			@click="navigate('user-path-list')"></uni-list-item>
		</card>
		<!-- 关于 -->
		<card title="关于" :titleWeight="false" 
		headBorderBottom bodyStyle="background:#FFFFFF;">
			<uni-list-item title="关于商城"></uni-list-item>
			<uni-list-item title="意见反馈"></uni-list-item>
			<uni-list-item title="协议规则"></uni-list-item>
			<uni-list-item title="资质证件"></uni-list-item>
			<uni-list-item title="用户协议"></uni-list-item>
			<uni-list-item title="隐私政策"></uni-list-item>
		</card>
		<!-- 退出 -->
		<view class="p-3 d-flex j-center a-center">
			<view class="rounded bg-white border w-100 text-center py-2 font-md"
			hover-class="bg-light-secondary">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue';
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	export default {
		components:{
			card,
			uniListItem,
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigate(str){
				uni.navigateTo({
					url: `/pages/${str}/${str}`,
				});
			}
		}
	}
</script>

<style>
page{ background: #EEEEEE; }
</style>
