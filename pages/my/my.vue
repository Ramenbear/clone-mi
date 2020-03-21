<template>
	<view>
		<!-- 头部 -->
		<my-head></my-head>
		<!-- 我的订单 -->
		<view class="animated fadeIn faster">
			<card title="我的订单" showheadRight showheadRightIcon 
			headRightText="全部订单" headBorderBottom>
				<view class="row">
					<block v-for="(item,index) in nav" :key="index">
						<view class="span-5 d-flex flex-column j-center a-center py-3"
						hover-class="bg-light-secondary"
						@tap="navigate(item.url)">
							<view class="icon iconfont line-h" :class="item.icon"
							style="font-size: 40upx;"></view>
							<view>{{item.name}}</view>
						</view>
					</block>
					
				</view>
			</card>
		</view>
		<divider></divider>
		<!-- 广告图 -->
		<view class="animated fadeIn faster">
			<image src="/static/images/demo/demo4.jpg" mode="widthFix"
			style="height: 300upx;"></image>
		</view>
		<!-- 菜单 -->
		<uni-list-item showExtraIcon otherIconStyle="color:#FDBF2E;"
		otherIcon="icon-VIP" title="小米会员"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FCBE2D;"
		otherIcon="icon-huangguan" title="会员中心"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FA6C5E;"
		otherIcon="icon-service" title="服务中心"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#FE8B42;"
		otherIcon="icon-home" title="小米之家"></uni-list-item>
		<uni-list-item showExtraIcon otherIconStyle="color:#9ED45A;"
		otherIcon="icon-gengduo" title="更多功能"></uni-list-item>
		<divider></divider>
		<uni-list-item showExtraIcon otherIconStyle="color:#808C98;"
		otherIcon="icon-icon_set_up" title="更多设置"
		@click="navigate('user-set')"></uni-list-item>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue';
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	import myHead from "@/components/my/my-head.vue";
	export default {
		components:{
			card,
			uniListItem,
			myHead
		},
		data() {
			return {
				nav:[
					{ name:"待付款",icon:"icon-wallet_icon",url:"order" },
					{ name:"待收货",icon:"icon-daishouhuo",url:"order" },
					{ name:"待评价",icon:"icon-pinglun1",url:"order" },
					{ name:"退换修",icon:"icon-buoumaotubiao46",url:"" }
				]
			}
		},
		methods: {
			navigate(str){
				if (!str) return;
				uni.navigateTo({
					url: `/pages/${str}/${str}`,
				});
			}
		}
	}
</script>

<style>

</style>
