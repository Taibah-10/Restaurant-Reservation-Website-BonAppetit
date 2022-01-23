window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 || window.innerWidth < 1050) {
        document.getElementById("logo").id = "newlogo";
        document.getElementById("navi").id = "newnavi";
        document.getElementById("logoname").id = "newlogoname";
        document.getElementById("navbarNavDropdown").style.marginLeft = "0px";

    }
    else{
        document.getElementById("newlogo").id = "logo";
        document.getElementById("newnavi").id = "navi";
        document.getElementById("newlogoname").id = "logoname";
        document.getElementById("navbarNavDropdown").style.marginLeft = "120px";
    }
}

// window.onresize = function() {mynav()};

window.addEventListener('resize', () => { mynav() } )
window.addEventListener('resize', () => { mynav2() } )
window.addEventListener('resize', () => { sizemd() } )

function mynav(){
    if(window.innerWidth < 1050){
        document.getElementById("logo").id = "newlogo";
        document.getElementById("navi").id = "newnavi";
        document.getElementById("logoname").id = "newlogoname";
        document.getElementById("navbarNavDropdown").style.marginLeft = "0px";
    }
    else{
        document.getElementById("newlogo").id = "logo";
        document.getElementById("newnavi").id = "navi";
        document.getElementById("newlogoname").id = "logoname";
        document.getElementById("navbarNavDropdown").style.marginLeft = "120px";
    }
}

function mynav2(){
    if(window.innerWidth < 992){
        document.getElementById("reserve").id="newreserve";
        document.getElementById("contact_nav").id="newcontact_nav";
        document.getElementById("navbarNavDropdown").style.width="100%";
    }
    else{
        document.getElementById("newreserve").id="reserve";
        document.getElementById("newcontact_nav").id="contact_nav";
    }
}

