function paginationism(options) {
    ////////Değişkenler

    this.firstButton = "<First";
    this.lastButton = "Last>"
    this.firstLastButtons = true;
    this.previousButton = "<";
    this.nextButton = ">";
    this.previousNextButtons = true;
    this.reduce = false;
    this.withArray = "";
    this.getID = "";
    var paginationName = "";
    var whenArray = "";
    this.beginWith;
    ///////Değişkenlerin güncellendiği sorgu
    if (options) {

        if (typeof options.paginationName !== "undefined") {
            this.paginationName = options.paginationName;
        }
        if (typeof options.withArray !== "undefined") {
            this.withArray = options.withArray;
        }
        if (typeof options.previousNextButtons !== "undefined") {
            this.previousNextButtons = options.previousNextButtons;
        }
        if (typeof options.firstLastButtons !== "undefined") {
            this.firstLastButtons = options.firstLastButtons;
        }
        if (typeof options.firstButton !== "undefined") {
            this.firstButton = options.firstButton;
        }
        if (typeof options.lastButton !== "undefined") {
            this.lastButton = options.lastButton;
        }
        if (typeof options.previousButton !== "undefined") {
            this.previousButton = options.previousButton;
        }
        if (typeof options.beginWith !== "undefined") {
            this.beginWith = options.beginWith;
        }
        if (typeof options.nextButton !== "undefined") {
            this.nextButton = options.nextButton;
        }
        if (typeof options.getID !== "undefined") {
            this.getID = options.getID;
        }
        if (typeof options.reduce !== "undefined") {
            this.reduce = options.reduce;
        }

    }
    return this;

};


/* _ Prototype Functions
============================ */

