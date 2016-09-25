/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjEzNDQ0MzM0N15BMl5BanBnXkFtZTcwMzA1NDM1Nw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998"}]
		tooltips[1]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjEzNDQ0MzM0N15BMl5BanBnXkFtZTcwMzA1NDM1Nw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"200px"}]
		tooltips[2]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMzg4MTExNzA2MF5BMl5BanBnXkFtZTcwMTU4NDY3OA%40%40._V1_SY317_CR3%2C0%2C214%2C317_.jpg"]
		tooltips[3]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjI0MDQyMTU1OF5BMl5BanBnXkFtZTcwODc5Njg3Nw%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", {background:"white", font:"bold 12px Arial"}]
        tooltips[6]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTAyOTc4OTg2MzJeQTJeQWpwZ15BbWU3MDk0NzgyNzg%40._V1_SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", color:"black", border:"5px #3B5998"}]
		tooltips[10]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0905372.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[11]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/cover-1231417-Good-Deeds-movie2k-film.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[12]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1499658.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[13]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/url.gif", "", {background:"#FFFFFF", width:"0px"}]
		tooltips[000]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[15]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTQ1NzE3MzY0NV5BMl5BanBnXkFtZTYwNTM2MzE5._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[16]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[17]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQ4MjY2MjMzOV5BMl5BanBnXkFtZTcwMDUxNzIwOQ%40%40._V1._CR43%2C43.16667175292969%2C1298%2C1960.9999542236328_SX214_.jpg", "After R (a highly unusual zombie) saves Julie from an attack, the two form a relationship that sets in motion a sequence of events that might transform the entire lifeless world.", {background:"#ebeef4", width:"214px"}]
		tooltips[18]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTkxMTE3NzEzMl5BMl5BanBnXkFtZTcwMzc4MTU2Mw%40%40._V1_SX214_.jpg", "A writer who is brutalized during her cabin retreat seeks revenge on her attackers, who left her for dead.", {background:"#ebeef4", width:"214px"}]
		tooltips[19]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjEyNjI1OTEzOV5BMl5BanBnXkFtZTcwNTI3NzYxOQ%40%40._V1._CR33%2C35.16667175292969%2C1411%2C1979.9999542236328_SY317_CR7%2C0%2C214%2C317_.jpg", "Wren's Halloween plans go awry when she's made to babysit her brother, who disappears into a sea of trick-or-treaters. With her best friend and two nerds at her side, she needs to find her brother before her mom finds out he's missing.", {background:"#ebeef4", width:"214px"}]
		tooltips[20]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw%40%40._V1._SY317_.jpg", "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.", {background:"#FFFFFF", width:"90px"}]
		tooltips[21]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/Chronicle-watch-movie-1213915.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[22]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1735898.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[23]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjAxODQ1MTEyMl5BMl5BanBnXkFtZTcwNjU3NzM0OA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[24]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1231583.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[25]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw%40%40._V1_SX214_.jpg", "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.", {background:"#ebeef4", width:"214px"}]
		tooltips[26]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1506999.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[27]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[28]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTg0NTgxMjIxOF5BMl5BanBnXkFtZTcwMDM0MDY1OQ%40%40._V1_SX214_.jpg", "United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.", {background:"#ebeef4", width:"214px"}]
		tooltips[29]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[30]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[31]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/trading%20p.jpg", "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.", {background:"#ebeef4", width:"214px"}]
		tooltips[32]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX214_.jpg", "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.", {background:"#ebeef4", width:"214px"}]
		tooltips[33]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/Treasure-Island-watch-movie-1117580.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[34]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0091129.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[35]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTQ5NzI3OTQ3NF5BMl5BanBnXkFtZTcwODczMjMzMQ%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[36]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0094898.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[37]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/2-22-watch-movie-163000.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[38]=["http://www.clipbuster.com/thumb/2_2692.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[39]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/Taken-watch-movie-37490.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[40]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1176724.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[41]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1714203.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[42]=["https://dl.dropbox.com/u/12447336/tha%20nu/ref%3Ddp_image_0.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[43]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/0044013_007b.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[44]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/New%20Images/unnamed.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[45]=["http://thatassphat.com/media/videos/tmb/000/001/109/3.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[46]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/splash.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[47]=["http://webamateurclips.com/thumb/3_693.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[48]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/sweet.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[49]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "On his first day on the job as a narcotics officer, a rookie cop goes on a 24-hour training course with a rogue detective who isn't what he appears.", {background:"#ebeef4", width:"214px"}]
		tooltips[50]=["http://craigsfun.com/thumb/4ca4238a0b/2_660.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[51]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/sexyb2.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[52]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/fpt.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[53]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/pnf2.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[54]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/waiting1.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[55]=["http://www.clipbuster.com/thumb/3_2615.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[56]=["", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[57]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTk3MDkxMDAyN15BMl5BanBnXkFtZTcwODY5NzQyOQ%40%40._V1_SX214_.jpg", "When a street magician's stunts begins to make their show look stale, superstar magicians Burt Wonderstone and Anton Marvelton look to salvage on their act - and their friendship - by staging their own daring stunt.", {background:"#ebeef4", width:"214px"}]
		tooltips[58]=["https://dl.dropboxusercontent.com/u/12447336/the-haves-and-the-have-nots-99409439.jpg", "The Haves And The Have Nots / season 1 .A drama about two families, one rich and one poor.", {background:"#e1e1e1", width:"314px"}]
		tooltips[59]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjI3MDY2ODQwNF5BMl5BanBnXkFtZTgwNjUzNjE4MTE%40._V1_SX214_AL_.jpg", "Two struggling pals dress as police officers for a costume party and become neighborhood sensations. But when these newly-minted heroes get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.", {background:"#e1e1e1", width:"214px"}]
		tooltips[001]=["http://www.clipbuster.com/thumb/1_2187.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[60]=["http://www.clipbuster.com/thumb/2_2619.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[61]=["http://www.clipbuster.com/thumb/3_744.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[62]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/New%20Images/shakevideo.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[63]=["https://dl.dropbox.com/u/12447336/tha%20nu/html/flashmp3player/skyfall.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[64]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjc1OTEwNjU4N15BMl5BanBnXkFtZTcwNzUzNDIwOQ%40%40._V1_SX214_.jpg", "A motorcycle stunt rider turns to robbing banks as a way to provide for his lover and their newborn child, a decision that puts him on a collision course with an ambitious rookie cop navigating a department ruled by a corrupt detective.", {background:"#ebeef4", width:"214px"}]
		tooltips[65]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/media-abc.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[66]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM0MDk0OTY2M15BMl5BanBnXkFtZTcwODI1MDQ3Nw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[67]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/CNBC-Logo.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[68]=["http://www.clipbuster.com/thumb/3_2503.jpg", "", {background:"#ebeef4", width:"214px"}]
		tooltips[69]=["http://dl.dropboxusercontent.com/u/12447336/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA%40%40._V1_SX214_.jpg", "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives..", {background:"#ebeef4", width:"214px"}]
		tooltips[70]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/twitter.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[71]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/facebook.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[72]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/1321940925.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[73]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/google.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[74]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/14351249502580351.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[75]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/youtube_logo-free-nokia-app.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[76]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/imgres.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[77]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/hangouts-logo.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[78]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/pandora-logo.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[79]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/IMDB%2520Icon.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[80]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/Chronicle-watch-movie-1213915.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[81]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/liability.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[82]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/Think-Like-a-Man-watch-movie-1316267.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[83]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/tumblr_lxv7s7UurS1r8xrjjo1_500.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[84]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1867093.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[85]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/tumblr_lcgc0a2yl41qbysf7.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[86]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/tumblr_m4i7z2sQcH1r5zq6ao1_400.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[87]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/PLAYLIST%20PICS/bruce.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[88]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/P001.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[89]=["http://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1810697.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[90]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/New%20Images/AD81156.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[91]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTg5NDk4MTUwNl5BMl5BanBnXkFtZTcwMDU5MTc4OQ%40%40._V1_SY317_CR4%2C0%2C214%2C317_.jpg", "A look at the trials and tribulations of a newlywed couple during their first year of marriage", {background:"#E2E6E6", width:"214px"}]
		tooltips[92]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjI0NTExOTI0N15BMl5BanBnXkFtZTcwMDA0ODE3OA%40%40._V1_SX214_.jpg", "The night before his big medical school interview, a promising student celebrates his 21st birthday with his two best friends.", {background:"#ebeef4", width:"214px"}]
		tooltips[93]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt1636826.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[94]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/tt0112641.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[95]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/tt1464540.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[96]=["https://dl.dropbox.com/u/12447336/tha%20nu/deskpaper/mlf.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[97]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ%40%40._V1_SX214_.jpg", "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.", {background:"#E2E6E6", width:"214px"}]
		tooltips[98]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/New%20Images/shakevideo.gif", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[99]=["https://dl.dropbox.com/u/12447336/tha%20nu/socialstream/images/socialicons/ustream.png", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[100]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTc0MzgzNTI3N15BMl5BanBnXkFtZTcwNDk3MDIzMQ%40%40._V1_SX214_.jpg", "A teenage girl raids a man's home, suspecting he is a pedophile, in order to expose him.", {background:"#ebeef4", width:"214px"}]
		tooltips[101]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/tumblr_mhuwuwMMhT1r1j7s7o1_500.gif", "", {background:"#E2E6E6", width:"500px"}]
		tooltips[102]=["http://www.clipbuster.com/thumb/1_2145.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[103]=["http://www.clipbuster.com/thumb/1_2101.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[104]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/ebonyvideo.gif", "",  {background:"#ebeef4", width:"214px"}]
		tooltips[105]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMzIxOTQyODU1OV5BMl5BanBnXkFtZTcwMDQ4Mjg4Nw%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.", {background:"#E2E6E6", width:"214px"}]
		tooltips[106]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjEyNjQ4NzM1MF5BMl5BanBnXkFtZTcwOTQyNjcxOA%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[107]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[108]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/beimage/MV5BMjAzOTE2MzA2NF5BMl5BanBnXkFtZTYwMTM0NTg4._V1_SX514_.jpg", "Richard Pryor and John Candy star in this outrageous comedy about a baseball pitcher who discovers he has to blow $30 million in 30 days as a condition to inherit a much greater fortune.
", {background:"#ebeef4", width:"214px"}]
		tooltips[109]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw%40%40._V1_SX214_.jpg", "Eight years on, a new evil rises from which the Batman and Commissioner Gordon tied to bury it. And The Dark Knight must rise to save the very city which brands him an enemy.", {background:"#ebeef4", width:"214px"}]
		tooltips[110]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjE1ODcyODYxMl5BMl5BanBnXkFtZTcwNjA1NDE3MQ%40%40._V1._SY317_CR2%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[111]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BODUwMDc5Mzc5M15BMl5BanBnXkFtZTcwNDgzOTY0MQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[112]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTQzNzczMDUyNV5BMl5BanBnXkFtZTcwNjM2ODEzOA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[113]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjEwMDc5MDg1NV5BMl5BanBnXkFtZTYwNzIzMTg5._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[114]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[115]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[116]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[117]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTkzMTUwMDAyMl5BMl5BanBnXkFtZTcwMDIwMTQ1OA%40%40.__V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[118]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[119]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTIzNDI5MTc0M15BMl5BanBnXkFtZTYwMjM5NDU5._V1._SY317_CR10%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[120]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjMyMzk1Nzg3OF5BMl5BanBnXkFtZTcwOTQ2NjcxNw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[121]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjMyMzk1Nzg3OF5BMl5BanBnXkFtZTcwOTQ2NjcxNw%40%40._V1_SX214_.jpg", "Perseus braves the treacherous underworld to rescue his father, Zeus, captured by his son, Ares, and brother Hades who unleash the ancient Titans upon the world.", {background:"#ebeef4", width:"214px"}]
		tooltips[122]=["http://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjAwMTEwMDAwMl5BMl5BanBnXkFtZTcwODk4NDgyMQ%40%40._V1._SY317_CR5%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[123]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjMzNjU1MTg5NF5BMl5BanBnXkFtZTcwMTExMTcwOQ%40%40._V1_SX214_.jpg", "An art auctioneer who has become mixed up with a group of criminals partners with a hypnotherapist in order to recover a lost painting.", {background:"#ebeef4", width:"214px"}]
		tooltips[124]=["http://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[125]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTM1ODgyOTI0NF5BMl5BanBnXkFtZTcwODgyMDY3OA%40%40._V1_SX214_.jpg", "Malcolm and Kisha move into their dream home, but soon learn a demon also resides there. When Kisha becomes possessed, Malcolm - determined to keep his sex life on track - turns to a priest, a psychic, and a team of ghost-busters for help.",  {background:"#ebeef4", width:"214px"}]
		tooltips[126]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[127]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTA0NjE1MzMzODheQTJeQWpwZ15BbWU3MDY4MTQ3Mzk%40._V1_SX214_.jpg", "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the lam.", {background:"#ebeef4", width:"214px"}]
		tooltips[128]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjI5MTYzOTMyNF5BMl5BanBnXkFtZTcwNTgwNDYzOQ%40%40._V1_SY317_CR2%2C0%2C214%2C317_.jpg", "To win back his ex-girlfriend, a conservative accountant enlists the help of an exotic dancer to guide him on a quest for sexual experience, leading him into a world of strip clubs, sensual massage parlors, cross-dressing and S & M.", {background:"#ebeef4", width:"214px"}]
		tooltips[129]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg%40%40._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[130]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[131]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[132]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTc3MjE1OTM0M15BMl5BanBnXkFtZTYwMzQwMjg4._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[133]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[134]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTMwODY3NzQzNF5BMl5BanBnXkFtZTcwNzUxNjc0MQ%40%40._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[135]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM4MTU5OTI5MF5BMl5BanBnXkFtZTcwMzczOTgxMQ%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		
		tooltips[135]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM4MTU5OTI5MF5BMl5BanBnXkFtZTcwMzczOTgxMQ%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[136]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMjI5ODkyMjA2Nl5BMl5BanBnXkFtZTcwNTcyNTgzNw%40%40._V1._SY317_.jpg", "A young CIA agent is tasked with looking after a fugitive in a safe house. But when the safe house is attacked, he finds himself on the run with his charge.", {background:"#ebeef4", width:"214px"}]
		tooltips[137]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjI3MTM5ODI5MV5BMl5BanBnXkFtZTcwMjE1Mzc4OA%40%40._V1_SX214_.jpg", "After India's father dies, her Uncle Charlie, who she never knew existed, comes to live with her and her unstable mother. She comes to suspect this mysterious, charming man has ulterior motives and becomes increasingly infatuated with him.", {background:"#ebeef4", width:"214px"}]
		tooltips[138]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTc3MDc1MTAwMV5BMl5BanBnXkFtZTcwMDY0MTIzMw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[139]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM1OTUwOTMyM15BMl5BanBnXkFtZTcwNTQ3OTk2Nw%40%40._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[140]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTM1OTUwOTMyM15BMl5BanBnXkFtZTcwNTQ3OTk2Nw%40%40._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[141]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/MV5BMTY0NDgwNzg4Ml5BMl5BanBnXkFtZTcwNzg3NTU0NA%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[142]=["https://dl.dropboxusercontent.com/u/12447336/Assault-On-Wall-Street-Dominic-Purcell.png", "", {background:"#ebeef4", width:"214px"}]
		tooltips[143]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMzQyOTQ3MDQ0MF5BMl5BanBnXkFtZTcwMzM1MTI2OQ%40%40._V1_SY317_CR15%2C0%2C214%2C317_.jpg", "A group of oddball high school students find themselves trapped in detention with their classmates having turned into a horde of Zombies.", {background:"#ebeef4", width:"214px"}]
		tooltips[144]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMzE0NTI0MTM5MV5BMl5BanBnXkFtZTcwMzYwMTYyMQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[145]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjEwMzIxOTg3N15BMl5BanBnXkFtZTcwMjI4ODUzNw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[146]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[147]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BOTM1ODQ0Nzc4NF5BMl5BanBnXkFtZTcwMTM0MjQyNg%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[148]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/38901.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[149]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTgzMzUyMTQ4MF5BMl5BanBnXkFtZTYwMzE1MjE5._V1._SY317_CR3%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[150]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BNzkwNDkyNTUxNV5BMl5BanBnXkFtZTcwODY1NTE3Nw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[151]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTY1Mzk3MTg0M15BMl5BanBnXkFtZTcwOTQzODYyMQ%40%40._V1._SY317_CR3%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[152]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTI0MTI4ODY5N15BMl5BanBnXkFtZTcwMjUxOTYyMQ%40%40._V1._SY317_CR5%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[153]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjE4ODQ1ODA5Ml5BMl5BanBnXkFtZTYwNDAxOTY5._V1._SY317_CR1%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[154]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTU4NjY4NTI5MF5BMl5BanBnXkFtZTYwNjQ4OTc3._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "In 1981 in L.A., Monica moves in next door to Quincy. They're 11, and both want to play in the NBA", {background:"#ebeef4", width:"214px"}]
		tooltips[155]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[156]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTYzNjU4NTc5MV5BMl5BanBnXkFtZTcwNDE0NzAzOA%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[157]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTk1MjQwMTQyMV5BMl5BanBnXkFtZTcwODcxMjEzMw%40%40._V1._SX640_SY550_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[158]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQ3Njk4OTc2OF5BMl5BanBnXkFtZTcwMjAyNjUzOA%40%40._V1._SX640_SY500_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[159]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTYzNjU4NTc5MV5BMl5BanBnXkFtZTcwNDE0NzAzOA%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[160]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQzODg3MzUyOV5BMl5BanBnXkFtZTcwNzI1MzUyNg%40%40._V1._SX640_SY550_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[161]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTI3NzAwMjkwNV5BMl5BanBnXkFtZTcwNDgxMjAyMQ%40%40._V1._SY317_CR5%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[162]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTI1ODkxNzg2N15BMl5BanBnXkFtZTYwMzQ2MTg2._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[163]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTk4MzM2NTQ1Nl5BMl5BanBnXkFtZTcwODIyODY1OA%40%40._V1_SX214_.jpg", "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist", {background:"#ebeef4", width:"214px"}]
		tooltips[164]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA%40%40._V1_SX214_.jpg", "Hansel & Gretel are bounty hunters who track and kill witches all over the world. As the fabled Blood Moon approaches, the siblings encounter a new form of evil that might hold a secret to their past.", {background:"#ebeef4", width:"214px"}]
		tooltips[165]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTI4Mjc2OTE4MV5BMl5BanBnXkFtZTYwNTE3NDY3._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[200]=["https://dl.dropboxusercontent.com/u/12447336/MV5BNTU0ODkxOTkzN15BMl5BanBnXkFtZTgwMjQzNzIyMDE%40._V1_SX214_.jpg", "In a remote town in Ireland, eleven-year-old Neve finds herself the sole survivor of a bloody massacre that killed her parents and younger brother. Suspecting a gang of homicidal vandals, .", {background:"#ebeef4", width:"214px"}]
		tooltips[201]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTczMTMyMTgyM15BMl5BanBnXkFtZTcwOTc4OTQyMQ%40%40._V1._SY317_CR5%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[202]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[203]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjI3MjYyNjEwOF5BMl5BanBnXkFtZTcwMzk4ODc5Nw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[204]=["https://dl.dropboxusercontent.com/u/12447336/2085957.jpg", "Two roommates with abusive men in their pasts consider murder as an option to help settle each others problems.", {background:"#ebeef4", width:"214px"}]
		tooltips[205]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTc1NTQ0MTUyNF5BMl5BanBnXkFtZTcwMDYzMDU2Mw%40%40._V1._SY317_.jpg", "", {background:"#ebeef4", width:"214px"}]
		tooltips[206]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTY5ODAxNDc0Nl5BMl5BanBnXkFtZTcwMzg0NDY1OA%40%40._V1_SX214_.jpg", "As inventor Andy Brewster is about to embark on the road trip of a lifetime, a quick stop at his mom's house turns into an unexpected cross-country voyage with her along for the ride.", {background:"#ebeef4", width:"214px"}]
		tooltips[207]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQzMzQ4MDAyNF5BMl5BanBnXkFtZTcwNzE0MDk3OA%40%40._V1_SX214_.jpg", "A man and woman are drawn together, entangled in the life cycle of an ageless organism. Identity becomes an illusion as they struggle to assemble the loose fragments of wrecked lives.", {background:"#ebeef4", width:"214px"}]
		tooltips[208]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTIxNTY3NjM0OV5BMl5BanBnXkFtZTcwNzg5MzY0MQ%40%40._V1._SY317_CR10%2C0%2C214%2C317_.jpg", "", {background:"#ebeef4", width:"214px"}]
		tooltips[209]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTIzMzU0MDI4MF5BMl5BanBnXkFtZTcwOTg5MzY0MQ%40%40._V1._SY317_CR10%2C0%2C214%2C317_.jpg", "", {background:"#ebeef4", width:"214px"}]
		tooltips[210]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BOTgyNDM4Mjg0OF5BMl5BanBnXkFtZTcwMjQxNTEzMQ%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[211]=["https://dl.dropbox.com/u/12447336/tha%20nu/html/flashmp3player/rush%20hour.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[212]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTUwMDQxNjIxM15BMl5BanBnXkFtZTcwMzg5MzkwNA%40%40._V1_SX214_.jpg", "Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his death proof cars to execute his murderous plans.", {background:"#ebeef4", width:"214px"}]
		tooltips[213]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTgzMjQ1MjIwM15BMl5BanBnXkFtZTcwODIzOTkyMQ%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[214]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjA3NTcwMzUwOV5BMl5BanBnXkFtZTcwMjc1NTYyMQ%40%40._V1._SY317_CR4%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[215]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ%40%40._V1._SY317_CR5%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[216]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BOTMwNTMwMTk4NV5BMl5BanBnXkFtZTcwMTI0ODYxMQ%40%40._V1._SY317_CR11%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
        tooltips[217]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjIxODg1Nzc3NF5BMl5BanBnXkFtZTcwMjM0MjEzMw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[218]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA%40%40._V1._SY317_.jpg", "As the result of a childhood wish, John Bennett's teddy bear, Ted, came to life and has been by John's side ever since - a friendship that's tested when Lori, John's girlfriend of four years, wants more from their relationship.", {background:"#ebeef4", width:"214px"}]
		tooltips[219]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjIxNDExNDEyMV5BMl5BanBnXkFtZTcwODY1OTkxMw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[220]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjAxMjc0ODk0OF5BMl5BanBnXkFtZTcwMTc5NDQwNw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[221]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[222]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[223]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQwNjU5MzUzNl5BMl5BanBnXkFtZTYwMzc1MTI3._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[224]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "A woman suffering from Parkinson's befriends a drug rep working for Pfizer against 1990s Pittsburgh backdrop.",  {background:"#ebeef4", width:"214px"}]
		tooltips[225]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjA3NzcxNzAwOV5BMl5BanBnXkFtZTcwNTgyNDU2Mg%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "Two pairs of lovers on a Hawaiian vacation discover that psychopaths are stalking and murdering tourists on the islands", {background:"#ebeef4", width:"214px"}]
		tooltips[226]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[227]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTg5NzUwMDU5NF5BMl5BanBnXkFtZTcwMjk2MDA4Mg%40%40._V1._SY317_CR18%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[228]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[229]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BODE1MTM1MzA2NF5BMl5BanBnXkFtZTcwODQ5MTA2Mg%40%40._V1._SY317_CR10%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
		tooltips[230]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
tooltips[231]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.", {background:"#E2E6E6", width:"214px"}]	
	tooltips[232]=["https://dl.dropboxusercontent.com/u/12447336/MV5BNTg3MjUyNjkzNl5BMl5BanBnXkFtZTcwMTQzNDgyOQ%40%40._V1_SX214_.jpg", "A documentary that details the creation of Julian Assange's controversial website, which facilitated the largest security breach in U.S. history.", {background:"#E2E6E6", width:"214px"}]			
	tooltips[233]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTMxNjY5MzEzMV5BMl5BanBnXkFtZTcwOTAzMjkyMQ%40%40._V1._SY317_CR6%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[234]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[235]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ%40%40._V1_SX214_.jpg", "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", {background:"#E2E6E6", width:"214px"}]
	tooltips[236]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTg4MjM2MjAxOF5BMl5BanBnXkFtZTcwMTAzOTEyOQ%40%40._V1_SX214_.jpg", "Filmed at a sold-out performance at Madison Square Garden, comedian Kevin Hart delivers material from his 2012 Let Me Explain concert tour.", {background:"#E2E6E6", width:"214px"}]
	tooltips[237]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTM3NzQ3NDQ3Ml5BMl5BanBnXkFtZTcwNjE2ODU2NA%40%40._V1_SY317_CR16%2C0%2C214%2C317_.jpg", "A rogue space anomaly is discovered approaching Earth, and it is up to the world's top scientists to stop it from destroying the planet.  As cities across the world are annihilated, the leaders of a small Louisiana town struggle to maintain order and fight the chaos ensuing in this global catastrophe.  When the mayor and his wife discover the key to saving the world may lie within their own embattled family, they desperately attempt to unite the scientists with the unlikeliest of heroes: their ingenious, autistic son, Terry ", {background:"#E2E6E6", width:"214px"}]
	tooltips[238]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQxMTAwMDQ3Nl5BMl5BanBnXkFtZTcwODMwNTgzMQ%40%40._V1_SY317_CR5%2C0%2C214%2C317_.jpg", "After a simple jewelery heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.", {background:"#E2E6E6", width:"214px"}]		
	tooltips[239]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/tt0365957.jpg", "", {background:"#FFFFFF", width:"90px"}]
	
	tooltips[240]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]				
	tooltips[241]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTY1MzkzNTYyMl5BMl5BanBnXkFtZTcwOTg4MjE5Ng%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
