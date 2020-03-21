<template>
	<view style="background: #F5F5F5;">
		<uni-nav-bar :shadow="false" backgroundColor="#FFFFFF" 
		fixed :rightText=" isedit ? '完成' : '编辑' " 
		title="购物车" @click-right="Edit" 
		statusBar :border="false"/>
		<!-- 未登录 -->
		<!-- <cart-nologin></cart-nologin> -->
		<!-- 购物车列表 -->
		<view class="px-2 bg-white">
			<template v-if="list.length < 1">
				<!-- 无消息显示 -->
				<cart-nothing></cart-nothing>
			</template>
			<template v-else>
				<block v-for="(item,index) in list" :key="index">
					<view class="d-flex py-3 a-center j-sb border-bottom border-top border-light-secondary animated fadeIn faster ">
						<cart-checkbox :checked="item.selected"
						@change="selectItem(index,$event)">
						</cart-checkbox>
						<image :src="item.titlepic" mode="widthFix"
						style="width: 150upx;height: 150upx;"
						class="mx-2 border border-light-secondary rounded p-2">
						</image>
						<view class="a-self-stretch d-flex flex-column j-center flex-1">
							<view class="text-dark font-md" 
							style="font-size: 35upx;"> {{item.title}} </view>
							<view class="text-secondary font mb-2 d-flex a-center rounded py-1"
							@tap.stop="editAttrs(item,index)"
							:class=" isedit?'px-1 bg-light-secondary':'' "> 
								<block v-for="(attr,idx) in item.attrs" :key="idx">
									<text class="mr-1">
									{{attr.list[attr.selected].name}}
									</text>
								</block>
								<view class="icon iconfont icon-bottom ml-auto font"
								v-show="isedit"></view>
							</view>
							<view class="d-flex j-sb">
								<view class="d-flex main-text-color line-h font-weight mb-1 a-self-start" style="font-size: 35upx;">
									<view class="font a-self-start line-h font-weight-100">￥</view>
									{{item.pprice}}
								</view>
								<uni-number-box :min="1" :max="item.maxnum" :value="item.num" @change="Sum(index,$event)">
								</uni-number-box>
							</view>
						</view>
					</view>
				</block>
			</template>
			<!-- 列表 -->
		</view>

		<!-- 合计 -->
		<cart-bottom :checkAll="checkAll"
		:totalNum="totalNum"
		:totalPrice="totalPrice"
		:isedit="isedit"
		@change="chooseAll"
		@submit="submit"
		@fava="removeFava"
		@delect="delect"></cart-bottom>
		
		<!-- 热门列表 -->
		<view class="pt-5 text-center font-lg main-text-color"
		style="font-size: 35upx;font-weight: 650;">为你推荐</view>
		<view class="thline text-light-muted">买了人还买了</view>
		
		<view class="row w-100 bg-white mt-5">
			<block v-for="(item,index) in hotlist" :key="index">
				<common-list :item="item" :index="index"></common-list>
			</block>
		</view>
		
		<view style="height: 100upx;"></view>
		
		<!-- 筛选 -->
		<detail-choose-popup :showClass="showChooseClass"
		 :selects="AttrSelects"
		 @hide="hidePopup()"
		 @onselect="labelsSelect"
		 @change="AttrNumChange"
		 :min="editObj.minnum"
		 :max="editObj.maxnum"
		 :num="editObj.num">
		</detail-choose-popup>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-common/uni-nav-bar/uni-nav-bar.vue'
	import uniNumberBox from "@/components/uni-common/uni-number-box/uni-number-box.vue";
	import commonList from "@/components/common/common-list.vue";
	import cartBottom from "@/components/cart/cart-bottom.vue";
	import cartCheckbox from "@/components/cart/cart-checkbox.vue";
	import detailChoosePopup from "@/components/detail/detail-choose-popup.vue";
	import cartNologin from "@/components/cart/cart-nologin.vue";
	import cartNothing from "@/components/cart/cart-nothing.vue";
	export default {
		components: {
			uniNavBar,
			uniNumberBox,
			commonList,
			cartBottom,
			cartCheckbox,
			detailChoosePopup,
			cartNologin,
			cartNothing
		},
		data() {
			return {
				showChooseClass:"",
				AttrSelects:[],// 当前编辑商品属性
				editObj:{},// 当前编辑对象
				// 是否编辑状态
				isedit:false,
				// 选中商品对象
				selectedList:[],
				// 购物车列表
				list:[
					{
						selected:false,
						id:11,
						title:"商品标题111",
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						// 选中商品属性
						attrs:[
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
						pprice:336,
						num:1,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					},
					{
						selected:false,
						id:12,
						title:"商品标题222",
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						// 选中商品属性
						attrs:[
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
						pprice:365,
						num:10,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					},
					{
						selected:false,
						id:13,
						title:"商品标题333",
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						// 选中商品属性
						attrs:[
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
						pprice:10,
						num:1,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					}
				],
				// 是否全选
				checkAll:false,
				// 合计
				totalNum:0,
				// 总价
				totalPrice:0,
				// 热门推荐
				hotlist:[
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
		},
		methods: {
			// 进入编辑状态
			Edit(){
				this.isedit = !this.isedit;
			},
			// 修改商品属性
			editAttrs(item,index){
				// 初始化Popup
				this.AttrSelects = item.attrs;
				this.editObj = item;
				// 显示
				this.showPopup();
			},
			showPopup() {
				this.showChooseClass = 'show';
			},
			hidePopup(){
				this.showChooseClass = 'hide';
				setTimeout(() => {
					this.AttrSelects = [];
					this.editObj = {};
					this.showChooseClass = 'none';
				}, 200);
			},
			// 单选
			labelsSelect(index,val){
				this.AttrSelects[index].selected = val;
			},
			// 筛选数量变化
			AttrNumChange(e){
				this.editObj.num = e;
			},
			// 移入收藏
			removeFava(){
				
			},
			// 删除
			delect(){
				for (let i = 0; i < this.selectedList.length; i++) {
					let id = this.selectedList[i];
					let index = this.list.findIndex((obj)=>{
						return obj.id === id;
					});
					// 清除商品列表
					this.list.splice(index,1);
				}
				// 清除选中列表
				this.selectedList = [];
				this.Sum();
			},
			// 选中商品
			selectItem(index,val){
				// 设置当前商品选中状态
				this.list[index].selected = !this.list[index].selected;
				// 查询选中的列表中是否包含当前商品id
				let i = this.selectedList.indexOf(this.list[index].id);
				// 存在移除，不存在增加
				i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.list[index].id);
				// 选中全部
				this.checkAll = this.selectedList.length === this.list.length;
				// 重新计算
				this.Sum();
			},
			// 合计
			Sum(index,e){
				if(e) this.list[index].num = e;
				// 初始化总价
				this.totalPrice=0;
				let len = this.list.length;
				for(let i=0;i<len;i++){
					// 把选中的都计算一遍
					if(this.list[i].selected) {
						this.totalPrice += this.list[i].num*this.list[i].pprice;
					}
				}
				this.totalPrice = this.totalPrice.toFixed(2);
			},
			// 全选
			chooseAll(e){
				// 之前的状态
				let oldStatus = this.checkAll;
				// 拿到当前商品列表长度
				let len = this.list.length;
				let arr = [];
				for(let i=0;i<len;i++){
					// 修改每个商品的选中状态
					this.list[i].selected = !oldStatus;
					arr.push(this.list[i].id);
				}
				this.selectedList = oldStatus ? []:arr;
				this.checkAll = !oldStatus;
				this.Sum();
			},
			submit(){
				uni.navigateTo({
					url: '../order-confirm/order-confirm',
				});
				console.log('提交')
			}
		}
	}
</script>

<style>

</style>
