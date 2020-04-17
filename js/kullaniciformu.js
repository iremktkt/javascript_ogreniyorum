function formkontrol(){

    ad= document.getElementById('ad').value;
    soyad= document.getElementById('soyad').value;
    sifre= document.getElementById('sifre').value;
    tsifre= document.getElementById('tsifre').value;
    meslek= document.getElementById('meslek').value;
    adres= document.getElementById('adres').value;
    eposta= document.getElementById('eposta').value;
    sehir= document.getElementById('sehir').value;
    tc= document.getElementById('tc').value;
    tel= document.getElementById('tel').value;


    var hata= new Array();
    var sembol = '*|,:<>[]{}`;()@&$#%!+-"/';

    var sembolvar=false;
    for (var i = 0; i < sifre.length; i++) {
        if (sembol.indexOf(sifre.charAt(i))!=-1){
            sembolvar=true;
        }
    }


    if(ad=="")
        hata.push('Lütfen adı boş geçmeyiniz');


    if (sifre=='')
        hata.push('Şifre alanını boş geçmeyiniz');
    else{
        if (sifre!=tsifre)
            hata.push('Şifreler aynı olmalıdır.');

        else if (sifre.length<4)
            hata.push('Şifre 4 karekter veya daha büyük olmalıdır.');
    }
    if (meslek == '')
        hata.push('Lütfen meslek grubunu boş bırakmayınız');
    if (adres == '')
        hata.push('Lütfen adres grubunu boş bırakmayınız');
    if (eposta == '')
        hata.push('Lütfen posta grubunu boş bırakmayınız');
    if (sehir == '')
        hata.push('Lütfen sehir grubunu boş bırakmayınız');

    try {
        if (tc == '')
            hata.push('Lütfen TC grubunu boş bırakmayınız');
        else if (tc.length < 11)
            hata.push('TC 11 karakter olmalıdır.');
        else if (isNaN(tc.value))
            hata.push('Hatali karakter girisi yaptınız sadece rakam kullanın');
    }
    catch (e) {
        uyarı.textContent=e;
        tc.focus();
    }

    try {
        if (tel == '')
            hata.push('Lütfen Telefon grubunu boş bırakmayınız');
        else if (tel.length < 11)
            hata.push('Telefon 11 karakter olmalıdır.');
        else if (isNaN(tel.value))
            hata.push('Hatali karakter girisi yaptınız sadece rakam kullanın');
    }
    catch (e) {
        uyarı.textContent=e;
        tel.focus();
    }




    if (hata.length > 0) {
        alert(hata.join("\n"));
        return false;
    }
    else alert('Onaylandı');

    for(i=0;i<document.getElementById('yıl').length;i++)
    {
        if(document.getElementById('yıl').selected)
        {
            document.getElementById('yıl').value+="Doğum Yılınız "+document.getElementById('yıl').value+"n";
        }
    }

    for(i=0;i<document.getElementById('cinsiyet').length;i++)
    {
        if(document.getElementById('cinsiyet').selected)
        {
            document.getElementById('cinsiyet').value+="Cinsiyet "+document.getElementById('cinsiyet').value+"n";
        }
    }





}