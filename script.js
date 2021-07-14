
function abc()
{
	var z=document.getElementById("num").value;
	var x=document.getElementById("plecz").value;
	var y=document.getElementById("typ").value;
	if(z<'148' && x=='kob' && y=='mtb')
	{
		document.getElementById("ram").innerHTML=" 13-14 cali " ;
		document.getElementById("sym").innerHTML= " XS";
		document.getElementById("kol").innerHTML=" 26 cali";
	}

		else if(x=='kob' && z>='148' && z<='155' && y=='mtb')
		{
			document.getElementById("ram").innerHTML=" 13-14 cali " ;
			document.getElementById("sym").innerHTML= " XS";
			document.getElementById("kol").innerHTML=" 26 cali";
		}
		else if(x=='kob' && z>'155' && z<='168' && y=='mtb')
		{
			document.getElementById("ram").innerHTML=" 15-16 cali " ;
			document.getElementById("sym").innerHTML= " S";
			document.getElementById("kol").innerHTML=" 26 cali";
		}
		else if(x=='kob' && z>'168' && z<='175' && y=='mtb')
		{
			document.getElementById("ram").innerHTML=" 17-18 cali " ;
			document.getElementById("sym").innerHTML= "M";
			document.getElementById("kol").innerHTML=" 27,5/29 cali";
		}
		else if(x=='kob' && z>'175' && z>='185' && y=='mtb')
		{
			document.getElementById("ram").innerHTML=" 19 cali " ;
			document.getElementById("sym").innerHTML= " L";
			document.getElementById("kol").innerHTML=" 27,5/29 cali";
		}

		else if(x=='men' && z<='148' && y=='mtb')
		{
			document.getElementById("ram").innerHTML="13-15 cali";
			document.getElementById("sym").innerHTML="XS";
			document.getElementById("kol").innerHTML="26 cali";
		}
		else if(x=='men' && z>'148' && z<='158' && y=='mtb')
		{
			document.getElementById("ram").innerHTML="13-15 cali";
			document.getElementById("sym").innerHTML="XS";
			document.getElementById("kol").innerHTML="26 cali";
		}
		else if(x=='men' && z>'158' && z<='168' && y=='mtb')
		{
			document.getElementById("ram").innerHTML="16-17 cali";
			document.getElementById("sym").innerHTML="S";
			document.getElementById("kol").innerHTML="26/27,5 cali";
		}
		else if(x=='men' && z>'168' && z<='182' && y=='mtb')
		{
			document.getElementById("ram").innerHTML="18-19 cali";
			document.getElementById("sym").innerHTML="M";
			document.getElementById("kol").innerHTML="27,5/29 cali";
		}
		else if(x=='men' && z>'182' && z<='189' && y=='mtb')
			{
			document.getElementById("ram").innerHTML="20-21 cali";
			document.getElementById("sym").innerHTML="L";
			document.getElementById("kol").innerHTML="29 cali";
		}
		else if(x=='men' && z>'189' && z<='200' && y=='mtb')
		{
			document.getElementById("ram").innerHTML="22-23 cali";
			document.getElementById("sym").innerHTML="XL";
			document.getElementById("kol").innerHTML="29 cali";
		}
		else if(x=='kob' && z<'150' && y=='trek')
		{
			document.getElementById("ram").innerHTML="14-15 cali";
			document.getElementById("sym").innerHTML="XS";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='kob' && z>'150' && z<='159' && y=='trek')
		{
			document.getElementById("ram").innerHTML="14-15 cali";
			document.getElementById("sym").innerHTML="XS";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='kob' && z>'159' && z<='165' && y=='trek')
		{
			document.getElementById("ram").innerHTML="15-16 cali";
			document.getElementById("sym").innerHTML="S";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='kob' && z>'165' && z<='172' && y=='trek')
		{
			document.getElementById("ram").innerHTML="17-18 cali";
			document.getElementById("sym").innerHTML="M";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='kob' && z>'172' && z>='180' && y=='trek')
		{
			document.getElementById("ram").innerHTML="19 cali";
			document.getElementById("sym").innerHTML="L";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z<'160' && y=='trek')
		{
			document.getElementById("ram").innerHTML="16-71 cali";
			document.getElementById("sym").innerHTML="S";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z>'160' && z<='170' && y=='trek')
		{
			document.getElementById("ram").innerHTML="16-71 cali";
			document.getElementById("sym").innerHTML="S";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z>'170' && z<='180' && y=='trek')
		{
			document.getElementById("ram").innerHTML="18-19 cali";
			document.getElementById("sym").innerHTML="M";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z>'180' && z<='187' && y=='trek')
		{
			document.getElementById("ram").innerHTML="20-21 cali";
			document.getElementById("sym").innerHTML="L";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z>'187' && z<='199' && y=='trek')
		{
			document.getElementById("ram").innerHTML="22-23 cali";
			document.getElementById("sym").innerHTML="XL";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(x=='men' && z>'199' && z>='215' && y=='trek')
		{
			document.getElementById("ram").innerHTML="24-25 cali";
			document.getElementById("sym").innerHTML="XXL";
			document.getElementById("kol").innerHTML="28 cali";
		}
		else if(z<'156' && y=='szos')
		{
			document.getElementById("ram").innerHTML="50 cm";
			document.getElementById("sym").innerHTML="XXS";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'156' && z<='162' && y=='szos')
		{
			document.getElementById("ram").innerHTML="50 cm";
			document.getElementById("sym").innerHTML="XXS";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'162' && z<='168' && y=='szos')
		{
			document.getElementById("ram").innerHTML="52 cm";
			document.getElementById("sym").innerHTML="XS";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'168' && z<='174' && y=='szos')
		{
			document.getElementById("ram").innerHTML="54 cm";
			document.getElementById("sym").innerHTML="S";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'174' && z<='180' && y=='szos')
		{
			document.getElementById("ram").innerHTML="56 cm";
			document.getElementById("sym").innerHTML="M";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'180' && z<='185' && y=='szos')
		{
			document.getElementById("ram").innerHTML="58 cm";
			document.getElementById("sym").innerHTML="L";
			document.getElementById("kol").innerHTML="700c";
		}
		else if(z>'185' && z<='191' && y=='szos')
		{
			document.getElementById("ram").innerHTML="60 cm";
			document.getElementById("sym").innerHTML="XL";
			document.getElementById("kol").innerHTML="700c";
		}
}


/*else if(x=='' && z>'' && z<='' && y=='')
		{
			document.getElementById("ram").innerHTML=" cali";
			document.getElementById("sym").innerHTML="";
			document.getElementById("kol").innerHTML=" cali";
		} */