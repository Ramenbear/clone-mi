<template>
	<view class="container">
		<loading :show="showLoading"></loading>
		<view class="d-flex">
			<scroll-view class="nav-left animated fadeIn faster" scroll-y>
				<block v-for="(item,index) in cateList" :key="index">
					<view class="nav-left-item border-bottom border-right d-flex a-center j-center border-color" @click="categoryClickMain(index)" :class="index==cateActive?'active':''">
						<text class="py-1">{{item.name}}</text>
					</view>
				</block>
			</scroll-view>
			<scroll-view class="nav-right animated fadeIn faster " scroll-y :scroll-top="scrollTop" @scroll="scroll" scroll-with-animation>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subList[cateActive].list" :key="index" @tap="open(item)">
					<image :src="item.logo" />
					<view>{{item.name}}</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLoading:true,
				cateList: [],
				subList: [],
				height: 0,
				cateActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
			}
		},
		onLoad() {
			this.getdata()
			this.height = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			open(item){
				uni.navigateTo({
					url: '../list/list',
				});
			},
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(index) {
				this.cateActive = index;
				this.scrollTop = -this.scrollHeight * index;
			},
			getdata(){
				let cate = [];
				let subList = [];
				// 主分类
				for (var i = 0; i < 10; i++) {
					cate.push({
						name:"分类"+i
					});
					subList.push({
						name:"分类"+i,
						list:[]
					})
				}
				// 子分类
				for (var i = 0; i < 10; i++) {
					for (var j = 0; j < 24; j++) {
						subList[i].list.push({
							name: subList[i].name+":商品",
							logo: "/static/images/demo/list/"+this.$Tool.rnd(1,6)+".jpg"
						})
					}
				}
				this.cateList = cate;
				this.subList = subList;
				setTimeout(()=>{
					this.showLoading = false;
				},1000)
			}
		}
	}
</script>

<style scoped>
.border-color{
	border-color: #ECECEC;
}
.nav-left {
	width: 22%;
	background: #FEFEFE;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
}
.nav-left text{
	border-left: 8upx solid #FEFEFE;
	border-right: 8upx solid #FEFEFE;
}
.nav-left-item {
	height: 100upx;
	font-size: 30upx;
}

.nav-right {
	width: 78%;
	position: absolute;
	left: 22%;
	top: 0;
	bottom: 0;
}

.nav-right-item {
	width: 28%;
	height: 220upx;
	float: left;
	text-align: center;
	padding: 11upx;
	font-size: 28upx;
}

.nav-right-item image {
	width: 120upx;
	height: 120upx;
}

.active {
	color: #FD6B04;
}
.active text{
	border-left: 8upx solid #FD6B04;
	width: 100%;
	text-align: center;
}
.border-bottom{ border-color: #F4F4F4; }
</style>
