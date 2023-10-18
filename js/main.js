var banks = [
  "access",
  "uba",
  "firstbank",
  "gtb",
  "opay",
  "union",
  "zenith",
  "fidelity",
  "ecobank",
  "keystone",
  "polaris",
  "fcmb",
  "sterling",
  "wema",
  "unity",
  "heritage",
  "stanbic",
  "ecobank",
  "suntrust",
  "jaiz",
];

var bankList = document.getElementById("bankname");
var bankListInnerHtml = "";

banks.forEach((bank) => {
  bankListInnerHtml += `<option value="${bank}">${bank.toUpperCase()}</option>`;
});

bankList.innerHTML = bankListInnerHtml;

var generateButton = document.getElementById("generate");
var result = document.getElementById("result");

generateButton.onclick = function () {
  var amount = document.getElementById("amount").value;
  var nuban = document.getElementById("nuban").value;
  var bankListValue = bankList.value;
  if(amount && nuban){
    var generatedResult = getUSSD(amount, nuban, bankListValue);
    result.innerHTML= `<h4 class="text-break">${generatedResult}</h4>
    <a class="btn btn-info d-flex align-items-center justify-content-center" href="tel:${encodeURIComponent(generatedResult)}"><i class="fa fa-phone"></i></a>`;
  }else{
    alert("Error: Fill in all the required fields!")
  }
};

function getUSSD(amount, nuban, bankname) {
  var codes = {
    access: `*901*${amount}*${nuban}#`,
    uba: `*919*4*${nuban}*${amount}#`,
    firstbank: `*894*${amount}*${nuban}#`,
    gtb: `*737*2*${amount}*${nuban}#`,
    opay: `*955*2*${amount}*${nuban}#`,
    union: `*826*2*${amount}*${nuban}#`,
    zenith: `*966*${amount}*${nuban}#`,
    fidelity: `*770*${amount}*${nuban}#`,
    ecobank: `*326*2*${amount}*${nuban}#`,
    keystone: `*7111*${amount}*${nuban}#`,
    polaris: `*833*${amount}*${nuban}#`,
    fcmb: `*329*${amount}*${nuban}#`,
    sterling: `*822*${amount}*${nuban}#`,
    wema: `*945*${nuban}*${amount}#`,
    unity: `*7799*1*${nuban}*${amount}#`,
    heritage: `*745*2*${amount}*${nuban}#`,
    stanbic: `*909*22*${amount}*${nuban}#`,
    ecobank: `*326*2*${amount}*${nuban}#`,
    suntrust: `*945*${nuban}*${amount}#`,
    jaiz: `*773*1*${amount}*${nuban}#`,
  };

  return codes[bankname];
}
