<template>
	<view>
		<!-- 轮播图 -->
		<swiper-image preview :banners="banners" height="750"></swiper-image>
		<!-- 基础信息 -->
		<detail-baseinfo :item="detail"></detail-baseinfo>
		<!-- 特性 -->
		<detail-features :basicAttrs="basicAttrs"></detail-features>
		
		<view class="p-2">
			<!-- 属性 -->
			<card cardRounded cardBorder bodyStyle="background:#F5F5F4;" 
			:showhead="false">
				<uni-list-item title="已选" extraStyle="width:10%"
				titleStyle="display:flex;color:#858585;font-size:20upx;"
				@tap="showPopup('choose')">
					<block slot="title">
						<view class="ml-2 font-md text-muted d-flex">
							<block v-for="(item,index) in selects" :key="index">
								<text class="mr-1 line-h">
								{{item.list[item.selected].name}}</text>
							</block>
						</view>
					</block>
				</uni-list-item>
				<uni-list-item title="配送" extraStyle="width:10%"
				titleStyle="display:flex;color:#858585;font-size:20upx;"
				@tap="showPopup('path')">
					<block slot="title">
						<view class="ml-2 font-md text-muted">
							北京 东城区 
							<text class="main-text-color ml-2">有现货</text>
						</view>
					</block>
				</uni-list-item>
				<uni-list-item extraStyle="width:10%"
				titleStyle="display:flex;color:#858585;font-size:20upx;"
				@tap="showPopup('server')">
					<block slot="title">
						<view class="font-sm text-muted d-flex a-center">
							 <view class="mr-2">
								 <icon class="mr-1" color="#EF5300" 
								 type="success" size="12"/> 
								 小米自营 </view>
							 <view class="mr-2">
								 <icon class="mr-1" color="#EF5300" 
								 type="success" size="12"/> 
								 小米发货 </view>
							 <view class="mr-2">
								 <icon class="mr-1" color="#EF5300" 
								 type="success" size="12"/> 
								 七天无理由退货 </view>
						</view>
					</block>
				</uni-list-item>
			</card>
		</view>
		<!-- 评论 -->
		<detail-comment-scroll :comments="comments"></detail-comment-scroll>
		<!-- 详情 -->
		<view class="d-flex flex-column border-top border-bottom mb-4 border-light-secondary">
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp" 
			mode="widthFix" lazy-load></image>
			<image class="w-100" 
			src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 推荐 -->
		<card title="为你推荐" 
		titleFontSize="lg" 
		:titleWeight="false"
		showhead>
			<view class="row w-100">
				<block v-for="(item,index) in hotlist" :key="index">
					<common-list :item="item" :index="index"></common-list>
				</block>
			</view>
		</card>
		
		<!-- 占位 -->
		<view style="height: 100upx;"></view>
		
		<!-- 底部导航 -->
		<detail-bottom-btn></detail-bottom-btn>
		
		<!-- 筛选 -->
		<detail-choose-popup :showClass="showChooseClass"
		 :selects="selects"
		 @hide="hidePopup('choose')"
		 @onselect="labelsSelect">
		</detail-choose-popup>
		
		<!-- 配送地区 -->
		<detail-path-popup :showClass="showPathClass"
		@hide="hidePopup('path')"></detail-path-popup>
		
		<!-- 服务 -->
		<detail-server-popup :showClass="showServerClass"
		@hide="hidePopup('server')"></detail-server-popup>
		
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue";
	import detailBaseinfo from "@/components/detail/detail-baseinfo.vue";
	import card from "@/components/common/card.vue";
	import uniListItem from "@/components/uni-common/uni-list-item/uni-list-item.vue";
	import commonList from "@/components/common/common-list.vue";
	import detailBottomBtn from "@/components/detail/detail-bottom-btn.vue";
	import detailCommentScroll from "@/components/detail/detail-comment-scroll.vue";
	import detailFeatures from "@/components/detail/detail-features.vue";
	import detailChoosePopup from "@/components/detail/detail-choose-popup.vue";
	import detailPathPopup from "@/components/detail/detail-path-popup.vue";
	import detailServerPopup from "@/components/detail/detail-server-popup.vue";
	export default {
		components: {
			swiperImage,
			detailBaseinfo,
			card,
			uniListItem,
			commonList,
			detailBottomBtn,
			detailCommentScroll,
			detailFeatures,
			detailChoosePopup,
			detailPathPopup,
			detailServerPopup
		},
		data() {
			return {
				comments:[
					{
						userpic:"../../static/images/demo/demo6.jpg",
						username:"楚绵",
						create_time:"2019-06-20",
						goodnum:164,
						content:"支持帝莎IT学院继续出uni-app实战教程",
						morepic:[
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						],
					},
					{
						userpic:"../../static/images/demo/demo6.jpg",
						username:"楚绵",
						create_time:"2019-06-20",
						goodnum:164,
						content:"支持帝莎IT学院继续出uni-app实战教程",
						morepic:[
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
							"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						],
					}
				],
				showChooseClass:"",
				showPathClass:"",
				showServerClass:"",
				selects:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				banners:[
					{ src: 'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'},
					{ src: 'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'}
				],
				detail:{
					title:"小米MIX3 6GB+128GB",
					desc:"磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",
					pprice:3299
				},
				basicAttrs:[
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
					{ title:"CPU",desc:"绞龙845八核",icon:"icon-cpu" },
				],
				hotlist:[
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					},
					{
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"米家空调",
						desc:"1.5匹支流变频",
						pprice:2199,
						oprice:2699
					}
				]
			}
		},
		methods: {
			// 单选
			labelsSelect(index,val){
				this.selects[index].selected = val;
			},
			// 筛选
			showPopup(type) {
				switch (type){
					case 'choose':
					this.showChooseClass = 'show';
						break;
					case 'path':
					this.showPathClass = 'show';
						break;
					case 'server':
					this.showServerClass = 'show';
						break;
				}
			},
			hidePopup(type){
				switch (type){
					case 'choose':
					this.showChooseClass = 'hide';
					setTimeout(() => {
						this.showChooseClass = 'none';
					}, 200);
						break;
					case 'path':
					this.showPathClass = 'hide';
					setTimeout(() => {
						this.showPathClass = 'none';
					}, 200);
						break;
					case 'server':
					this.showServerClass = 'hide';
					setTimeout(() => {
						this.showServerClass = 'none';
					}, 200);
						break;
				}
			},
		}
	}
</script>

<style>

</style>
