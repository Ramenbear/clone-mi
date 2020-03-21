<template>
	<view class="uni-tab-bar">
		<!-- #ifndef APP-PLUS -->
		<!-- <uni-nav-bar :shadow="false">
			<block slot="left">
				<view style="margin-left: 8px;" 
				class="icon iconfont icon-xiaoxi d-flex a-center"></view>
			</block>
			<view class="d-flex a-center" style="margin-left: -60upx;">
				<input type="text" class="flex-1 bg-light-secondary rounded p-1" value="测试" />
			</view>
			<block slot="right">
				<view class="icon iconfont icon-richscan_icon"></view>
			</block>
		</uni-nav-bar> -->
		<!-- #endif -->
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					
					<template v-if="tabBars[index1].template === 'index'">
						<!-- 轮播图 -->
						<swiper-image :banners="tab.data.banners"></swiper-image>
						<!-- 图标分类 -->
						<index-nav :indexnav="tab.data.indexNav"></index-nav>
						
						<block v-for="(v,i) in tab.data.list" :key="i">
							<!-- 三图广告 -->
							<template v-if="v.type === 'ThreeAdverts'">
								<divider></divider>
								<three-adverts :resdata="v.data"></three-adverts>
							</template>
							<!-- 大图广告 -->
							<template v-if="v.type === 'OneAdvert'">
								<divider></divider>
								<card :title="v.data.name" :cover="v.data.src"></card>
							</template>
							<!-- 通用列表 -->
							<template v-if="v.type === 'list'">
								<view class="row" style="margin: 0 -5upx;">
									<block v-for="(item,idx) in v.data" :key="idx">
										<common-list :item="item"></common-list>
									</block>
								</view>
							</template>
						</block>
					</template>
					
					<template v-if="tabBars[index1].template === 'special'">
						<!-- 轮播图 -->
						<swiper-image :banners="tab.data.banners"></swiper-image>
						<!-- 图标分类 -->
						<index-nav :indexnav="tab.data.indexNav"></index-nav>
						
						<block v-for="(v,i) in tab.data.list" :key="i">
							<!-- 通用列表 -->
							<template v-if="v.type === 'list'">
								<view class="row" style="margin: 0 -5upx;">
									<block v-for="(item,idx) in v.data" :key="idx">
										<common-list :item="item"></common-list>
									</block>
								</view>
							</template>
						</block>
					</template>

					
					
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import swiperImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdverts from "@/components/index/three-adverts.vue";
	import card from "@/components/common/card.vue";
	import commonList from "@/components/common/common-list.vue";
	import uniNavBar from "@/components/uni-common/uni-nav-bar/uni-nav-bar.vue";
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdverts,
			card,
			commonList,
			uniNavBar
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '推荐',
					id: 'index',
					template:"index"
				}, {
					name: '体育',
					id: 'tiyu',
					template:"special"
				}, {
					name: '热点',
					id: 'redian',
					template:"special"
				}, {
					name: '财经',
					id: 'caijing',
					template:"special"
				}, {
					name: '娱乐',
					id: 'yule',
					template:"special"
				}, {
					name: '军事',
					id: 'junshi',
					template:"special"
				}, {
					name: '历史',
					id: 'lishi',
					template:"special"
				}, {
					name: '本地',
					id: 'bendi',
					template:"special"
				}]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		onLoad() {
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
				if (this.tabBars[e].template === 'index') {
					this.newsitems[e].data.list.push({   
						type:"list",// 通用列表
						data:[
							{
								titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
								title:"米家空调",
								desc:"1.5匹支流变频",
								pprice:2199,
								oprice:2699
							},
							{
								titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
								title:"米家空调",
								desc:"1.5匹支流变频",
								pprice:2199,
								oprice:2699
							}
						]
					})
				}
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
						data: {
							list:[]
						}
					};
					if (this.tabBars[i].template === 'index') {
						aryItem.data.banners = [
							{ src: '../../static/images/demo/demo4.jpg'},
							{ src: '../../static/images/demo/demo8.jpg'}
						];
						aryItem.data.indexNav = [
							{ src:"../../static/indexnav/1.png", name:"新品分类" },
							{ src:"../../static/indexnav/2.gif", name:"小米众筹" },
							{ src:"../../static/indexnav/3.gif", name:"以旧换新" },
							{ src:"../../static/indexnav/4.gif", name:"1分拼团" },
							{ src:"../../static/indexnav/5.gif", name:"超值特卖" },
							{ src:"../../static/indexnav/6.gif", name:"小米秒杀" },
							{ src:"../../static/indexnav/7.gif", name:"真心想要" },
							{ src:"../../static/indexnav/8.gif", name:"电视热卖" },
							{ src:"../../static/indexnav/9.gif", name:"家电热卖" },
							{ src:"../../static/indexnav/10.gif", name:"米粉卡" }
						];
						aryItem.data.list = [
							{
								// 三屏广告
								type:"ThreeAdverts",
								data:[
									{ src:"../../static/images/demo/demo1.jpg" },
									{ src:"../../static/images/demo/demo2.jpg" },
									{ src:"../../static/images/demo/demo2.jpg" },
								]
							},
							{
								// 大图广告
								type:"OneAdvert",
								data:{
									name:"每日精选",
									src:"../../static/images/demo/demo4.jpg"
								}
							},
							{   
								type:"list",// 通用列表
								data:[
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									}
								]
							}
						];
					}
					if (this.tabBars[i].template === 'special') {
						aryItem.data.banners = [
							{ src: '../../static/images/demo/demo4.jpg'},
							{ src: '../../static/images/demo/demo8.jpg'}
						];
						aryItem.data.indexNav = [
							{ src:"../../static/indexnav/1.png", name:"新品分类" },
							{ src:"../../static/indexnav/2.gif", name:"小米众筹" },
							{ src:"../../static/indexnav/3.gif", name:"以旧换新" },
							{ src:"../../static/indexnav/4.gif", name:"1分拼团" },
							{ src:"../../static/indexnav/5.gif", name:"超值特卖" },
						];
						aryItem.data.list = [
							{   
								type:"list",// 通用列表
								data:[
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									},
									{
										titlepic:"../../static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"米家空调",
										desc:"1.5匹支流变频",
										pprice:2199,
										oprice:2699
									}
								]
							}
						];
					}
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