function sizemd(){
    var img1 = document.getElementsByClassName("img1");
    var img2 = document.getElementsByClassName("img2");
    var head = document.getElementsByClassName("mainheading");
    var description = document.getElementsByClassName("desc");
    var abt1 = document.getElementById("abt1");
    var abt2 = document.getElementById("abt2");
    var menuhead = document.getElementsByClassName("menuhead");
    // var men = document.getElementsByClassName("men");
    var col = document.getElementsByClassName("col");
    var col12 = document.getElementsByClassName("col-12");
    var menuback = document.getElementById("menubackground");
    var menuback1 = document.getElementById("menubackground1");
    var reservation = document.getElementById("reservation");
    var days = document.getElementsByTagName("h4");
    var book1 = document.getElementById("book1");
    var book2 = document.getElementById("book2");
    var input = document.getElementsByClassName("input");
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    if(window.innerWidth > 1200){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "50%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "24.5%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="40px";
        }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="24px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="24px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="16px";
        // }
        for(i=0; i<col12.length; i++){
            col12[i].className="col";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="16px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="250px";
        }
        abt1.style.fontSize="30px";
        abt1.className="col-5";
        abt2.className="col-7";
        menuback.style.height="1040px";
        menuback1.style.height="1040px";
        reservation.style.height="750px";
        form1.className="col-6";
        form2.className="col-6";
        document.getElementById("welcome").style.fontSize="50px";
        document.getElementById("menucontent").style.height="640px";
        document.getElementById("menucontainer").style.paddingLeft="24px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="20px";
        document.getElementById("menuhead1").style.marginTop="30px";
        document.getElementById("menuhead2").style.paddingTop="20px";
        document.getElementById("menuhead2").style.marginTop="80px";
        document.getElementById("menuhead3").style.paddingTop="20px";
        document.getElementById("menuhead3").style.marginTop="30px";
        document.getElementById("menuhead4").style.paddingTop="20px";
        document.getElementById("menuhead4").style.marginTop="30px";

        document.getElementById("menuhead21").style.marginBottom="30px";
        document.getElementById("menuhead31").style.paddingBottom="20px";
        document.getElementById("menuhead41").style.paddingBottom="20px";

        book1.style.width="672px";
        book1.style.height="600px";
        book1.style.marginRight="0px";
        book2.style.width="440.8px";
        book2.style.marginRight="0px";
        document.getElementById("form").style.paddingLeft="45px";
        document.getElementById("menuitems").style.paddingRight="0px";
    }
    if(window.innerWidth < 1200 && window.innerWidth >= 992){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "50%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "24.5%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="38px";
        }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="22px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="20.5px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="12.5px";
        // }
        for(i=0; i<col12.length; i++){
            col12[i].className="col";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="16px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="250px";
        }
        abt1.style.fontSize="26px";
        abt1.className="col-5";
        abt2.className="col-7";
        menuback.style.height="1040px";
        menuback1.style.height="1040px";
        reservation.style.height="750px";
        form1.className="col-6";
        form2.className="col-6";
        document.getElementById("welcome").style.fontSize="48px";
        document.getElementById("menucontent").style.height="640px";
        document.getElementById("menucontainer").style.paddingLeft="24px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="20px";
        document.getElementById("menuhead1").style.marginTop="30px";
        document.getElementById("menuhead2").style.paddingTop="20px";
        document.getElementById("menuhead2").style.marginTop="80px";
        document.getElementById("menuhead3").style.paddingTop="20px";
        document.getElementById("menuhead3").style.marginTop="30px";
        document.getElementById("menuhead4").style.paddingTop="20px";
        document.getElementById("menuhead4").style.marginTop="30px";

        document.getElementById("menuhead21").style.marginBottom="30px";
        document.getElementById("menuhead31").style.paddingBottom="20px";
        document.getElementById("menuhead41").style.paddingBottom="20px";

        book1.style.width="572px";
        book2.style.width="340.8px";
        book1.style.height="600px";
        book1.style.marginRight="0px";
        book2.style.marginRight="0px";
        document.getElementById("form").style.paddingLeft="17px";
        document.getElementById("menuitems").style.paddingRight="0px";

    }
    else if(window.innerWidth < 992 && window.innerWidth >= 768 && onload){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "50%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "24.35%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="36px";
        }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="20px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="20.5px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="12.5px";
        // }
        for(i=0; i<col.length; i++){
            col[i].className="col-12";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="20px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="250px";
        }
        abt1.style.fontSize="24px";
        abt1.className="col-5";
        abt2.className="col-7";
        menuback.style.height="1500px";
        menuback1.style.height="1500px";
        reservation.style.height="1250px";
        form1.className="col-6";
        form2.className="col-6";
        document.getElementById("welcome").style.fontSize="46px";
        document.getElementById("menucontent").style.height="1100px";
        document.getElementById("menucontainer").style.paddingLeft="24px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="0px";
        document.getElementById("menuhead1").style.marginTop="0px";
        document.getElementById("menuhead2").style.paddingTop="0px";
        document.getElementById("menuhead2").style.marginTop="0px";
        document.getElementById("menuhead3").style.paddingTop="0px";
        document.getElementById("menuhead3").style.marginTop="0px";
        document.getElementById("menuhead4").style.paddingTop="0px";
        document.getElementById("menuhead4").style.marginTop="0px";

        document.getElementById("menuhead21").style.marginBottom="0px";
        document.getElementById("menuhead31").style.paddingBottom="0px";
        document.getElementById("menuhead41").style.paddingBottom="0px";

        document.getElementById("menuitems").style.paddingRight="30px";

        book1.style.width="672px";
        book2.style.width="672px";  
        book1.style.height="600px";
        book1.style.marginRight="0px";
        book2.style.marginRight="0px";  
        document.getElementById("form").style.paddingLeft="45px";

    }
    else if(window.innerWidth < 768 && window.innerWidth >=462 && onload){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "98%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "0%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="34px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="20.5px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="12.5px";
        // }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="18px";
        }
        for(i=0; i<col.length; i++){
            col[i].className="col-12";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="20px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="350px";
        }
        document.getElementById("about").style.height="870px";
        abt1.style.fontSize="20px";
        abt1.style.marginBottom = "20px";
        abt1.className="col-12";
        abt2.className="col-12";
        menuback.style.height="1500px";
        menuback1.style.height="1500px";
        reservation.style.height="1500px";
        form1.className="col-12";
        form2.className="col-12";
        document.getElementById("welcome").style.fontSize="40px";
        document.getElementById("menucontent").style.height="1100px";
        document.getElementById("menucontainer").style.paddingLeft="24px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="0px";
        document.getElementById("menuhead1").style.marginTop="0px";
        document.getElementById("menuhead2").style.paddingTop="0px";
        document.getElementById("menuhead2").style.marginTop="0px";
        document.getElementById("menuhead3").style.paddingTop="0px";
        document.getElementById("menuhead3").style.marginTop="0px";
        document.getElementById("menuhead4").style.paddingTop="0px";
        document.getElementById("menuhead4").style.marginTop="0px";

        document.getElementById("menuhead21").style.marginBottom="0px";
        document.getElementById("menuhead31").style.paddingBottom="0px";
        document.getElementById("menuhead41").style.paddingBottom="0px";

        document.getElementById("menuitems").style.paddingRight="30px";

        book1.style.width="480px";
        book2.style.width="480px";
        book1.style.height="800px";
        book1.style.marginRight="1000px";
        book2.style.marginRight="1000px";
        document.getElementById("form").style.paddingLeft="70px";
    }
    else if(window.innerWidth < 462 && window.innerWidth >=408 && onload){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "96%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "0%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="32px";
        }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="16px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="19px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="11px";
        // }
        for(i=0; i<col.length; i++){
            col[i].className="col-12";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="20px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="300px";
        }
        abt1.style.fontSize="18px";
        abt1.style.marginBottom = "20px";
        abt1.className="col-12";
        abt2.className="col-12";
        menuback.style.height="1500px";
        menuback1.style.height="1500px";
        reservation.style.height="1500px";
        form1.className="col-12";
        form2.className="col-12";
        document.getElementById("about").style.height="970px";
        document.getElementById("welcome").style.fontSize="36px";
        document.getElementById("menucontent").style.height="1100px";
        document.getElementById("menucontainer").style.paddingLeft="24px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="0px";
        document.getElementById("menuhead1").style.marginTop="0px";
        document.getElementById("menuhead2").style.paddingTop="0px";
        document.getElementById("menuhead2").style.marginTop="0px";
        document.getElementById("menuhead3").style.paddingTop="0px";
        document.getElementById("menuhead3").style.marginTop="0px";
        document.getElementById("menuhead4").style.paddingTop="0px";
        document.getElementById("menuhead4").style.marginTop="0px";

        document.getElementById("menuhead21").style.marginBottom="0px";
        document.getElementById("menuhead31").style.paddingBottom="0px";
        document.getElementById("menuhead41").style.paddingBottom="0px";

        document.getElementById("menuitems").style.paddingRight="30px";

        book1.style.width="430px";
        book2.style.width="430px";
        book1.style.height="800px";
        book1.style.marginRight="0px";
        book2.style.marginRight="0px";
        document.getElementById("form").style.paddingLeft="45px";
    }

    else if(window.innerWidth < 408 && onload){
        for(i=0; i<img1.length; i++){
            img1[i].style.width = "96%";
        }
        for(i=0; i<img2.length; i++){
            img2[i].style.width = "0%";
        }
        for(i=0; i<head.length; i++){
            head[i].style.fontSize="32px";
        }
        for(i=0; i<description.length; i++){
            description[i].style.fontSize="16px";
        }
        for(i=0; i<menuhead.length; i++){
            menuhead[i].style.fontSize="17px";
        }
        // for(i=0; i<men.length; i++){
        //     men[i].style.fontSize="9px";
        // }
        for(i=0; i<col.length; i++){
            col[i].className="col-12";
        }
        for(i=0; i<days.length; i++){
            days[i].style.fontSize="14px";
        }
        for(i=0; i<input.length; i++){
            input[i].style.width="200px";
        }
        abt1.style.fontSize="18px";
        abt1.style.marginBottom = "20px";
        abt1.className="col-12";
        abt2.className="col-12";
        menuback.style.height="1500px";
        menuback1.style.height="1500px";
        reservation.style.height="1500px";
        form1.className="col-12";
        form2.className="col-12";
        document.getElementById("about").style.height="970px";
        document.getElementById("welcome").style.fontSize="36px";
        document.getElementById("menucontent").style.height="1100px";
        document.getElementById("menucontent").style.paddingLeft="0px";
        document.getElementById("menucontainer").style.paddingLeft="0px";
        document.getElementById("menucontainer").style.paddingRight="24px";
        document.getElementById("menuhead1").style.paddingTop="0px";
        document.getElementById("menuhead1").style.marginTop="0px";
        document.getElementById("menuhead2").style.paddingTop="0px";
        document.getElementById("menuhead2").style.marginTop="0px";
        document.getElementById("menuhead3").style.paddingTop="0px";
        document.getElementById("menuhead3").style.marginTop="0px";
        document.getElementById("menuhead4").style.paddingTop="0px";
        document.getElementById("menuhead4").style.marginTop="0px";

        document.getElementById("menuhead21").style.marginBottom="0px";
        document.getElementById("menuhead31").style.paddingBottom="0px";
        document.getElementById("menuhead41").style.paddingBottom="0px";

        document.getElementById("menuitems").style.paddingRight="10px";

        book1.style.width="330px";
        book2.style.width="330px";
        book1.style.height="800px";
        book1.style.marginRight="0px";
        book2.style.marginRight="0px";
        document.getElementById("form").style.paddingLeft="35px";
    }

    else{
        return false;
    }
}

