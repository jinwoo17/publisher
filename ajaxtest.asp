<!DOCTYPE html>
<html lang="ko">
<head>
<!--#Include Virtual="/includes/meta.asp"-->
<!--#Include Virtual="/includes/style.asp"-->
<!--#Include Virtual="/includes/script.asp"-->
<script type="text/javascript">
<!--
	
//-->
</script>
</head>
<body class="sub-body">
<div class="wrapper">

<style>
	.tab {overflow:hidden; margin-top:200px;}
	.tab li {position:relative; float:left; width:50%;}
	.tab li a {display:block; line-height:40px; text-align:center; border:1px solid #ccc; color:#333;}
	.tab li.on a {border:1px solid #ff6600; background-color: #ff6600; color:#fff;}

	.tab-container .tab-content {display:none; padding:30px;}
	.tab-container .tab-content.on {display:block;}
</style>
<script>
	jQuery(document).ready(function(e){

		// tab layer
		$(".tab-layer li").on('click', function(e){
			e.preventDefault();

			var tabIndex = $(this).index();
			var $tabWrap = $(this).closest(".tab-layer").next(".tab-container");			

			//Tab 변환
			$(this).addClass("on").siblings("li").removeClass("on");


			//Tab Content 변환			
			$tabWrap.find(".tab-content").removeClass("on");
			$tabWrap.find(".tab-content").eq(tabIndex).addClass("on");
		});

		// tab ajax
		$(".tab-ajax li").on('click', function(e){
			e.preventDefault();

			var tabIndex = $(this).index();
			var $tabCont = $(this).closest(".tab-ajax").next(".tab-container").find(".tab-content");
			var contUrl;

			//Tab 변환
			$(this).addClass("on").siblings("li").removeClass("on");


			//Tab Content 변환
			if (tabIndex == 0) {
				contUrl = "ajax_test.asp";

			} else {	
				contUrl = "ajax_test2.asp";				
			}

			$tabCont.load(contUrl);
		});	

		$(document).on('click', 'a.btn-pop', function(e){
			e.preventDefault();

			alert('popup');
		});	

	})

</script>	
	<!-- s: Container -->
	<div class="container">
		<!-- s: Content -->
		<main id="content" class="content news-wrap">
			<section>
				<ul class="tab tab-layer">
					<li class="on"><a href="#A">A</a></li>
					<li><a href="#B">B</a></li>	
				</ul>
				<div class="tab-container">
					<div id="A" class="tab-content on" tabindex="0">
						탭내용 A
					</div>
					<div id="B" class="tab-content" tabindex="0">
						탭내용 B
					</div>
				</div>
			</section>		
			<section>
				<ul class="tab tab-ajax">
					<li class="on"><a href="#C">A</a></li>
					<li><a href="#C">B</a></li>	
				</ul>
				<div class="tab-container">
					<div id="C" class="tab-content on" tabindex="0">
						탭내용 A
					</div>
				</div>
			</section>			
		</main>
		<!-- e: Content -->
	</div>
	<!-- e: Container -->

	<!-- s: Footer -->
	<!--#Include Virtual="/includes/footer.asp"-->
	<!-- e: Footer -->
</div>
</body>
</html>