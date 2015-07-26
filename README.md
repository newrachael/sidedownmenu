# sidedownmenu

Mouseover시에  DropDown Menu를 생성하는 jQuery 기반의 프로젝트 입니다.

총 3가지(html, javascript, css) 파일로 구성되어 있습니다.

Dropdown 메뉴를 추가해야하는 html 파일에 "sidedownmenu.js", "sidedownmenu.css"를 추가(include) 합니다.
html은 아래와 같이 구성합니다.

    <ul class="menu">
			<li>
				<a>MENU1</a>
			</li>
			<li class="hasSubMenu">
				<a>MENU2</a>
				<div class="submenu">
					<ul class="subsetmenu">
						<li><a href="#menu1">SUBMENU1</a></li>
						<li><a href="#menu1">SUBMENU2</a></li>
						<li><a href="#menu1">SUBMENU3</a></li>
					</ul>
				</div>
			</li>
			<li>
				<a>MENU3</a>
			</li>	