paginationism.prototype = {

    ///////pagination yaratan fonksiyon
    create: function (paginationName) {

        var firstItem = 0;
        var reducee = this.reduce;

        if (paginationName) {
            this.paginationName = paginationName;
        } else {}

        this.par = document.getElementsByClassName(this.paginationName);

        if (typeof this.withArray === 'object') {
            var ul = document.createElement('ul');
            this.par[0].appendChild(ul);
            for (var i = 0; i < this.withArray.length; i++) {
                var li = document.createElement('li');
                li.textContent = this.withArray[i];
                ul.appendChild(li);
            }
        }
        var ul = this.par[0].children;
        var li = [];
        firstItem++;
        var previous = document.createElement("li");
        previous.className = "pagePrevious";
        if (typeof this.previousButton === 'object') {
            previous.appendChild(this.previousButton);
        } else {
            previous.textContent = this.previousButton;
        }

        ul[0].appendChild(previous);
        var next = document.createElement("li");
        next.className = "pageNext";
        if (typeof this.nextButton === 'object') {
            next.appendChild(this.nextButton);
        } else {
            next.textContent = this.nextButton;
        }
        ul[0].appendChild(next);
        ul[0].insertBefore(previous, ul[0].firstElementChild);


        if (this.previousNextButtons == false) {
            next.style.display = 'none';
            previous.style.display = "none";
        }


        firstItem++;
        var first = document.createElement("li");
        first.className = "pageFirst";
        if (typeof this.firstButton === 'object') {
            first.appendChild(this.firstButton);
        } else {
            first.textContent = this.firstButton;
        }
        ul[0].appendChild(first);
        var last = document.createElement("li");
        last.className = "pageLast";
        ul[0].appendChild(last);
        if (typeof this.lastButton === 'object') {
            last.appendChild(this.lastButton);
        } else {
            last.textContent = this.lastButton;
        }
        ul[0].insertBefore(first, ul[0].firstElementChild);


        if (this.firstLastButtons == false) {
            first.style.display = 'none';
            last.style.display = "none";
        }


        for (i = 0; i < ul[0].children.length; i++) {
            li[i] = ul[0].children[i];
            if (i >= firstItem && i < ul[0].children.length - firstItem) {
                li[i].id = i - firstItem;
                li[i].value = "0";
            }
        };






        var lastItem = ul[0].children.length - firstItem - 1;
        var actionUse = this.getID;
        if (actionUse) {
            actionUse(li[firstItem].id, li[firstItem].textContent);
        }

        //////// hangi değerle başlamak istediği eklenirse        
        if (typeof this.beginWith === "string") {
            for (i = 0; i < ul[0].children.length; i++) {
                if (i >= firstItem && i < ul[0].children.length - firstItem) {
                    if (li[i].textContent == this.beginWith) {
                        li[i].value = "1";
                        var nowItem = li[i].id;
                        actionUse(li[parseInt(nowItem) + firstItem].id, li[parseInt(nowItem) + firstItem].textContent);
                    }
                }
            };

        } else {
            li[firstItem].value = "1";
            var nowItem = li[firstItem].id;
        }

        /////////seçili olan sayfayı işaretleyen fonksiyon
        function styleRefresh() {
            for (var i = 0; i < ul[0].children.length; i++) {
                if (ul[0].children[i].value == "1") {
                    ul[0].children[i].style.fontWeight = "bold";
                    ul[0].children[i].style.textDecoration = "underline";
                } else {
                    ul[0].children[i].style.fontWeight = "normal";
                    ul[0].children[i].style.textDecoration = "none";
                }
            }
        }

        /////////pagination'u kısaltan fonksiyon
        function reduce() {
            a.style.display = "none";
            b.style.display = "none";
            if (liID.length > 9) {
                for (var i = 0; i < liID.length; i++) {
                    liID[i].style.display = "none";
                }
                for (var i = 0; i < liID.length; i++) {
                    if (liID[i].value == "1") {
                        if (i < 4) {
                            b.style.display = "inline";
                            for (var k = 1; k < 7; k++) {
                                liID[k].style.display = "inline";
                            }
                        } else if (i >= 4 && i < liID.length - 4) {
                            a.style.display = "inline";
                            b.style.display = "inline";
                            for (var k = i - 2; k <= i + 2; k++) {
                                liID[k].style.display = "inline";
                            }
                        } else if (i >= liID.length - 4 && i < liID.length) {
                            a.style.display = "inline";
                            for (var k = liID.length - 7; k < liID.length; k++) {
                                liID[k].style.display = "inline";
                            }
                        }
                        liID[i].style.display = "inline";
                    }
                    liID[0].style.display = "inline";
                    liID[liID.length - 1].style.display = "inline";
                }
            }
        }
        /////////eğer kısaltma istenmişse
        if (reducee == true) {
            var a = document.createElement("li");
            a.textContent = "...";
            a.className = "a";
            var b = document.createElement("li");
            b.textContent = "...";
            b.className = "b";
            var liID = []
            var k = 0;
            for (var i = 0; i < ul[0].children.length; i++) {
                if (ul[0].children[i].id) {
                    liID[k] = ul[0].children[i];
                    k++;

                }

            }

            ul[0].appendChild(a);
            ul[0].insertBefore(a, li[parseInt(firstItem) + 1]);
            ul[0].appendChild(b);
            ul[0].insertBefore(b, li[lastItem]);

            reduce();

        }

        styleRefresh();

        ///////// mause işaretini değiştirme
        ul[0].onmouseover = function (event) {
            if (event.target.id) {
                event.target.style.cursor = "pointer";
            }
            var classname = event.path[0].className;
            if (classname == "pagePrevious" || classname == "pageNext" || classname == "pageLast" || classname == "pageFirst") {
                event.target.style.cursor = "pointer";
            }



        }

        //////////click olayı ve yapılan işlemler
        ul[0].onclick = function (event) {
            if (typeof event === 'string') {
                if (event == "pageNext" && nowItem < lastItem - firstItem) {
                    nowItem++;
                    for (i = firstItem; i < ul[0].children.length - firstItem; i++) {
                        if (i == parseInt(nowItem) + parseInt(firstItem)) {
                            li[i].value = "1";

                            if (actionUse) {
                                actionUse(li[i].id, li[i].textContent);
                            }
                        } else {
                            li[i].value = "0";
                        }
                    };
                    if (reducee == true) {
                        reduce();
                    }
                    styleRefresh();
                }
                if (event == "pagePrevious" && nowItem > 0) {
                    for (i = firstItem; i < ul[0].children.length - firstItem; i++) {
                        if (i == parseInt(nowItem) + parseInt(firstItem) - 1) {
                            li[i].value = "1";
                            if (actionUse) {
                                actionUse(li[i].id, li[i].textContent);
                            }

                        } else {
                            li[i].value = "0";
                        }


                    };
                    nowItem--;
                    if (reducee == true) {
                        reduce();
                    }
                    styleRefresh();
                }

            } else {
                if (!event.target.id) {
                    for (var i = 0; i < event.path.length; i++) {
                        if (event.path[i].localName == "li") {
                            var className = event.path[i].className
                            if (className == "pageFirst") {
                                for (i = 0; i < ul[0].children.length; i++) {
                                    if (i >= firstItem && i < ul[0].children.length - firstItem) {
                                        li[i].value = "0";
                                    }
                                };
                                li[firstItem].value = "1";
                                nowItem = li[firstItem].id;
                                if (actionUse) {
                                    actionUse(li[firstItem].id, li[firstItem].textContent);
                                }
                                if (reducee == true) {
                                    reduce();
                                }
                                styleRefresh();
                            }
                            if (className == "pageLast") {
                                for (i = 0; i < ul[0].children.length; i++) {
                                    if (i >= firstItem && i < ul[0].children.length - firstItem) {
                                        li[i].value = "0";
                                    }
                                };
                                li[lastItem].value = "1";
                                nowItem = li[lastItem].id;
                                if (actionUse) {
                                    actionUse(li[lastItem].id, li[lastItem].textContent);
                                }
                                if (reducee == true) {
                                    reduce();
                                }
                                styleRefresh();
                            }
                            if (className == "pagePrevious" && nowItem > 0) {
                                for (i = firstItem; i < ul[0].children.length - firstItem; i++) {
                                    if (i == parseInt(nowItem) + parseInt(firstItem) - 1) {
                                        li[i].value = "1";
                                        if (actionUse) {
                                            actionUse(li[i].id, li[i].textContent);
                                        }

                                    } else {
                                        li[i].value = "0";
                                    }


                                };
                                nowItem--;
                                if (reducee == true) {
                                    reduce();
                                }
                                styleRefresh();
                            }
                            if (className == "pageNext" && nowItem < lastItem - firstItem) {
                                nowItem++;
                                for (i = firstItem; i < ul[0].children.length - firstItem; i++) {
                                    if (i == parseInt(nowItem) + parseInt(firstItem)) {
                                        li[i].value = "1";
                                        if (actionUse) {
                                            actionUse(li[i].id, li[i].textContent);
                                        }

                                    } else {
                                        li[i].value = "0";
                                    }
                                };
                                if (reducee == true) {
                                    reduce();
                                }
                                styleRefresh();
                            }
                            break;
                        }
                    }
                } else {
                    for (i = 0; i < ul[0].children.length; i++) {
                        if (i >= firstItem && i < ul[0].children.length - firstItem) {
                            li[i].value = "0";
                        }
                    };
                    li[parseInt(event.target.id) + parseInt(firstItem)].value = "1";
                    nowItem = li[parseInt(event.target.id) + parseInt(firstItem)].id;
                    if (actionUse) {
                        actionUse(event.target.id, event.target.textContent);
                    }
                    if (reducee == true) {
                        reduce();
                    }
                    styleRefresh();
                }
            }
        }
    },

    ////////////next ilemi yapan fonksiyon
    next: function () {
        this.par = document.getElementsByClassName(this.paginationName);
        if (this.par == null) {
            this.par = document.getElementById(this.paginationName);
        }
        var ul = this.par[0].children;
        ul[0].onclick("pageNext");
    },
    ////////////previous ilemi yapan fonksiyon
    previous: function () {
        this.par = document.getElementsByClassName(this.paginationName);
        if (this.par == null) {
            this.par = document.getElementById(this.paginationName);
        }
        var ul = this.par[0].children;
        ul[0].onclick("pagePrevious");
    }
};