<template>
	<view>
		<!-- 导航 -->
		<view class="d-flex bg-white border-bottom border-top border-light-secondary font-md text-light-muted">
			<block v-for="(item,index) in tabbars" :key="index">
				<view class="py-2 flex-1 d-flex a-center j-center"
				:class=" tabIndex===index ? 'tabactive' : '' "
				@tap="changeTab(index)">
					{{item.name}}
				</view>
			</block>
		</view>
		<!-- 订单列表 -->
		<view class="position-relative" style="min-height: 440upx;">
			<divider></divider>
			<!-- 订单列表 -->
			<template v-if="getList.length > 0">
				<block v-for="(item,index) in getList" :key="index">
					<order-list :item="item" :index="index"></order-list>
				</block>
			</template>
			<template v-else>
				<!-- 无订单 -->
				<no-thing :icon="tabbars[tabIndex].nothing" 
				:msg="`您还没有${tabbars[tabIndex].name}订单`"></no-thing>
			</template>
		</view>
		<!-- 热门列表 -->
		<view class="pt-5 text-center font-lg main-text-color"
		style="font-size: 35upx;font-weight: 650;">猜你喜欢</view>
		<view class="thline text-light-muted">实时推荐你的爱</view>
		
		<view class="row w-100 bg-white mt-5">
			<block v-for="(item,index) in hotlist" :key="index">
				<common-list :item="item" :index="index"></common-list>
			</block>
		</view>
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue";
	import orderList from "@/components/order/order-list.vue";
	export default {
		components:{
			commonList,
			orderList
		},
		data() {
			return {
				list:[
					{
						list:[
							{
								time:"2019-06-07 10:20",
								status:"已发货",
								list:[
									{
										titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"小米8",
										pprice:"1999.00",
										attrs:"金色",
										num:1
									},
									{
										titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"小米8",
										pprice:"1999.00",
										attrs:"金色",
										num:1
									}
								]
							},
							{
								time:"2019-06-07 10:20",
								status:"已发货",
								list:[
									{
										titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"小米8",
										pprice:"1999.00",
										attrs:"金色",
										num:1
									},
									{
										titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
										title:"小米8",
										pprice:"1999.00",
										attrs:"金色",
										num:1
									}
								]
							}
						],
					},
					{
						list:[],
					},
					{
						list:[],
					},
					{
						list:[],
					}
				],
				tabIndex:0,
				tabbars:[
					{ name:"全部",id:0, nothing:'no_pay' },
					{ name:"待付款",id:1, nothing:'no_pay' },
					{ name:"待收货",id:2, nothing:'no_receiving' },
					{ name:"待评价",id:3, nothing:'no_comment' },
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
		computed:{
			getList(){
				return this.list[this.tabIndex].list;
			}
		},
		methods: {
			changeTab(index){
				this.tabIndex = index;
			}
		}
	}
</script>

<style>
page{ background: #F5F5F5; }
.tabactive{ margin-bottom: -5upx; border-bottom: 5upx solid #FD6801; color: #FD6801;}
</style>
