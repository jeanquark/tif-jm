<template>
    <!-- <v-content id="app" style="font: normal 100%/1 "Acme", Helvetica, sans-serif"> Cette ligne contient une erreur au niveau de "Acme" JM -->
    <v-content id="app" style="font: normal 100%/1, Helvetica, sans-serif">
        <v-container style="padding: 0; max-width: 1017px;">
            <!-- Fixed Header -->
            <!-- <v-toolbar dark> -->
            <v-container fluid id="header" class="header">
                <v-layout row>
                    <v-flex hidden-sm-and-down class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">Fan de l'équipe de suisse de football (1.34 PF)</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley <nuxt-link to="/myteams" style="color: white; text-decoration: none">(Fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }})</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">Equipe de Suisse (1.34 PF)</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex shrink>
					<nuxt-link to="/user/avatar" class="boxShadow">
						<div id="avatar" v-tooltip="'Salut Gaël!'">
							<img src="images/avatar.png" class="imgAvatar" />
						</div>
					</nuxt-link>
					<!-- <nuxt-link to="/user/avatar" class="boxShadow" v-if="loadedUser && loadedUser.avatar">
						<div id="avatar" v-tooltip="'Salut Gaël!'">
							<img v-lazy="loadedUser.avatar.url" class="imgAvatar" />
						</div>
					</nuxt-link> -->
                    </v-flex>
                    <v-flex hidden-sm-and-down grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="30"></v-progress-linear><span class="progress-bar-txt-white">30%</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="20" value="75"></v-progress-linear><span class="progress-bar-txt-black">75%</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <nuxt-link to="/plus" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="12" value="30"></v-progress-linear><span class="progress-bar-txt-white">30%</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="12" value="75"></v-progress-linear><span class="progress-bar-txt-black">75%</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <nuxt-link to="/plus" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-flex>  
                    <v-flex shrink>
                        <nuxt-link to="/myteams">
                        <div id="team">
                            <img src="/images/switzerland.png" class="imgTeam" />
                        </div>
                        </nuxt-link>
                    </v-flex>
                </v-layout>
            </v-container>
          
            <!-- Scrollable content -->
            <div class="content">
                <!-- <v-layout> -->
                <!-- <div class="container"> -->
					<nuxt-link to="/matchEncoursJoueur" class="matchPrincipal">
						<div class="cadreScore hidden-xs-only" style="position: absolute">
							<v-flex xs12 style="margin: 0; height: 100%">
								<v-layout align-start>
									<div class="nameTeam">
										Espagnol Barcelone <span class="vs">VS</span> <span class="nameOtherTeam">Real Madrid</span>
									</div>
									<span class="dateMatch">Mardi, 12 mars 2019 à 19:00</span>
								</v-layout>
							</v-flex>
						</div>
					</nuxt-link>
					<nuxt-link to="/matchEncours" class="matchPrincipal">
					<div class="cadreScore hidden-sm-and-up" style="position: absolute">
						<v-flex xs12 style="margin: 0; height: 100%">
							<v-layout align-start>
								<div class="nameTeam">
									Espagnol Barcelone<br />
									<span class="nameOtherTeam">Real Madrid</span> <span class="vs">VS</span> 
								</div>
								<span class="dateHourMatch dateMatch">12.03.2019 - 19:00</span>
							</v-layout>
						</v-flex>
					</div> 
					</nuxt-link>
					
					<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 2800 980" style="enable-background:new 0 0 2800 980;" xml:space="preserve">
					<g>
						<rect x="0" y="1" class="st0" width="1400" height="980"/>
						<path class="st1" d="M0,288.6V981h1400V288.6c-189.2-106.2-433.4-170.2-700-170.2S189.2,182.4,0,288.6z"/>
						<path class="st2" d="M0,480.5V981h1400V480.5c-162.4-138.8-415.6-228.1-700-228.1C415.6,252.3,162.4,341.6,0,480.5z"/>
						<path class="st3" d="M1039.5,457.1c-39.2-20.6-62.9-31.7-103.4-16.1c-115.9,44.6-347.1,219.3-463,134.1
							c-12.2-9-209.9-86.7-234.4-93.9c-32.2-9.4-32.2-8.5-65.2-8.5c-16.2,0-95.1,20-173.5,41.2V981h1400V587.8
							c-20.7-7.9-41-13.6-49.8-16.2C1249.7,542.7,1133.2,506.4,1039.5,457.1z"/>
						<polygon class="st4" points="1387.6,641.9 1350.1,641.9 1350.1,606.9 1354.7,606.9 1354.7,599.9 1337.6,582.8 1337.6,570.4 
							1330.5,570.4 1330.5,582.2 1165,582.2 1156.8,582.7 1144.9,596.7 1144.9,583 1120.8,583 1120.8,563.6 1116.8,563.6 1115.1,566.6 
							1115.1,577.4 1093.4,577.4 1093.4,546.9 1088.2,546.9 1084.8,550.2 1084.8,556.9 1081,556.9 1078.8,554.7 1062.3,554.7 
							1062.3,547.5 1058.9,547.5 1054.7,549.9 1054.7,554.8 1047.5,554.8 1046.8,552.3 1043.2,552.3 1043.2,545.4 1039.5,545.4 
							1039.5,549.4 1009.9,549.4 1009.9,547.4 1005.2,547.4 1002.2,549.1 1002.2,553.3 987.7,553.3 987.7,549.3 979.9,541.5 964.7,541.5 
							954.3,547.5 954.3,553.5 943,553.5 943,546.8 936.5,548.6 936.5,553.5 888.8,553.5 888.8,546.9 882.9,548.5 882.9,553.3 
							870.2,553.3 867.1,556.4 860.6,556.4 860.6,544.5 863.6,544.5 863.6,541.2 860.8,541.2 860.8,517.2 852,517.2 842.7,507.9 
							826.4,507.9 821,502.4 815.2,523.9 804.4,523.9 795.4,518.7 780.4,518.7 774,525.2 770,525.2 766.8,519.6 753.3,519.6 753.3,525.7 
							747.4,519.8 742,519.8 742,542.9 733.7,542.9 733.7,537.4 730.9,536.7 730.9,532.1 727.3,531.2 727.3,519.3 714.3,519.3 
							709.5,514.6 706.8,519.3 704.8,519.3 703.3,524.8 700.6,524.8 700.6,501.8 701.9,501.8 701.9,495.2 683.3,495.2 683.3,501.9 
							684.8,501.9 684.8,522.4 674.6,522.4 674.6,527.3 672.5,527.3 672.5,524 663.7,524 663.7,526.9 659.6,526.9 659.6,521.4 
							653.9,521.4 653.9,527.2 642.9,527.2 642.9,516 617.4,516 617.4,526.6 606.9,526.6 606.9,515 598.9,515 598.9,527.2 595.9,531.8 
							595.9,516.9 585.4,516.9 585.4,534 580.1,543.3 580.1,608.3 572,608.3 565.5,604.6 479,604.6 468.8,622.3 468.8,629.9 464,634.7 
							464,648.2 469.3,648.2 469.3,656.2 449,656.2 444.8,652 437.3,659.5 430.5,659.5 426.3,663.7 421.1,660.7 411.4,660.7 411.4,648 
							408.8,648 407.6,637.2 404.7,637.2 398.9,643 394,638 390.9,643.3 386.8,643.3 386.8,628 383.6,628 383.6,621.6 382.4,621.6 
							381.7,624.2 379.6,624.2 379,622 376.9,622 376.9,624.1 374.4,624.1 366.8,607 361.2,623.9 353.5,623.9 353.5,620.7 352,619.2 
							345.7,619.2 345.7,616.7 341.7,616.7 341.7,620.8 340.1,622.4 331.2,622.4 328.7,620.9 328.7,615.7 324.5,615.7 324.5,619.6 
							319.3,615.9 314.6,618.8 307.4,611.6 307.4,608.4 309.8,608.4 309.8,599.5 306.8,599.5 305.5,595.2 307.6,595.2 307.6,593 
							305.2,593 296.8,582.1 289.3,593.2 287.3,593.2 287.3,595.3 290.1,595.3 287.3,600.3 283.4,600.3 283.4,607.6 286.6,607.6 
							286.5,612.1 280,612.1 274.6,616.5 270.6,604.3 268.1,611.2 262.8,602.1 262.8,582.5 255.5,576.3 248.4,583.1 248.4,602.6 
							246.8,607 233.1,620.6 233.1,618.5 225.5,618.5 225.5,615.1 222.4,612 214.8,612 210.9,616.2 207.3,602.9 207.3,623.2 190.5,623.2 
							190.5,612.3 187.2,610.4 187.2,606.9 167.4,606.9 164.2,608.8 161.3,605.4 155.7,605.4 150.6,608.9 144.7,605.5 137.7,612.6 
							126.8,612.6 126.8,570.2 124.7,569.6 124.7,539 123.2,536.1 120.4,507.6 115.4,537.7 115.4,522.5 113.7,521.7 112.2,504.8 
							110.5,511.2 108.1,511.2 96.7,378.7 83.7,511.9 80.4,511.9 78.7,505.5 77.8,521.8 75.5,522.4 75.5,537.6 71,507.4 68.2,538 
							66.4,541.2 66.5,569.9 62.8,570.9 62.8,621.2 59,602 56.7,623.2 54,627.9 46,627.9 41.6,633.5 24.3,634 22.6,631.5 17.4,631.5 
							15.6,635.4 7.3,635.8 6,644 4.1,644.1 0,635.4 0,981 1400,981 1400,665.6 1393.5,663.9"/>
						<polygon class="st5" points="778.2,873.9 764.6,860.4 753.9,860.4 742.4,848.9 732.7,846.3 725.1,817.7 676.3,817.7 676.3,772.1 
							682.3,772.1 682.3,763 660,740.7 660,724.6 650.8,724.6 650.8,740 435.3,740 424.6,740.6 409.1,758.9 409.1,741 377.7,741 
							377.7,715.8 372.6,715.8 370.4,719.6 370.4,733.7 342.1,733.7 342.1,694 335.3,694 330.9,698.4 330.9,707 325.9,707 323.1,704.2 
							301.5,704.2 301.5,694.7 297.1,694.7 291.7,697.9 291.7,704.2 282.3,704.2 281.5,701.1 276.8,701.1 276.8,692.1 271.9,692.1 
							271.9,697.3 233.3,697.3 233.3,694.6 227.2,694.6 223.3,696.8 223.3,702.3 204.5,702.3 204.5,697.1 194.3,686.9 174.6,686.9 
							161,694.8 161,702.6 146.3,702.6 146.3,693.9 137.8,696.2 137.8,702.5 75.7,702.5 75.7,694.1 68,696.1 68,702.4 51.5,702.4 
							47.4,706.4 38.9,706.4 38.9,690.9 42.8,690.9 42.8,686.6 39.2,686.6 39.2,655.4 27.8,655.4 15.6,643.2 6.1,643.2 6,644 4.1,644.1 
							3.7,643.2 0,643.2 0,981 805.5,981 805.5,885.8 793.7,873.9 	"/>
						<path class="st6" d="M1396.5,430.1v-16.7l-7.6-7.6l-9,2.4v9.3h-21.7l-15-40.9l4.9-2.2l-3-4.2v-26.5l2.6-2.6
							c-8.1-26.4-19-40.1-30-41.8v-13.9l6.5-8.9h-7.8l-2-66.5l-2,66.5h-7.8l6.5,8.9v14.2c-9.9,2.7-19.4,15.5-26.4,37.9l3.4,4.6V366
							l-7,6.6l5.8,2.8l-17.3,42.1l-14.6,1.1l-2.7-8.9l-12.8-0.8c0,0-8.5,9.4-5.4,15.4c3.1,5.9,3.6,7,3.6,7l-9,32.8l3.8,5.9
							c0,0-5.7,5.1-7.6,10.1s-0.8,18-0.8,18l-0.3,66.4h-17.4l15.5,15.5l1.9,14.3l3.1,0.8v103h-4v-6.3h1.7v-9.1h-9.5v8.8h3v5.8h-23.5V655
							H1168v39.4h-5.5l-16.6-28.8H1130v-7.5h3.6V653l-4.5-1.2l-14-19.1l-16.1,18.1h-92.1v3.8h-3.8v40.5h-9v-3.8h2v-22.5h-30.8v22.8h2v5.9
							h-8.5v-4.2h-25.9v7.4H895v-99.4h-74.3v57.2H744l-8.1-6.8h-32.4v4h-4.7v4.2h2.2v5.3h-14.7v-5.1h2.2v-5h-6.2l-2.9-5h-27.5l-4.5-16.9
							h-13.1l-11.7,20.2l4.5,5.5v7.6h-7.6l-4.8-4.8h-38.6l-5.1,5.1h-5.7v1.9l2.8,0.7v9.2h-4.3v2.7h4.2v20L530.5,737h-27.8v12l1.4,0.4
							v33.1l-21.2-11.2l-17.4,17.5l3.6,1.9v5.5h-7.8V791H247.7v-13.6h-67.8v12.2h-8.8v3.1h6.8V823h-54.5v67.5H55.9l-17.1-9.9H0V981h1400
							V469.2v-10.1l-7.8-29H1396.5z"/>
						<g>
							<path class="st3" d="M361,197.2c0.4-5.2-93.7-7.2-101.5-7c-29.2,0.8-43.1-10.5-65.5-15.4c-10-2.2-46.2-0.7-48.9-3.8
								c-19.1-22.4-39.8,12-60-4c-10.5-8.3-31.6,0.2-30.4-4.9c3.2-14.3-14.4-7.7-15.6-7.8c-4.9-0.4-15.8,7.2-17.1,0.7
								c-4-19.6-12.2-28.2-22-29.5v109.9c13.2-0.3,24.4-0.5,31.5,0.1c17,1.4,28.3,4.3,45.2-5.9c11.3-6.9,43.4-9,54.4-3.2
								c11.3,6,53,4.5,59.2-3.9c10.3-14,50.7-6.8,65.2-12.1c7.1-2.6,79.9-4.4,88.4-3.7C350.3,207.1,368,198.6,361,197.2z"/>
							<path class="st3" d="M1255.8,21c-7.1,3.8-36.9-4.9-55.1,11.4c-12.6,11.4-63.1-3.9-93.2,2.2c-17.9,3.7-47.6,0-78.1,6.3
								c-14.9,3.1-29.1,7.4-11.6,10.6c13.9,2.6,58.6,3.3,62.7,11.5c14.4,29,66.4,0.6,93,19.5c4.2,3,45.7-4.3,57.4-4.3
								c12.6,0,25.1,21.4,46.9,23.3c39.3,3.4,22.4,8.6,60.9-7.3c10.7-4.4,35.2-3.3,61.4-1.4V4.4c-14.5,9.6-23.6-3.8-50.9,15.6
								C1335.2,30,1292.4,1.4,1255.8,21z"/>
							<path class="st3" d="M907.8,268.8c0.3-3.6-64.8-5-70.2-4.9c-20.2,0.6-29.8-7.3-45.3-10.7c-6.9-1.5-32-0.5-33.8-2.7
								c-13.2-15.5-27.5,8.3-41.5-2.7c-7.3-5.7-21.8,0.2-21-3.4c2.2-9.9-9.9-5.3-10.8-5.4c-3.4-0.3-10.9,5-11.8,0.5
								c-7-34.4-32.9-19.7-47.6,1.7c-6.3,0-13.8,0.4-20,1.1c-10.5,1.3-28.9,18.5-29.2,25.2c-2,36.6,80.6,25.8,103.4,27.7
								c11.8,1,19.6,3,31.3-4.1c7.8-4.7,30-6.2,37.6-2.2c7.8,4.2,36.7,3.1,40.9-2.7c7.1-9.7,35.1-4.7,45.1-8.4c4.9-1.8,55.3-3.1,61.1-2.6
								C900.4,275.7,912.6,269.8,907.8,268.8z"/>
						</g>
						<a xlink:href="/gamemode_theme">
							<path id="plane" class="st4" d="M330.9,477.6c-2.3,6.7-20.4,4.3-27,4.3c-11.2,0-61.5-4.8-57.4,10.5c1.4,5.2,27.4,2.1,32.4,4.7l11.2,5.8
							c6.1,3.2,13.2,1.9,19.8,1.4c1.2-0.1,6-0.9,1.2-2.6c-3.3-1.2-6.9-4-11.7-6.3l21.2,0.1c13,0.1,16.5-3.3,16.5-15.3
							C337.2,473.6,333.1,471.4,330.9,477.6z" onmouseover="evt.target.setAttribute('opacity', '0.5');" onmouseout="evt.target.setAttribute('opacity','1)');" />
						</a>
						<text font-size="100" x="300" y="450" display="none" style="font-size:30px;font-weight:bold;fill:#000000">LA PLAGE
						<animate fill="freeze" dur="0.1s" begin="plane.mouseover" from="none" to="block" attributeName="display"></animate>
						<animate fill="freeze" dur="0.1s" begin="plane.mouseout" from="block" to="none" attributeName="display"></animate>
						</text>
						<path class="st6" d="M1180.6,597.8c-3.3-0.4-2.9,0.4-2.7-3.7c0-0.9-3.9-1-4.1-0.4c-0.6,1.4,2,3.7-1.6,3.8c-0.3,0-0.5-0.2-0.9-0.3
							c-1.7-0.7-6.1-2.3-7.2,0.9c-2.3,0.8,4.4,0.8,4.9,1.4c0.2,0.2,1.4,1.2,1.5,1.2c0.2,0.5,0.8,0.7,1.4,2.5c0.2,0.7-0.7,1.2-0.7,2.7
							c0.6,0,1-1.9,2.7-1.9c0.1,0,1.8-0.2,2-0.4c1.9-2.2,4.8-1.1,7.4-0.8c0.8,0.1,3.8,2.4,2.5-1.3
							C1185.1,599.6,1182.4,598.1,1180.6,597.8z"/>
						<path class="st6" d="M1201.9,587.2c-2.4-1-2.6,0.3-3.4,0.8c-3.2,2-1,0.3-3.3-1.1c-1.6-1-4.1-1.7-4.6-2c-0.9-0.6-3.2,3.9-2.6,5.7
							c0.2,0.3,0.8,0.5,1.1,0.5c3.6-0.1,0.7-0.7,2.1-2.5c0.5-0.6,2.8,2.1,3.2,2.7c1.1,1.9-0.6,2.4-0.2,3.1c0.7,1.1,0.8-1.1,1.7-1.1
							c1.5,0.1,1,1.3,1,2.3c0.2,0,4-2.7,1.8-3.7c3.1,0.6,3.1,0.1,5.2,2.6c0.9,1.1,0.7,2.2,1.8,1.6
							C1206.5,595.9,1205.9,588.9,1201.9,587.2z"/>
					</g>
					<g>
						<rect x="1399.9" y="1" class="st0" width="1400" height="980"/>
						<path class="st1" d="M1399.9,288.6V981h1400V288.6c-189.2-106.2-433.4-170.2-700-170.2S1589.1,182.4,1399.9,288.6z"/>
						<path class="st2" d="M1399.9,480.5V981h1400V480.5c-162.4-138.8-415.6-228.1-700-228.1C1815.5,252.3,1562.3,341.6,1399.9,480.5z"/>
						<path class="st3" d="M2439.4,457.1c-39.2-20.6-62.9-31.7-103.4-16.1c-115.9,44.6-347.1,219.3-463,134.1
							c-12.2-9-209.9-86.7-234.4-93.9c-32.2-9.4-32.2-8.5-65.2-8.5c-16.2,0-95.1,20-173.5,41.2V981h1400V587.8
							c-20.7-7.9-41-13.6-49.8-16.2C2649.6,542.7,2533.1,506.4,2439.4,457.1z"/>
						<polygon class="st4" points="2787.5,641.9 2750,641.9 2750,606.9 2754.6,606.9 2754.6,599.9 2737.5,582.8 2737.5,570.4 
							2730.4,570.4 2730.4,582.2 2564.9,582.2 2556.7,582.7 2544.8,596.7 2544.8,583 2520.7,583 2520.7,563.6 2516.7,563.6 2515,566.6 
							2515,577.4 2493.3,577.4 2493.3,546.9 2488.1,546.9 2484.7,550.2 2484.7,556.9 2480.9,556.9 2478.7,554.7 2462.2,554.7 
							2462.2,547.5 2458.8,547.5 2454.6,549.9 2454.6,554.8 2447.4,554.8 2446.7,552.3 2443.1,552.3 2443.1,545.4 2439.4,545.4 
							2439.4,549.4 2409.8,549.4 2409.8,547.4 2405.1,547.4 2402.1,549.1 2402.1,553.3 2387.6,553.3 2387.6,549.3 2379.8,541.5 
							2364.6,541.5 2354.2,547.5 2354.2,553.5 2342.9,553.5 2342.9,546.8 2336.4,548.6 2336.4,553.5 2288.7,553.5 2288.7,546.9 
							2282.8,548.5 2282.8,553.3 2270.1,553.3 2267,556.4 2260.5,556.4 2260.5,544.5 2263.5,544.5 2263.5,541.2 2260.7,541.2 
							2260.7,517.2 2251.9,517.2 2242.6,507.9 2226.3,507.9 2220.9,502.4 2215.1,523.9 2204.3,523.9 2195.3,518.7 2180.3,518.7 
							2173.9,525.2 2169.9,525.2 2166.7,519.6 2153.2,519.6 2153.2,525.7 2147.3,519.8 2141.9,519.8 2141.9,542.9 2133.6,542.9 
							2133.6,537.4 2130.8,536.7 2130.8,532.1 2127.2,531.2 2127.2,519.3 2114.2,519.3 2109.4,514.6 2106.7,519.3 2104.7,519.3 
							2103.2,524.8 2100.5,524.8 2100.5,501.8 2101.8,501.8 2101.8,495.2 2083.2,495.2 2083.2,501.9 2084.7,501.9 2084.7,522.4 
							2074.5,522.4 2074.5,527.3 2072.4,527.3 2072.4,524 2063.6,524 2063.6,526.9 2059.5,526.9 2059.5,521.4 2053.8,521.4 2053.8,527.2 
							2042.8,527.2 2042.8,516 2017.3,516 2017.3,526.6 2006.8,526.6 2006.8,515 1998.8,515 1998.8,527.2 1995.8,531.8 1995.8,516.9 
							1985.3,516.9 1985.3,534 1980,543.3 1980,608.3 1971.9,608.3 1965.4,604.6 1878.9,604.6 1868.7,622.3 1868.7,629.9 1863.9,634.7 
							1863.9,648.2 1869.2,648.2 1869.2,656.2 1848.9,656.2 1844.7,652 1837.2,659.5 1830.4,659.5 1826.2,663.7 1821,660.7 1811.3,660.7 
							1811.3,648 1808.7,648 1807.5,637.2 1804.6,637.2 1798.8,643 1793.9,638 1790.8,643.3 1786.7,643.3 1786.7,628 1783.5,628 
							1783.5,621.6 1782.3,621.6 1781.6,624.2 1779.5,624.2 1778.9,622 1776.8,622 1776.8,624.1 1774.3,624.1 1766.7,607 1761.1,623.9 
							1753.4,623.9 1753.4,620.7 1751.9,619.2 1745.6,619.2 1745.6,616.7 1741.6,616.7 1741.6,620.8 1740,622.4 1731.1,622.4 
							1728.6,620.9 1728.6,615.7 1724.4,615.7 1724.4,619.6 1719.2,615.9 1714.5,618.8 1707.3,611.6 1707.3,608.4 1709.7,608.4 
							1709.7,599.5 1706.7,599.5 1705.4,595.2 1707.5,595.2 1707.5,593 1705.1,593 1696.7,582.1 1689.2,593.2 1687.2,593.2 1687.2,595.3 
							1690,595.3 1687.2,600.3 1683.3,600.3 1683.3,607.6 1686.5,607.6 1686.4,612.1 1679.9,612.1 1674.5,616.5 1670.5,604.3 1668,611.2 
							1662.7,602.1 1662.7,582.5 1655.4,576.3 1648.3,583.1 1648.3,602.6 1646.7,607 1633,620.6 1633,618.5 1625.4,618.5 1625.4,615.1 
							1622.3,612 1614.7,612 1610.8,616.2 1607.2,602.9 1607.2,623.2 1590.4,623.2 1590.4,612.3 1587.1,610.4 1587.1,606.9 1567.3,606.9 
							1564.1,608.8 1561.2,605.4 1555.6,605.4 1550.5,608.9 1544.6,605.5 1537.6,612.6 1526.7,612.6 1526.7,570.2 1524.6,569.6 
							1524.6,539 1523.1,536.1 1520.3,507.6 1515.3,537.7 1515.3,522.5 1513.6,521.7 1512.1,504.8 1510.4,511.2 1508,511.2 1496.6,378.7 
							1483.6,511.9 1480.3,511.9 1478.6,505.5 1477.7,521.8 1475.4,522.4 1475.4,537.6 1470.9,507.4 1468.1,538 1466.3,541.2 
							1466.4,569.9 1462.7,570.9 1462.7,621.2 1458.9,602 1456.6,623.2 1453.9,627.9 1445.9,627.9 1441.5,633.5 1424.2,634 1422.5,631.5 
							1417.3,631.5 1415.5,635.4 1407.2,635.8 1405.9,644 1404,644.1 1399.9,635.4 1399.9,981 2799.9,981 2799.9,665.6 2793.4,663.9 	"/>
						<polygon class="st5" points="2178.1,873.9 2164.5,860.4 2153.8,860.4 2142.3,848.9 2132.6,846.3 2125,817.7 2076.2,817.7 
							2076.2,772.1 2082.2,772.1 2082.2,763 2059.9,740.7 2059.9,724.6 2050.7,724.6 2050.7,740 1835.2,740 1824.5,740.6 1809,758.9 
							1809,741 1777.6,741 1777.6,715.8 1772.5,715.8 1770.3,719.6 1770.3,733.7 1742,733.7 1742,694 1735.2,694 1730.8,698.4 
							1730.8,707 1725.8,707 1723,704.2 1701.4,704.2 1701.4,694.7 1697,694.7 1691.6,697.9 1691.6,704.2 1682.2,704.2 1681.4,701.1 
							1676.7,701.1 1676.7,692.1 1671.8,692.1 1671.8,697.3 1633.2,697.3 1633.2,694.6 1627.1,694.6 1623.2,696.8 1623.2,702.3 
							1604.4,702.3 1604.4,697.1 1594.2,686.9 1574.5,686.9 1560.9,694.8 1560.9,702.6 1546.2,702.6 1546.2,693.9 1537.7,696.2 
							1537.7,702.5 1475.6,702.5 1475.6,694.1 1467.9,696.1 1467.9,702.4 1451.4,702.4 1447.3,706.4 1438.8,706.4 1438.8,690.9 
							1442.7,690.9 1442.7,686.6 1439.1,686.6 1439.1,655.4 1427.7,655.4 1415.5,643.2 1406,643.2 1405.9,644 1404,644.1 1403.6,643.2 
							1399.9,643.2 1399.9,981 2205.4,981 2205.4,885.8 2193.6,873.9 	"/>
						<path class="st6" d="M2796.4,430.1v-16.7l-7.6-7.6l-9,2.4v9.3h-21.7l-15-40.9l4.9-2.2l-3-4.2v-26.5l2.6-2.6
							c-8.1-26.4-19-40.1-30-41.8v-13.9l6.5-8.9h-7.8l-2-66.5l-2,66.5h-7.8l6.5,8.9v14.2c-9.9,2.7-19.4,15.5-26.4,37.9l3.4,4.6V366
							l-7,6.6l5.8,2.8l-17.3,42.1l-14.6,1.1l-2.7-8.9l-12.8-0.8c0,0-8.5,9.4-5.4,15.4c3.1,5.9,3.6,7,3.6,7l-9,32.8l3.8,5.9
							c0,0-5.7,5.1-7.6,10.1s-0.8,18-0.8,18l-0.3,66.4h-17.4l15.5,15.5l1.9,14.3l3.1,0.8v103h-4v-6.3h1.7v-9.1h-9.5v8.8h3v5.8h-23.5V655
							h-26.6v39.4h-5.5l-16.6-28.8h-15.9v-7.5h3.6V653l-4.5-1.2l-14-19.1l-16.1,18.1h-92.1v3.8h-3.8v40.5h-9v-3.8h2v-22.5h-30.8v22.8h2
							v5.9h-8.5v-4.2h-25.9v7.4h-37.9v-99.4h-74.3v57.2h-76.7l-8.1-6.8h-32.4v4h-4.7v4.2h2.2v5.3h-14.7v-5.1h2.2v-5h-6.2l-2.9-5h-27.5
							l-4.5-16.9h-13.1l-11.7,20.2l4.5,5.5v7.6h-7.6l-4.8-4.8H1976l-5.1,5.1h-5.7v1.9l2.8,0.7v9.2h-4.3v2.7h4.2v20l-37.5,35.7h-27.8v12
							l1.4,0.4v33.1l-21.2-11.2l-17.4,17.5l3.6,1.9v5.5h-7.8V791h-213.6v-13.6h-67.8v12.2h-8.8v3.1h6.8V823h-54.5v67.5h-67.5l-17.1-9.9
							h-38.8V981h1400V469.2v-10.1l-7.8-29H2796.4z"/>
						<g>
							<path class="st3" d="M1760.9,197.2c0.4-5.2-93.7-7.2-101.5-7c-29.2,0.8-43.1-10.5-65.5-15.4c-10-2.2-46.2-0.7-48.9-3.8
								c-19.1-22.4-39.8,12-60-4c-10.5-8.3-31.6,0.2-30.4-4.9c3.2-14.3-14.4-7.7-15.6-7.8c-4.9-0.4-15.8,7.2-17.1,0.7
								c-4-19.6-12.2-28.2-22-29.5v109.9c13.2-0.3,24.4-0.5,31.5,0.1c17,1.4,28.3,4.3,45.2-5.9c11.3-6.9,43.4-9,54.4-3.2
								c11.3,6,53,4.5,59.2-3.9c10.3-14,50.7-6.8,65.2-12.1c7.1-2.6,79.9-4.4,88.4-3.7C1750.2,207.1,1767.9,198.6,1760.9,197.2z"/>
							<path class="st3" d="M2655.7,21c-7.1,3.8-36.9-4.9-55.1,11.4c-12.6,11.4-63.1-3.9-93.2,2.2c-17.9,3.7-47.6,0-78.1,6.3
								c-14.9,3.1-29.1,7.4-11.6,10.6c13.9,2.6,58.6,3.3,62.7,11.5c14.4,29,66.4,0.6,93,19.5c4.2,3,45.7-4.3,57.4-4.3
								c12.6,0,25.1,21.4,46.9,23.3c39.3,3.4,22.4,8.6,60.9-7.3c10.7-4.4,35.2-3.3,61.4-1.4V4.4c-14.5,9.6-23.6-3.8-50.9,15.6
								C2735.1,30,2692.3,1.4,2655.7,21z"/>
							<path class="st3" d="M2307.7,268.8c0.3-3.6-64.8-5-70.2-4.9c-20.2,0.6-29.8-7.3-45.3-10.7c-6.9-1.5-32-0.5-33.8-2.7
								c-13.2-15.5-27.5,8.3-41.5-2.7c-7.3-5.7-21.8,0.2-21-3.4c2.2-9.9-9.9-5.3-10.8-5.4c-3.4-0.3-10.9,5-11.8,0.5
								c-7-34.4-32.9-19.7-47.6,1.7c-6.3,0-13.8,0.4-20,1.1c-10.5,1.3-28.9,18.5-29.2,25.2c-2,36.6,80.6,25.8,103.4,27.7
								c11.8,1,19.6,3,31.3-4.1c7.8-4.7,30-6.2,37.6-2.2c7.8,4.2,36.7,3.1,40.9-2.7c7.1-9.7,35.1-4.7,45.1-8.4c4.9-1.8,55.3-3.1,61.1-2.6
								C2300.3,275.7,2312.5,269.8,2307.7,268.8z"/>
						</g>
						<path class="st4" d="M1730.8,477.6c-2.3,6.7-20.4,4.3-27,4.3c-11.2,0-61.5-4.8-57.4,10.5c1.4,5.2,27.4,2.1,32.4,4.7l11.2,5.8
							c6.1,3.2,13.2,1.9,19.8,1.4c1.2-0.1,6-0.9,1.2-2.6c-3.3-1.2-6.9-4-11.7-6.3l21.2,0.1c13,0.1,16.5-3.3,16.5-15.3
							C1737.1,473.6,1733,471.4,1730.8,477.6z"/>
						<path class="st6" d="M2580.5,597.8c-3.3-0.4-2.9,0.4-2.7-3.7c0-0.9-3.9-1-4.1-0.4c-0.6,1.4,2,3.7-1.6,3.8c-0.3,0-0.5-0.2-0.9-0.3
							c-1.7-0.7-6.1-2.3-7.2,0.9c-2.3,0.8,4.4,0.8,4.9,1.4c0.2,0.2,1.4,1.2,1.5,1.2c0.2,0.5,0.8,0.7,1.4,2.5c0.2,0.7-0.7,1.2-0.7,2.7
							c0.6,0,1-1.9,2.7-1.9c0.1,0,1.8-0.2,2-0.4c1.9-2.2,4.8-1.1,7.4-0.8c0.8,0.1,3.8,2.4,2.5-1.3C2585,599.6,2582.3,598.1,2580.5,597.8z
							"/>
						<path class="st6" d="M2601.8,587.2c-2.4-1-2.6,0.3-3.4,0.8c-3.2,2-1,0.3-3.3-1.1c-1.6-1-4.1-1.7-4.6-2c-0.9-0.6-3.2,3.9-2.6,5.7
							c0.2,0.3,0.8,0.5,1.1,0.5c3.6-0.1,0.7-0.7,2.1-2.5c0.5-0.6,2.8,2.1,3.2,2.7c1.1,1.9-0.6,2.4-0.2,3.1c0.7,1.1,0.8-1.1,1.7-1.1
							c1.5,0.1,1,1.3,1,2.3c0.2,0,4-2.7,1.8-3.7c3.1,0.6,3.1,0.1,5.2,2.6c0.9,1.1,0.7,2.2,1.8,1.6
							C2606.4,595.9,2605.8,588.9,2601.8,587.2z"/>
					</g>
					</svg>

                <!-- </div> -->
                <!-- </v-layout> -->
            </div>
            
            <!-- Fixed Footer -->
            <div id="footer">
                <!-- <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br /> -->

                    <div class="barreOrangered"></div>
                    <div class="barreBlack"></div>
                    <div id="dock-container">
                        <ul>
                            <li>
                                <nuxt-link to="/myresult"><img src="/images/menuClassement.png">
                                <span class="textMenu">Mes classements</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/skillInfluence"><img src="/images/menuSkill.png">
                                <span class="textMenu">Mes compétences</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/gamemode_jm"><img src="/images/menuAgenda.png">
                                <span class="textMenu">Aujourd'hui</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/inventoryMain"><img src="/images/menuInventory.png">
                                <span class="textMenu">Mon inventaire</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/scoremode_gm"><img src="/images/menuScoremode.png">
                                <span class="textMenu">ScoreMode</span></nuxt-link>
                            </li>
                        </ul>
                    </div>
            </div>
            
        </v-container>
  </v-content>
