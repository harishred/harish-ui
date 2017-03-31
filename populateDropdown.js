
<htmL>
<title>
</title>



<body>
<script type="text/javascript">


function configureDropDownLists(county,city) {
var rajini = new Array('', 'chennai', 'Tnagar');
var ajith = new Array('', 'hyd', 'sec');

switch (county.value) {
case 'rajini':
document.getElementById(city).options.length = 0;
for (i = 0; i < rajini.length; i++) {
createOption(document.getElementById(city), rajini[i], rajini[i]);
}
break;
case 'ajith':
document.getElementById(city).options.length = 0; 
for (i = 0; i < ajith.length; i++) {
createOption(document.getElementById(city), ajith[i], ajith[i]);
}
break;
}

}

function createOption(county, text, value) {
var opt = document.createElement('option');
opt.value = value;
opt.text = text;
county.options.add(opt);
}
</script>
<tr>
<td>County Name: </td>
<td><select id="county" onchange="configureDropDownLists(this,'city');">
<option value=""></option>
<option value="rajini">rajini</option>
<option value="ajith">ajith</option>
</select></td>
</tr><br>
<tr>
<td>City: </td>
<td><select id="city">
</select></td>
</tr>