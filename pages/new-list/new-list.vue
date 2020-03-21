<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" 
			:key="index" 
			class="swiper-tab-list" 
			:class="tabIndex==index ? 'active' : ''"
			:id="tab.id" 
			:data-current="index" 
			style="width: 180upx;"
			@click="tapTab">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					
					<!-- 列表 -->
					<block v-for="(item,idx) in tab.data" :key="idx">
						<new-list :item="item" :index="idx"></new-list>
					</block>
					
					
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import newList from "@/components/new-list/new-list.vue";
	export default {
		components: {
			newList
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [
					{
						name: '最热新品',
						id: 'index'
					},
					{
						name: '最近上新',
						id: 'index'
					},
					{
						name: '即将开售',
						id: 'index'
					},
					{
						name: '新品手机',
						id: 'index'
					},
					{
						name: '新品电视',
						id: 'index'
					},
					{
						name: '新品笔记本',
						id: 'index'
					},
				]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		onLoad(e) {
			this.newsitems = this.randomfn()
		},
		methods: {
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				// 加载数据
				this.newsitems[e].data.push({
					titlepic:'/static/images/demo/demo4.jpg',
					title:"Remi K20 Pro",
					desc:"绞龙885 旗舰处理器"
				})
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						refreshing: false,
						refreshText: "下拉可以刷新",
						loadingText: "加载更多...",
						list:[]
					};
					// 组织aryItem.list
					aryItem.data = [
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
					{
						titlepic:'/static/images/demo/demo4.jpg',
						title:"Remi K20 Pro",
						desc:"绞龙885 旗舰处理器"
					},
				];
					ary.push(aryItem);
				}
				return ary;
			},
		}
	}
</script>

<style>
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
</style>
