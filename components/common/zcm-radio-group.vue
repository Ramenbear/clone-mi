<template>
	<view class="row" style="margin: 0 -20upx;">
		<block v-for="(item,index) in labels" :key="index">
			<view class="px-2 mb-2" :class="getSpan">
				<view class="px-2 py-1 border text-center rounded bg-light border-white"
				:class="index === currentIndex ? 'zcm-radio-active' :''"
				@tap="Select(index)">
					{{item.name}}
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			// 分列
			col:{
				type:[Number,String],
				default:3
			},
			// 默认选中
			currentIndex:{
				type:Number,
				default:0
			},
			// 数据
			labels:Array
		},
		computed: {
			getSpan() {
				let num = 24/parseInt(this.col);
				return 'span24-'+num;
			}
		},
		methods:{
			Select(index){
				this.$emit('change',index)
			}
		}
	}
</script>

<style scoped>
	.zcm-radio-active{
		background: #FCE0D5!important;
		border-color: #F97417!important;
		color: #F97417!important;
	}
</style>
