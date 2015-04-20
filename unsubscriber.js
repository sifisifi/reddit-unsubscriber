(function() {

// 初期購読リスト
var xs = [ "t5_2r0ij" // announcements
         , "t5_2qh7a" // Art
         , "t5_2qh1i" // AskReddit
         , "t5_2qm4e" // askscience
         , "t5_2qh1o" // aww
         , "t5_2qh49" // blog
         , "t5_2qh4i" // books
         , "t5_2raed" // creepy
         , "t5_2tk95" // dataisbeautiful
         , "t5_2qh7d" // DIY
         , "t5_2qhlh" // Documentaries
         , "t5_2sbq3" // EarthPorn
         , "t5_2sokd" // explainlikeimfive
         , "t5_2qhx4" // Fitness
         , "t5_2qh55" // food
         , "t5_2qh33" // funny
         , "t5_2t7no" // Futurology
         , "t5_2qgzt" // gadgets
         , "t5_2qh03" // gaming
         , "t5_2rmfx" // GetMotivated
         , "t5_2qt55" // gifs
         , "t5_2qh53" // history
         , "t5_2qzb6" // IAmA
         , "t5_2ul7u" // InternetIsBeautiful
         , "t5_2qh72" // Jokes
         , "t5_2s5oq" // LifeProTips
         , "t5_2qxzy" // listentothis
         , "t5_2ti4h" // mildlyinteresting
         , "t5_2qh3s" // movies
         , "t5_2qh1u" // Music
         , "t5_2qh3l" // news
         , "t5_2rm4d" // nosleep
         , "t5_2qnts" // nottheonion
         , "t5_2tycb" // OldSchoolCool
         , "t5_2qstm" // personalfinance
         , "t5_2qh5b" // philosophy
         , "t5_2tecy" // photoshopbattles
         , "t5_2qh0u" // pics
         , "t5_mouw"  // science
         , "t5_2szyo" // Showerthoughts
         , "t5_2qh87" // space
         , "t5_2qgzy" // sports
         , "t5_2qh6e" // television
         , "t5_2to41" // tifu
         , "t5_2qqjc" // todayilearned
         , "t5_2r2jt" // TwoXChromosomes
         , "t5_2u3ta" // UpliftingNews
         , "t5_2qh1e" // videos
         , "t5_2qh13" // worldnews
         , "t5_2s3nb" // WritingPrompts
         ];

var indicater = function() {
    var box = document.createElement('div');
    var s = box.style;
    s.backgroundColor = "#fefefe";
    s.position = "fixed";
    s.top = "50%";
    s.left = "35%";
    s.width = "30%";
    s.height = "50px";
    s.lineHeight = "50px";
    s.textAlign = "center";
    s.border = "1px solid gray";
    s.borderRadius = "3px";
    s.boxShadow = "2px 2px 1px rgba(55,55,55,0.3)";
    document.body.appendChild(box);
    return box;
};

var box = indicater();

var closeIndicater = function() {
    document.body.removeChild(box);
};

var updateIndicater = function(n) {
    box.innerHTML = "初期購読subredditの購読解除中(" + n + "/" + xs.length + "完了)";
};

var i = 0;
var unsubRecursive = function() {
    if (i < xs.length) {
        updateIndicater(i + 1);
        unsubscribe(xs[i])();
        ++i;
        setTimeout(unsubRecursive, 1000);
    } else {
        closeIndicater();
    }
};

unsubRecursive();

})();
