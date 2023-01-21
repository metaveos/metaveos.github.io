window.jsPDF = window.jspdf.jsPDF;
        // Convert HTML content to PDF
function Convert_HTML_To_PDF() {
    var doc = new jsPDF();
	
    // Source HTMLElement or a string containing HTML.
    var elementHTML = document.querySelector("#contentToPrint");
    

    doc.html(elementHTML, {
        callback: function(doc) {
            // Save the PDF
            doc.save('Invoice.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 875 //window width in CSS pixels
        
    });
}


var ne;
 function ted(a,b) {
  ne = document.getElementById(a).value;
  document.getElementById(b).innerHTML=ne;
  
}

var ze;
function tedc(a,b){
    ze = document.getElementById(a).value;
    let ma = ze.split("-")    
    let qe = ma.reverse()
    let ra = qe.toString()
    let fa = ra.replaceAll(',','/')
    document.getElementById(b).innerHTML=fa;
}


function sad(a,b,c,d){
    var jet = document.getElementById(a)
    jet.style.display='table-row';
    var had = document.getElementById(b)
    had.style.display='none';
    var met = document.getElementById(c)
    met.style.display='table-row'
    var cute = document.getElementById(d)
    cute.style.display = 'table-row'
}

function mad(a,b,c,d){
    
    var jet = document.getElementById(a)
    jet.style.display='none';
    var had = document.getElementById(b)
    had.style.display='table-row';
    var met = document.getElementById(c)
    met.style.display='none'
    var cute = document.getElementById(d)
    cute.style.display = 'none'

    gst()
    
}

function del(a,b,c,d,e){
    var itn = document.getElementById(a).value=""
    var qt = document.getElementById(b).value=""
    var pr = document.getElementById(c).value=""
    var dc = document.getElementById(d).value=""
    var toto = document.getElementById(e).value=""
    var discount = pr*dc/100;
    var total = ""; 

        var itnrow = document.getElementById(a+'row').innerHTML=itn;
        var qtrow = document.getElementById(b+'row').innerHTML=qt;
        var prrow = document.getElementById(c+'row').innerHTML=pr;
        var dcrow = document.getElementById(d+'row').innerHTML=dc;
        var totorow = document.getElementById(e+'row').innerHTML=total;
    
    gst() 

}



function calcu(a,b,c,d,e){
    var itn = document.getElementById(a).value
    var qt = document.getElementById(b).value
    var pr = document.getElementById(c).value
    var dc = document.getElementById(d).value
    var toto = document.getElementById(e)
    var discount = pr*dc/100;
    var zitova = (pr*qt) - discount * qt;
    toto.value = zitova.toFixed(2) ; 
    var total = zitova;
    if(dc==''){
        var dcrow = document.getElementById(d+'row').innerHTML=0;
    }else{
        var dcrow = document.getElementById(d+'row').innerHTML=dc;
    }

        var itnrow = document.getElementById(a+'row').innerHTML=itn;
        var qtrow = document.getElementById(b+'row').innerHTML=qt;
        var prrow = document.getElementById(c+'row').innerHTML=pr;
       
        var totorow = document.getElementById(e+'row').innerHTML=total.toFixed(2);
    
    gst()    
    
}

function gst(){
    var toto1 = document.getElementById('toto').value
    var toto2 = document.getElementById('toto1').value
    var toto3 = document.getElementById('toto2').value
    var toto4 = document.getElementById('toto3').value
    var toto5 = document.getElementById('toto4').value
    var toto6 = document.getElementById('toto5').value
    var toto7 = document.getElementById('toto6').value
    var toto8 = document.getElementById('toto7').value

    var tito = document.getElementById('totoprice')
    var hojito = Number(toto1) + Number(toto2) + Number(toto3) + Number(toto4) + Number(toto5) + Number(toto6) + Number(toto7) + Number(toto8);
    tito.innerHTML = hojito.toFixed(2);
    var mito = hojito;
    var gst = document.getElementById('totogst')
    var gstinpu = document.getElementById('gstper').value
    
    var gstout = mito * (gstinpu/100)

    gst.innerHTML= gstout.toFixed(2) ;

    document.getElementById('total').innerHTML= (mito + gstout).toFixed(2)
    document.getElementById('totalf').value = "Total(₹): " + (mito + gstout).toFixed(2)
}