function adding(id){
    var element=document.getElementById(id);
    element.classList.add("active");
    if(id=="1"){
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("4").classList.remove("active");
        document.getElementById("menuitems").innerHTML=document.getElementById("menu1").innerHTML;
    }
    if(id=="2"){
        document.getElementById("1").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("4").classList.remove("active");
        document.getElementById("menuitems").innerHTML=document.getElementById("menu2").innerHTML;
    } 
    if(id=="3"){
        document.getElementById("2").classList.remove("active");
        document.getElementById("1").classList.remove("active");
        document.getElementById("4").classList.remove("active");
        document.getElementById("menuitems").innerHTML=document.getElementById("menu3").innerHTML;
    } 
    if(id=="4"){
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("1").classList.remove("active");
        document.getElementById("menuitems").innerHTML=document.getElementById("menu4").innerHTML;
    }    
}

function display(){
    document.getElementById("menuitems").innerHTML=document.getElementById("menu1").innerHTML;
}


function submitted() {
    var n=document.getElementById("name").value;
    var e=document.getElementById("email").value;
    var c=document.getElementById("contact").value;
    var g=document.getElementById("guests").value;
    var d=document.getElementById("date").value;
    var t=document.getElementById("time").value;
    if(n.length==0 || e.length==0 || c.length==0 || g.length==0 || d.length==0 || t.length==0){
        alert("Please fill all fields!");
        return false;
    }
    else{
        alert("You'll get an email of confirmation of your reservation!!");
        return true;
    }
}