</template>

<script>
    import ActionsCard from '~/components/ActionsCard'
    export default {
        head: {
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }                
			]
        },
        components: { ActionsCard },
        layout: 'layoutLandingPage',
        data () {
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ],
                action: '',
                actionsModal: false
            } 
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            },
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
        },
        methods: {
            async openActionsDialog (item) {
                console.log('openActionsDialog: ', item)
                this.action = item
                this.actionsModal = true
                const response = await this.$store.dispatch('actionsCards/loadedActions', item)
                console.log('response: ', response)
                // return window.location.href = 'https://fr.wikipedia.org/wiki/Camp_Nou'
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    /* Content */
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;;
        overflow-x: auto;
        height: 100%;
    }
    #footer {
        background-color: red;
        color: #fff;
        /*height: 100px;*/
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content svg {
            height: 99%;
        }
    }
    /* End Content */

    /* Header */
    #header {
        max-height: 162px;
        padding: 0;
        top:0px;
        left:0px;
        background-color: black;
        z-index: 1;
        border-bottom: 3px solid orangered;
        position: sticky;
    }
    .header {
        position: relative;
    }
    .barreHeader {
        position:absolute;
        top: 120px;
        width: 100%;
        background-color: orangered;
        z-index: -1;
        margin: 0;
        padding: 0;
    }
	.barreHeaderLeft1 {
	margin-left: 160px; 
	float: left; 
	margin-top: 6px;
	}
	.barreHeaderLeft2 {
	color: white; 
	float: left; 
	margin-top: 14px;
    margin-left: 5px;
	}
	.barreHeaderRight {
	margin-right: 160px; 
	color: white;  
	float: right; 
	margin-top: 14px;
	}
	.cadreHeader1 {
	padding: 20px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered;
	border-left: 1px solid orangered;	
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
	.cadreHeader {
	padding: 15px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered; 
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
    #avatar {
        background-color: orangered;
        box-shadow: 0 3px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 0 0;
    }
    .imgAvatar {
        height: 100%;
        width: 100%;
        border-radius: 0 0 0 0;
    }
    #team {
        background-color: orangered;
        box-shadow: 0 3px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 0 0;
    }
    .imgTeam {
        height: 100%;
        width: 100%;
        border-radius: 0 0 0 0;
    }
    .imgTeamSmall {
        height: 20px;
        margin-top: 5px;
    }
    .levelHeader {
        font-weight: 700;
        font-size: 36px;  /* Preferred icon size */
        background-color: orangered;
        color: white;
        border-radius: 10px;
    }
    .plusOrangered {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: white;
        font-weight: 700;
        font-size: 1.2em;
        background-color: orangered;
    }
    .aPlusOrangered :hover {
        color: orangered;
        background-color: white;
        border-bottom: 1px solid orangered;
        border-left: 1px solid orangered;
    }
	.progressYellow {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	}
	.progressOrange {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	margin-top: 25px;
	}
	.plusYellow {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: black;
        font-weight: 700;
        font-size: 1.2em;
        background-color: yellow;
    }
    .aPlusYellow :hover {
        color: black;
        background-color: white;
        border-bottom: 1px solid yellow;
        border-left: 1px solid yellow;
    }
    .plusGreen {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: white;
        font-weight: 700;
        font-size: 1.2em;
        background-color: green;
    }
    .aPlusGreen :hover {
        color: green;
        background-color: white;
        border-bottom: 1px solid green;
        border-left: 1px solid green;
    }
    .dollarFan {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: green;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 4px;
    }
    .token {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: orangered;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 5px;
    }
	.cadreScore {
    width: 1017px;
    background-color: white;
    margin-top: 50px;
	color: orangered;
	}
	.nameTeam {
	position: relative; 
	font-size: 50px; 
	text-decoration: none; 
	text-transform: uppercase; 
	top: 0px; 
	left: 30px; 
	text-shadow: black 3px 3px 2px;
	}
	.vs { 
	position: relative; 
	top: 3px; 
	font-size: 15px; 
	text-shadow: none; 
	margin-left: 10px;
	}
	.nameOtherTeam {
	position: relative; 
	top: 1px; 
	font-size: 25px; 
	text-shadow: none; 
	margin-left: 8px;
	}
	.dateHourMatch {
	position: absolute; 
	font-size: 15px; 
	color: orangered; 
	text-shadow: none; 
	margin-right: 3px; 
	margin-top: 3px; 
	right: 0
	}	
	.pd-left5 {
	padding-left: 5px;
	}
	.imgLogoEquipe {
	max-width: 30px;
	max-height: 30px;
	}
	.teamTextSize {
	font-size: 1.2em;
	}
	.progress-bar-txt-black {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: black;
		font-weight: 700;
	}
	.progress-bar-txt-white {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: white;
		font-weight: 700;
	}
	.material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    }   
    /* End Header */
    
    

    /* Footer */
    .barreOrangered {
        width: 100%;
        padding: 0;
        margin: 0; 
        height: 3px;
        background-color: orangered;
    }
    .barreBlack {
        width: 100%;
        padding: 0;
        margin: 0;
        height: 8px;
        background-color: black;
    }
    
    #dock-container {
        height: 80px;
        padding: 0;
        margin: 0;
        bottom: 0;
        background-color: orangered;
        border: none;
        border-top: 4px solid orangered;
    }

    #dock-container li#active img {
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
    }

    #dock-container li {
        width: 17%;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: inline-block;
        position: relative;
        padding-top: 10px;
    }

    #dock-container ul {
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 0;
    }

    #dock-container li img {
        width: 58px;
        height: 58px;
        -webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
        -webkit-transition: all 0.3s;
        -webkit-transform-origin: 50% 100%;
    }

    #dock-container li:hover img { 
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
    }

    #dock-container li:hover + li img, #dock-container li.prev img {
        -webkit-transform: scale(1);
        margin: 0 0;
    }

    #dock-container li span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
    }

    #dock-container li#active span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
    }

    #dock-container li#active span {
        display: block;
        color: #fff;
    }

    #dock-container li#active .textMenu {
        font: normal 120%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
    }

    #dock-container li:hover span {
        display: block;
        color: #fff;
    }

    #dock-container .textMenu {
        font: normal 120%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
    }
    /* End Footer */
	
	.activeskill {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveskill {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	}
	
	.content .imgSkill {
	width: 85%;
	}
	
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F5DDAE;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAE4B9;}
	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#FCECCD;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#EDD29C;}
	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#d3b372;}
	.st5{fill-rule:evenodd;clip-rule:evenodd;fill:#A6884C;}
	.st6{fill-rule:evenodd;clip-rule:evenodd;fill:#806838;}
	
	.cadreScore :hover {
	background-color: orangered;
	color: white;	
	}
	.nameOtherTeam :hover {
	color: white;	
	}
	.nameTeam :hover {
	color: white;	
	}
	.vs :hover {
	color: white;	
	}
	.dateMatch :hover {
	color: white;
	}
	.dateMatch {
	position: absolute; 
	font-size: 15px; 
	text-shadow: none; 
	margin-right: 30px; 
	margin-top: 3px; 
	right: 0;
	}
		
    /* Small screens */
    @media only screen and (max-width: 768px) {
		body {
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
        .content svg {
            height: 100%;
        }
		/* Content */
		.container {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: column;
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
			background-color: light-gray;;
			height: 100%;
			overflow-x: auto;
		}
        .content img {
            height: 100%;
        }
		#footer {
			background-color: red;
			color: #fff;
			/*height: 100px;*/
			height: auto;
			text-align: center;
		}	
		/* End Content */

		/* Header */
		#header {
			max-height: 100px;
			padding: 0;
			top:0px;
			left:0px;
			background-color: black;
			z-index: 1;
			border-bottom: 2px solid orangered;
			position: sticky;
		}
		.header {
			position: relative;
		}
		.barreHeader {
			position:absolute;
			top: 70px;
			height: 25px;
			width: 100%;
			background-color: orangered;
			z-index: -1;
			margin: 0;
			padding: 0;
		}
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 8px;
		}
		.barreHeaderLeft2 {
		color: white; 
		margin-top: 9px;
		font-size: 0.9em;
		}
		.barreHeaderRight {
		margin-right: 25px; 
		color: white; 
		float: right; 
		margin-top: 9px;
		font-size: 0.9em;
		}
		.cadreHeader1 {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered;
		border-left: 1px solid orangered;	
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		.cadreHeader {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered; 
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		#avatar {
			background-color: orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 0;
		}
		.imgAvatar {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 0;
		}
		#team {
			background-color: orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 0;
		}
		.imgTeam {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 0;
		}
		.imgTeamSmall {
			height: 12px;
			margin-top: 0;
		}
		.levelHeader {
			font-weight: 700;
			font-size: 11px;  /* Preferred icon size */
			background-color: orangered;
			color: white;
			border-radius: 5px;
			margin-top: 16px;
			padding: 3px;
			width: 80%;
			margin-left: auto;
			margin-right: auto;		
		}
		.plusOrangered {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: orangered;
		}
		.aPlusOrangered :hover {
			color: orangered;
			background-color: white;
			border-bottom: 1px solid orangered;
			border-left: 1px solid orangered;
		}
		.progressYellow {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 8px;
		}
		.progressOrange {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 12px;
		}
		.progress-bar-txt-black {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: black;
			font-weight: 600;
		}
		.progress-bar-txt-white {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: white;
			font-weight: 600;
		}
		.plusYellow {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: black;
			font-weight: 700;
			font-size: 0.9em;
			background-color: yellow;
		}
		.aPlusYellow :hover {
			color: black;
			background-color: white;
			border-bottom: 1px solid yellow;
			border-left: 1px solid yellow;
		}
		.plusGreen {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: green;
		}
		.aPlusGreen :hover {
			color: green;
			background-color: white;
			border-bottom: 1px solid green;
			border-left: 1px solid green;
		}
		.dollarFan {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: green;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.token {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: orangered;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.cadreScore {
		width: 100%;
		background-color: whitesmoke;
		opacity: 0.9;
		color: black;
		margin: 0;
		top: 130px;
		padding: 5px;
		}
		.nameTeam {
		position: relative; 
		font-size: 22px; 
		color: orangered; 
		text-decoration: none; 
		text-transform: uppercase; 
		top: 0px; 
		left: 5px; 
		text-shadow: black 2px 1px 1px;
		}
		.vs { 
		position: relative; 
		top: 3px; 
		font-size: 12px; 
		color: orangered; 
		text-shadow: none; 
		margin-left: 3px;
		float: right;
		}	
		.nameOtherTeam {
		position: relative; 
		font-size: 18px; 
		color: orangered; 
		text-shadow: none;
		float: right;
		margin-left: 5px;
		}	
		.dateHourMatch {
		position: absolute; 
		font-size: 10px; 
		color: orangered; 
		text-shadow: none; 
		margin-right: 3px; 
		margin-top: 3px; 
		right: 0
		}	
		.material-icons.md-48 { 
		font-size: 22px;
		margin-top: 13px;
		}
		.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 12px;  /* Preferred icon size */
		display: inline-block;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		/* Support for all WebKit browsers. */
		-webkit-font-smoothing: antialiased;
		/* Support for Safari and Chrome. */
		text-rendering: optimizeLegibility;

		/* Support for Firefox. */
		-moz-osx-font-smoothing: grayscale;

		/* Support for IE. */
		font-feature-settings: 'liga';
		}   
		/* End Header */
		
		/* Footer */
		.barreOrangered {
			width: 100%;
			padding: 0;
			margin: 0; 
			height: 2px;
			background-color: orangered;
		}
		.barreBlack {
			width: 100%;
			padding: 0;
			margin: 0;
			height: 4px;
			background-color: black;
		}
			
        /* Menu */

        #dock-container {
            height: 55px;
            padding: 0;
            margin: 0;
            bottom: 0;
            background-color: orangered;
            border: none;
            border-top: 4px solid orangered;
        }

        #dock-container li#active img {
            -webkit-transform: scale(1.65);
            margin: 0 0.5em;
        }

        #dock-container li {
            width: 17%;
            padding: 0;
            margin: 0;
            list-style-type: none;
            display: inline-block;
            position: relative;
            padding-top: 3px;
        }

        #dock-container ul {
            width: 100%;
            padding-left: 0px;
            padding-right: 0px;
            margin-bottom: 0;
        }

        #dock-container li img {
            width: 38px;
            height: 38px;
            -webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
            -webkit-transition: all 0.3s;
            -webkit-transform-origin: 50% 100%;
        }

        #dock-container li:hover img { 
            -webkit-transform: scale(1.65);
            margin: 0 0.5em;
        }

        #dock-container li:hover + li img, #dock-container li.prev img {
            -webkit-transform: scale(1);
            margin: 0 0;
        }

        #dock-container li span {
            display: none;
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            border-radius: 5px;
        }

        #dock-container li#active span {
            display: none;
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            border-radius: 5px;
        }

        #dock-container li#active span {
            display: block;
            color: #fff;
        }

        #dock-container li#active .textMenu {
            font: normal 90%/1 "Acme", Helvetica, sans-serif;
            padding: 2px;
        }

        #dock-container li:hover span {
            display: block;
            color: #fff;
        }

        #dock-container .textMenu {
            font: normal 90%/1 "Acme", Helvetica, sans-serif;
            padding: 2px;
        }
    }
</style>