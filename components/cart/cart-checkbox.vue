<template>
	<view class="cart-checkbox" @tap="selected" :class="getBoxClass">
		<view class="icon iconfont icon-iconfontxuanzhong4"></view>
	</view>
</template>

<script>
	export default {
		props:{
			checked:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			getBoxClass(){
				return this.checked ? 'cart-checkbox-on' : '';
			}
		},
		methods:{
			selected(){
				if (this.disabled) return;
				this.$emit('change',!this.checked)
			}
		}
	}
</script>

<style>
	.cart-checkbox{
		margin: 10upx;
		width: 45upx;
		height: 45upx;
		border-radius: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2upx solid #D7D7D7;
	}
	.cart-checkbox .icon{
		font-size: 50upx;
		color: #FD6801;
		display: none;
	}
	.cart-checkbox-on{
		border-color: #FD6801!important;
	}
	.cart-checkbox-on .icon{
		display: block;
	}
</style>
