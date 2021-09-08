title =["UI디자인 - Cakku",  "정보기술과미래사회 - 기능성게임" ,"사용자연구 - 뱅크샐러드","메이커스워크샵 - 거리위의 작곡", "모바일앱제작-나의냉장고"]
i=0;
m=0;
d=0;
g=0;
function next_movie(){
    m=m+5;
    movie1.src=mposter[m];
    movie2.src=mposter[m+1];
    movie3.src=mposter[m+2];
    movie4.src=mposter[m+3];
    movie5.src=mposter[m+4];
    }
function back_movie(){
    m=m-5;
    if(m<0){m=0;};
    movie1.src=mposter[m];
    movie2.src=mposter[m+1];
    movie3.src=mposter[m+2];
    movie4.src=mposter[m+3];
    movie5.src=mposter[m+4];
    }
function next_drama(){
    d=d+5;
    drama1.src=mposter[d];
    drama2.src=mposter[d+1];
    drama3.src=mposter[d+2];
    drama4.src=mposter[d+3];
    drama5.src=mposter[d+4];
    }
function back_drama(){
    d=d-5;
    if(d<0){d=0;};
    drama1.src=mposter[d];
    drama2.src=mposter[d+1];
    drama3.src=mposter[d+2];
    drama4.src=mposter[d+3];
    drama5.src=mposter[d+4];
    }
function next_game(){
    g=g+5;
    game1.src=mposter[g];
    game2.src=mposter[g+1];
    game3.src=mposter[g+2];
    game4.src=mposter[g+3];
    game5.src=mposter[g+4];
    }
function back_game(){
    g=g-5;
    if(g<0){g=0;};
    game1.src=mposter[g];
    game2.src=mposter[g+1];
    game3.src=mposter[g+2];
    game4.src=mposter[g+3];
    game5.src=mposter[g+4];
    }
    
function back(){ 
    i--;
    if(i<0){i=0;}
    document.getElementById("pftitle").innerHTML=title[i];
    pfimage.src=inimage[i];
}
function next(){ 
    i++;
    if(i>4){document.getElementById("pftitle").innerHTML="준비중";
                    pfimage.src="1.jpeg"; i=4;}
    else {document.getElementById("pftitle").innerHTML=title[i];
    pfimage.src=inimage[i];}
}
inimage=["por1.jpg","por2.jpg","por3.jpg","por4.jpg","por5.png"]

mposter=["movie1.jpeg","movie2.jpeg","movie3.jpeg","movie4.jpeg","movie5.jpeg","movie6.jpeg","movie7.jpeg","movie8.jpeg","movie9.jpeg","movie10.jpeg"]
