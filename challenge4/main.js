var butoniRrethi = document.getElementById('butoniRrethi');
var butoniDrejtkendeshi = document.getElementById('butoniDrejtkendeshi');
var butoniTrekendeshi = document.getElementById('butoniTrekendeshi');

var rrethiKuq = document.getElementById('rrethiKuq');
var drejtkendeshkalter = document.getElementById('drejtkendeshkalter');
var trekendeshgjelbert = document.getElementById('trekendeshgjelbert');

rrethiKuq.style.display = 'none';
drejtkendeshkalter.style.display = 'none';
trekendeshgjelbert.style.display = 'none';

butoniRrethi.onclick = function () {
    rrethiKuq.style.display = 'block';
};

butoniDrejtkendeshi.onclick = function () {
    drejtkendeshkalter.style.display = 'block';
};

butoniTrekendeshi.onclick = function () {
    trekendeshgjelbert.style.display = 'block';
};