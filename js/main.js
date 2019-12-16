toc = document.getElementById('toc');
rtype = document.getElementById('rtype');
pvalue = document.getElementById('pvalue');
damount = document.getElementById('damount');
damounterror = document.getElementById('damounterror');
npv = document.getElementById('npv');
mtermy = document.getElementById('mtermy');
mtermm = document.getElementById('mtermm');
cppy = document.getElementById('cppy');
iirate = document.getElementById('iirate');
mmp = document.getElementById('mmp');
var realMmp;
ltv = document.getElementById('ltv');
tmc = document.getElementById('tmc');
tmc2 = document.getElementById('tmc2');
function check() {
    if (+damount.value > +pvalue.value) {
        damounterror.classList.remove("hidden");
    } else {
        damounterror.classList.add("hidden");
        npv.textContent = +pvalue.value - +damount.value;
    }
    mtermm.textContent = mtermy.value * 12;
    if (toc.value == "I am first time buyer" && rtype.value == "Repayment") {
        mmp.textContent = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-npv.textContent).toFixed(2);
        realMmp = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-npv.textContent)
    } else if (toc.value == "I am remortgaging" && rtype.value == "Repayment") {
        mmp.textContent = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-pvalue.value).toFixed(2);
        realMmp = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-pvalue.value);
    } else if (toc.value == "I am remortgaging" && rtype.value == "Interest Only") {
        mmp.textContent = IPMT(+iirate.value/100 / +cppy.textContent , 1 , +mtermm.textContent , +-pvalue.value).toFixed(2);
        realMmp = IPMT(+iirate.value/100 / +cppy.textContent , 1 , +mtermm.textContent , +-pvalue.value);
    } else if (toc.value == "I am moving house" && rtype.value == "Repayment") {
        mmp.textContent = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-npv.textContent).toFixed(2);
        realMmp = pmt(+iirate.value/100 / +cppy.textContent , +mtermm.textContent , +-npv.textContent);
    } else if (toc.value == "I am moving house" && rtype.value == "Interest Only") {
        mmp.textContent = IPMT(+iirate.value/100 / +cppy.textContent , 1 , +mtermm.textContent , +-npv.textContent).toFixed(2);
        realMmp = IPMT(+iirate.value/100 / +cppy.textContent , 1 , +mtermm.textContent , +-npv.textContent);
    } else if (toc.value == "I am first time buyer" && rtype.value == "Interest Only") {
        mmp.textContent = 0;
        realMmp = 0;
    }
    tmc.textContent = (+realMmp * +mtermm.textContent).toFixed(2);
    ltv.textContent = (+tmc.textContent / +npv.textContent * 100).toFixed(2) + "%";
    if (toc.value == "I am moving house" && rtype.value == "Interest Only") {
        tmc2.textContent = +tmc.textContent + +npv.textContent 
    } else if (rtype.value == "Interest Only") {
        tmc2.textContent = +tmc.textContent + +pvalue.value 
    } else if (rtype.value == "Repayment") {
        tmc2.textContent = 0
    }
}