tooltips[242]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTMwOTI1NjczOV5BMl5BanBnXkFtZTcwNDQ4MTQ5MQ%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]		
tooltips[243]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTg3MzI5NjYxMl5BMl5BanBnXkFtZTcwOTA0NDkzMQ%40%40._V1._SY317_CR3%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]		
tooltips[244]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTMzNjYwMjE2NF5BMl5BanBnXkFtZTcwNDc1NTkzMQ%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
tooltips[245]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTA3NDM4OTc1MzheQTJeQWpwZ15BbWU3MDUzODY2MTE%40._V1._SY317_CR9%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]			
	tooltips[246]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTcxNTQ1MzAyOF5BMl5BanBnXkFtZTYwNDg0ODk4._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
tooltips[247]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjI4NDQwMDM0N15BMl5BanBnXkFtZTcwMzY1ODMwNA%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
	tooltips[248]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQxNDQwNjQzOV5BMl5BanBnXkFtZTcwNTQxNDYyMQ%40%40._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
	tooltips[249]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQzMzAyNTE2N15BMl5BanBnXkFtZTcwNzM1NDg2OA%40%40._V1_SX214_.jpg", "A young woman travels to Texas to collect an inheritance; little does she know that an encounter with a chainsaw-wielding killer is part of the reward.", {background:"#E2E6E6", width:"214px"}]	
	tooltips[250]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTc2MzY0NDAwOF5BMl5BanBnXkFtZTcwMTE1Mzc4OA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "A young woman's world unravels when a drug prescribed by her psychiatrist has unexpected side effects.", {background:"#E2E6E6", width:"214px"}]
