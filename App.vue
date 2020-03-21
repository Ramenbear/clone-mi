<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	/* 布局库 */
	@import './common/zcm-main.css';
	/* 图标库 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 引入项目公共样式文件 */
	@import './common/common.css';
	page {
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	image{ width: 100%; }
	/* 主色调 */
	.main-text-color{ color: #FD6801; }
	.main-bg-color{ background: #FD6801; }
	.main-border-color{ border-color: #FD6801; }
	.main-bg-hover-color{ background: rgba(253, 104, 1, 0.85); }
</style>

