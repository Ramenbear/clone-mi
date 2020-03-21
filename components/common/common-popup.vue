<template>
	<view class="popup" 
	:class="showClass"
	@tap.stop="hide">
		<!-- 遮罩层 -->
		<view class="mask"></view>
		<view class="layer" @tap.stop="destory">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			showClass:String
		},
		methods: {
			destory(){ },
			hide(){
				this.$emit('hide')
			}
		},
	}
</script>

<style scoped>
@keyframes showPopup {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes hidePopup {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@keyframes showLayer {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-100%);
	}
}
@keyframes hideLayer {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0);
	}
}

.popup {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: none;
}
.popup .mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.6);
}
.popup .layer {
  position: fixed;
  z-index: 2002;
  bottom: -1035upx;
  width: 92%;
  padding: 0 4%;
  height: 1035upx;
  border-radius: 20upx 20upx 0 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.popup.show {
  display: block;
}
.popup.show .mask {
  animation: showPopup 0.2s linear both;
}
.popup.show .layer {
  animation: showLayer 0.2s linear both;
}
.popup.hide {
  display: block;
}
.popup.hide .mask {
  animation: hidePopup 0.2s linear both;
}
.popup.hide .layer {
  animation: hideLayer 0.2s linear both;
}
.popup.none {
  display: none;
}
</style>
