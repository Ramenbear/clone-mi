<template>
	<view>
		<!-- 大图广告位 -->
		<card :title="banner.name" :cover="banner.src">
		</card>
		<!-- 热门搜索按钮 -->
		<view class="px-1 mb-2">
			<block v-for="(item,index) in hot" :key="index">
				<color-tag :name="item.name"></color-tag>
			</block>
		</view>
		<!-- 常用分类 -->
		<card title="常用分类" bodyPadding headStyle="padding-bottom:0;">
			<block v-for="(item,index) in cate" :key="index">
				<color-tag :color="false" :name="item.name"></color-tag>
			</block>
		</card>
		<divider></divider>
		<!-- 搜索记录 -->
		<card title="搜索记录" headBorderBottom>
			<uni-list-item title="小米" :showArrow="false" titleStyle="color:#333333;"></uni-list-item>
			<uni-list-item title="小米8 屏幕指纹板" :showArrow="false" titleStyle="color:#333333;"></uni-list-item>
		</card>
	</view>
</template>

<script>
	import card from "../../components/common/card.vue";
	import colorTag from "../../components/search/color-tag.vue";
	import uniList from "../../components/uni-common/uni-list/uni-list.vue"
	import uniListItem from "../../components/uni-common/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,
			colorTag,
			uniList,
			uniListItem
		},
		data() {
			return {
				banner:{
					name:"热门搜索",
					src:"../../static/images/demo/search-banner.png"
				},
				hot:[
					{ name:'领券中心' },
					{ name:'Redmi K20' },
					{ name:'RedmiBook 14' },
					{ name:'智能积木 越野四驱车' },
					{ name:'手环 腕带' },
				],
				cate:[
					{ name:'耳机' },
					{ name:'手机' },
					{ name:'音箱' },
					{ name:'手表' },
					{ name:'配件' },
					{ name:'网关/传感器' },
					{ name:'健康' },
					{ name:'酷玩' },
				],
			}
		},
		onNavigationBarSearchInputConfirmed() {
			uni.navigateTo({
				url: '../search-list/search-list'
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
