
(function (e) {
    var t = document.scripts[document.scripts.length - 1],
        n = t.parentElement,
        r = document.createElement("iframe"),
        i = !1;
    if (typeof cf_widget_mode != "undefined") {
        i = "https://www.worldcoinindex.com/widget/renderWidget?mode=g-l&to=" + cf_widget_to;
        if (cf_widget_mode == "g-l") {
            if (cf_widget_size == "small") {
                r.width = "250px";
                r.height = "270px"
            } else if (cf_widget_size == "medium") {
                r.width = "300px";
                r.height = "270px"
            } else if (cf_widget_size == "large") {
                r.width = "336px";
                r.height = "270px"
            }
            r.id = "cf_g_l_widget_iframe"
        }
    } else {
        i = "https://www.worldcoinindex.com/widget/renderWidget?size=" + cf_widget_size + "&from=" + cf_widget_from + "&to=" + cf_widget_to + "&clearstyle=" + cf_clearstyle;
        if (cf_widget_size == "small") {
            r.width = "300px";
            r.height = "135px"
        } else if (cf_widget_size == "medium") {
            r.width = "300px";
            r.height = "240px"
        } else if (cf_widget_size == "large") {
            r.width = "300px";
            r.height = "340px"
        } 
        r.id = "cf_widget_iframe"
    }
    r.setAttribute("data-size", cf_widget_size);
    r.style.cssText = "border:none;"; -1 == navigator.userAgent.indexOf("MSIE") ? r.src = i : r.location = i;
    n.replaceChild(r, t)
})(document);