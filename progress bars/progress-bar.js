<script type='text/javascript'>
var prog = 90;

document.getElementById('test').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="' + prog + '" aria-valuemin="0" aria-valuemax="100" style="width:' + prog + '%"> ' + prog + '% Complete (success)</div></div>';

document.getElementById('test2').innerHTML = '<div class="clearfix"><div class="c100 p' + prog + ' big"><span>' + prog + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';

document.getElementById('tubaData').innerHTML = '<div class="clearfix"><div class="c100 p' + prog + ' big"><span>' + prog + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';

</script>