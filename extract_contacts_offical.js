test =function() {
    function t() {
        var t = "<style>div{margin:1em;display:inline-block;max-width:300px}img{object-fit:cover;width:300px;height:200px;}span{float:right;font-size:.85em}h3{padding:10px 5px;font-size:1em}h2{margin:2em;font-size:1.1em;line-height:1.4em}</style>";
        for (var e in list) t += action ? '<div><img src="' + list[e].thumb.replace("t=s", "t=l") + '"><h3>' + list[e].name + "<span>+" + e + "</span></h3></div>" : list[e].name + "," + e + "<br>";
        action && (t += "<h2>The WhatsApp Address book was generated using <a href='http://www.labnol.org/internet/whatsapp-contacts/28789/'>this bookmarklet</a>. You can <a href='http://www.labnol.org/software/save-web-page-as-pdf/21153/'>save as PDF</a> or export this list as a CSV file. <em>Written by <a href='http://ctrlq.org/'>Amit Agarwal</a></em>.</h2>"), $("body").html(t).css("padding", "10px").css("overflow", "visible")
    }

    function e() {
        $("div.chat").each(function() {
            var t = $(this).find("img.avatar-image.is-loaded"),
                e = $(this).find("div.chat-title");
            if (t && t[0] && e && e[0]) {
                var a = t[0].src.match(/u=(\d*)/);
                a && ($("span.drawer-title-body").html("Extracting contacts " + "....".substring(Math.ceil(4 * Math.random()))), list[a[1]] = {
                    thumb: t[0].src,
                    name: e[0].innerText
                })
            }
        }), old = $("div.chatlist-panel-body").scrollTop(), $("div.chatlist-panel-body").scrollTop(old + 72), old != $("div.chatlist-panel-body").scrollTop() ? setTimeout(e, 200) : t()
    }
    var a = document.createElement("script");
    a.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", document.getElementsByTagName("head")[0].appendChild(a), action = !0, list = {}, old = -1, count = 0, -1 == old && (document.getElementsByClassName("icon-chat")[0].click(), action = confirm("Press OK to create a photo address book or press Cancel to create a CSV file that you can later import into your Google contacts."), setTimeout(e, 1e3))
}();