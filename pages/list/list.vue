<template>
	<view>
		<!-- 排序和筛选 -->
		<change-screen :screen="screen"
		@change="changeScreen"
		@open="openRightModel"></change-screen>
		<!-- 列表 -->
		<view style="height: 100upx;"></view>
		
		<block v-for="(item,index) in list" :key="index">
			<search-list :item="item" :index="index"></search-list>
		</block>
		
		<!-- 右侧弹窗 -->
		<uni-drawer :visible="showRigth" mode="right" @close="hide" 
		bodyStyle="width: 80%!important;">
			<card title="服务" bodyPadding :titleWeight="false" showheadRight
			titleStyle="color:#767676!important;">
				<zcm-radio-group :currentIndex="labels1.selected" 
				:labels="labels1.list"
				@change="labels1Select"></zcm-radio-group>
			</card>
			<card title="分类" bodyPadding :titleWeight="false"
			titleStyle="color:#767676!important;">
				<zcm-radio-group :currentIndex="labels2.selected" 
				:labels="labels2.list"
				@change="labels2Select"></zcm-radio-group>
			</card>
			<view class="d-flex position-fixed bottom-0 right-0 border-top border-light" style="width: 100%;">
				<view class="flex-1 font-md py-2 text-center"
				@tap.stop="reset">重置</view>
				<view class="flex-1 font-md py-2 text-center text-white main-bg-color"
				@tap.stop="submit">确定</view>
			</view>
		</uni-drawer>
		
		
	</view>
</template>

<script>
	import changeScreen from "@/components/search-list/change-screen.vue";
	import uniDrawer from "@/components/uni-common/uni-drawer/uni-drawer.vue";
	import card from "@/components/common/card.vue";
	import zcmRadioGroup from "@/components/common/zcm-radio-group.vue";
	import searchList from "@/components/search-list/search-list.vue"
	
	export default {
		components: {
			uniDrawer,
			card,
			zcmRadioGroup,
			changeScreen,
			searchList
		},
		data() {
			return {
				showRigth: false,
				screen:{
					currentIndex:0,
					list:[
						{ name:'综合', status:1 },
						{ name:'销量', status:0 },
						{ name:'价格', status:0 }
					]
				},
				labels1:{
					selected:0,
					list: [
						{ name:'耳机', },
						{ name:'户外', },
						{ name:'配件', },
						{ name:'耳机', },
						{ name:'户外', },
						{ name:'配件', }
					]
				},
				labels2:{
					selected:0,
					list: [
						{ name:'耳机', },
						{ name:'户外', },
						{ name:'配件', },
						{ name:'耳机', },
						{ name:'户外', },
						{ name:'配件', }
					]
				},
				list:[
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					},
					{
						id:12,
						titlepic:"/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg",
						title:"真无限蓝牙耳机",
						desc:"雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
						pprice:199,
						comment_num:1348,
						good_num:'98%'
					}
				]
			}
		},
		onNavigationBarButtonTap() {
			this.hide();
		},
		onBackPress() {
			if(this.showRigth){
				this.hide()
				return true
			}
		},
		methods: {
			// 筛选
			changeScreen(index){
				let oldIndex = this.screen.currentIndex;
				// 当前切换操作
				if (oldIndex === index){
					let status = this.screen.list[index].status;
					return this.screen.list[index].status = status === 1 ? 2 : 1;
				}
				// 修改旧
				this.screen.list[oldIndex].status = 0;
				// 更新新
				this.screen.currentIndex = index;
				this.screen.list[index].status = 1;
			},
			// 打开右侧弹框
			openRightModel(){
				this.showRigth = true
			},
			hide(){
				if (this.showRigth) {
					this.showRigth = false
				}
			},
			// 单选
			labels1Select(val){
				this.labels1.selected = val;
			},
			labels2Select(val){
				this.labels2.selected = val;
			},
			// 重置
			reset(){
				this.labels1.selected = 0;
				this.labels2.selected = 0;
			},
			// 确定
			submit(){
				// todo...
				// 关闭模态框
				this.hide();
			}
		}
	}
</script>

<style scoped>

</style>