tooltips[251]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjAwOTM2MzE5MF5BMl5BanBnXkFtZTcwMjM0NTcyMg%40%40._V1_SX214_.jpg", "A successful asset manager, who has just received a huge promotion, is blissfully happy in his career and in his marriage. But when a temp worker starts stalking him, all the things he's worked so hard for are placed in jeopardy.", {background:"#E2E6E6", width:"214px"}]	
tooltips[252]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTM0ODA0NDU5N15BMl5BanBnXkFtZTYwMzkzMTk2._V1_SX214_.jpg", "5 years after Pitch Black, the wanted criminal Riddick arrives on a planet called Helion Prime, and finds himself up against an invading empire called the Necromongers, an army that plans to convert or kill all humans in the universe.", {background:"#E2E6E6", width:"214px"}]	
tooltips[253]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTU1MDMzOTcxNV5BMl5BanBnXkFtZTcwNDY5NjQyMQ%40%40._V1._SY317_CR9%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
tooltips[254]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjMwNDg1MTAzNV5BMl5BanBnXkFtZTcwNTk5ODI3OA%40%40._V1_SX214_.jpg", "When an unseen enemy threatens mankind by taking over their bodies and erasing their memories, Melanie will risk everything to protect the people she cares most about, proving that love can conquer all in a dangerous new world.", {background:"#E2E6E6", width:"214px"}]	
tooltips[255]=["https://dl.dropboxusercontent.com/u/12447336/MV5BNDIzNDA4MzA3Nl5BMl5BanBnXkFtZTcwODI2NzEzOQ%40%40._V1_SY317_CR3%2C0%2C214%2C317_.jpg", "A young adult woman decides to revisit her past relationships in order to find some guidance in her current life.", {background:"#E2E6E6", width:"214px"}]	
tooltips[256]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BOTM1ODQ0Nzc4NF5BMl5BanBnXkFtZTcwMTM0MjQyNg%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
tooltips[257]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjAzMjczMTU4Nl5BMl5BanBnXkFtZTcwMDk1MTE5Nw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]			
	tooltips[258]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMzI5NTI3MjYyNl5BMl5BanBnXkFtZTcwNTg1NjQ2OA%40%40._V1_SX214_.jpg", "An unlikely friendship forms between 21 year-old Jane and the elderly Sadie after Jane discovers a hidden stash of money inside an object at Sadie's yard sale.", {background:"#E2E6E6", width:"214px"}]						
	tooltips[259]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw%40%40._V1_SX214_.jpg", "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her", {background:"#E2E6E6", width:"214px"}]	
	tooltips[260]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjQ0NjQxOTM5N15BMl5BanBnXkFtZTcwNzUwMzMwNg%40%40._V1._SY317_.jpg", "For their ghost hunting reality show, a production crew locks themselves inside an abandoned mental hospital that's supposedly haunted - and it might prove to be all too true.", {background:"#E2E6E6", width:"214px"}]		
	tooltips[261]=["https://dl.dropboxusercontent.com/u/12447336/MV5BNDQwNDQ4ODUxNF5BMl5BanBnXkFtZTcwNTExNjkxOA%40%40._V1_SX214_.jpg", "A mild-mannered secretary discovers that she has a talent for murder as she ascends the corporate ladder.", {background:"#E2E6E6", width:"214px"}]	
	tooltips[262]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjMwOTg4NjQ0MV5BMl5BanBnXkFtZTcwMTkzMDg2OQ%40%40._V1_SX214_.jpg", "The rivalry between the manipulative boss of an advertising agency and her talented protégée escalates from stealing credit to public humiliation to murder.", {background:"#E2E6E6", width:"214px"}]		
	tooltips[263]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTA0MjI5ODA3MjReQTJeQWpwZ15BbWU3MDI1NTE3Njc%40._V1_SY317_CR1%2C0%2C214%2C317_.jpg", "As a new year at school begins, Lola's heart is broken by her boyfriend, though soon she's surprised by her best friend, promising musician Kyle, who reveals his feelings for her.", {background:"#E2E6E6", width:"214px"}]
	tooltips[264]=["https://dl.dropboxusercontent.com/u/12447336/MV5BNzAxNTg3NTUzN15BMl5BanBnXkFtZTcwMTMwMDcwOQ%40%40._V1_SX214_.jpg", "A young Korean-American girl, abducted and forced into prostitution by domestic human traffickers, joins forces with her captors in a desperate plea to survive.", {background:"#E2E6E6", width:"214px"}]
	tooltips[265]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjA3NDE4ODQ3OF5BMl5BanBnXkFtZTcwMjEwMDcwOQ%40%40._V1_SX214_.jpg", "A look at the life and music of singer Beyonce Knowles", {background:"#ebeef4", width:"214px"}]	
	tooltips[266]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQzMzk2OTI3MF5BMl5BanBnXkFtZTcwMTQ0NTk0NA%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
	tooltips[267]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/Welcome-stalker.jpg", "Welcome to my mind", {background:"#ebeef4", width:"640px"}]	
	tooltips[268]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/revenge-3337564.jpg", "", {background:"#FFFFFF", width:"294px"}]	
	tooltips[269]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw%40%40._V1._SY317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
	tooltips[270]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTYwNTY2NTkzNV5BMl5BanBnXkFtZTYwMjE2ODA3._V1._SY317_CR0%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"90px"}]	
	
	tooltips[271]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/3.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[272]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/your%20girl%20love%20me.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[273]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/kiss%20this%20puss2.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[274]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/Slim%20candy.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[275]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/HONEYDIP.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[276]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/PinkJoy%202.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[277]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/ebony%20lesbian2.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[278]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/1024964.jpg", "candy rain", {background:"#B9090B", width:"50%"}]
	tooltips[279]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/2865.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[280]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/PLAYLIST%20PICS/1209230922120012099.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[281]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/1398549.jpg", "", {background:"#FFFFFF", width:"90px"}]
	
	tooltips[282]=["https://dl.dropbox.com/u/12447336/tha%20nu/gallery/1047564.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[283]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/1400493.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[284]=["https://dl.dropbox.com/u/12447336/tha%20nu/5.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[285]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/Slim%20candy.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[286]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/HONEYDIP.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[287]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/archive/ebony%20lesbian2.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[288]=["http://dl.dropbox.com/u/12447336/tha%20nu/images/1395895.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[289]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/2865.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[290]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/PLAYLIST%20PICS/1209230922120012099.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[291]=["https://dl.dropbox.com/u/12447336/tha%20nu/next%20gen%20images/MV5BMTQ0MzA0OTQyNF5BMl5BanBnXkFtZTcwODQ1NjI4OA%40%40._V1._SX640_SY550_.jpg", "", {background:"#FFFFFF", width:"90px"}]
	tooltips[292]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQ2MDU4NjM1MV5BMl5BanBnXkFtZTcwNjQ3MzY5OA%40%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "A political strategist juggling three clients questions whether or not to take the high road as the ugly side of his work begins to haunt him.", {background:"#ebeef4", width:"214px"}]
	tooltips[293]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTk4OTQ1OTMwN15BMl5BanBnXkFtZTcwOTIwMzM3MQ%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[294]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjExNTgzMTAzMV5BMl5BanBnXkFtZTcwMDA0ODkxOA%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[295]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTgzNzY2NzAyNl5BMl5BanBnXkFtZTcwMzI3NDM5Nw%40%40._V1_SY317_CR20%2C0%2C214%2C317_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[296]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMTM4Njg1Mzg2NV5BMl5BanBnXkFtZTcwNjYzOTkyNw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[297]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BNDQ4MjQ4OTMwMF5BMl5BanBnXkFtZTcwOTYzNDc4Mw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[298]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTQwODU0MDM4Ml5BMl5BanBnXkFtZTcwMTA5MDkzOQ%40%40._V1_SX214_.jpg", "Sparks fly when Wade Walker crashes the Peeples annual reunion in the Hamptons to ask for their precious daughter Grace's hand in marriage.", {background:"#ebeef4", width:"214px"}]
	tooltips[299]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMjIyOTMxMDAwOF5BMl5BanBnXkFtZTcwODc2NzI4OQ%40%40._V1_SY317_CR118%2C0%2C214%2C317_.jpg", "In a California desert town, a short-order cook with clairvoyant abilities encounters a mysterious man with a link to dark, threatening forces.", {background:"#ebeef4", width:"214px"}]
	tooltips[300]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTcwNzgyNzUzOV5BMl5BanBnXkFtZTcwMzAwOTA5OA%40%40._V1_SX214_.jpg", "John McClane travels to Russia to help out his seemingly wayward son, Jack, only to discover that Jack is a CIA operative working undercover, causing the father and son to team up against underworld forces.Director: John Moore  Stars: Bruce Willis, Jai Courtney, Sebastian Koch ", {background:"#ebeef4", width:"214px"}]
	tooltips[301]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA%40%40._V1_SX214_.jpg", "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.", {background:"#ebeef4", width:"214px"}]
	
	tooltips[047]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw%40%40._V1_SX214_.jpg", "", {background:"#FFFFFF", width:"0px"}]
	tooltips[048]=["https://dl.dropbox.com/u/12447336/tha%20nu/images/jpeg.jpg", "", {background:"#FFFFFF", width:"0px"}]
	
	tooltips[0499]=["https://dl.dropbox.com/u/12447336/tha%20nu/3d/index%20more/image/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw%40%40._V1_SX214_.jpg", "", {background:"#ebeef4", width:"214px"}]
	
	tooltips[000]=["https://dl.dropboxusercontent.com/u/12447336/bdi.jpg", "Its like Candy.", {background:"#ebeef4", width:"214px"}]
	
	tooltips[006]=["https://dl.dropboxusercontent.com/u/12447336/tumblr_o4ystt8XNo1rehptdo1_1280-214x350.jpg", "Black Women are Perfect.", {background:"#ebeef4", width:"214px"}]
	
	tooltips[007]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/Nugirl%20b2_10-214x350.jpg", "You Cant Judge Her!!!", {background:"#ebeef4", width:"214px"}]
	
	tooltips[008]=["https://dl.dropboxusercontent.com/u/12447336/tha%20nu/cake.jpg", "Want 2 Taste it!!!.", {background:"#ebeef4", width:"314px"}]
	
	tooltips[009]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "In future Britain, charismatic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to solve society's crime problem... but not all goes to plan.", {background:"#ebeef4", width:"214px"}]
	
	tooltips[666]=["https://dl.dropboxusercontent.com/u/12447336/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE%40._V1_SY317_CR0%2C0%2C214%2C317_.jpg", "On his first day on the job as a narcotics officer, a rookie cop goes on a 24-hour training course with a rogue detective who isn't what he appears.", {background:"#ebeef4", width:"214px"}]
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
			
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")
