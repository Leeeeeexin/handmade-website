

        var c1 = document.getElementsByClassName("c1");

        for (var i = 0; i < c1.length; i++) {
            c1[i].onmouseover = function () {
                this.getElementsByTagName("img")[0].style.display = "block";
            }
            c1[i].onmouseout = function () {
                this.getElementsByTagName("img")[0].style.display = "none";
            }
        }

        var ct1 = document.getElementsByClassName("c2-top");
        var ct2 = document.getElementsByClassName("c2-bottom");

        for (var i = 0; i < ct1.length; i++) {
            ct1[i].onmouseover = function () {
                console.log(this.getElementsByTagName("img")[0]);
                this.getElementsByTagName("img")[0].style.display = "block";
            }
            ct1[i].onmouseout = function () {
                this.getElementsByTagName("img")[0].style.display = "none";
            }
        }


        for (var i = 0; i < ct2.length; i++) {
            ct2[i].onmouseover = function () {
                this.getElementsByTagName("img")[0].style.display = "block";
            }
            ct2[i].onmouseout = function () {
                this.getElementsByTagName("img")[0].style.display = "none";
            }
        }
