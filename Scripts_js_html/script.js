var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


for (var i=0; i<100;i++){

    c.fillStyle = 'rgba(27, 4, 65, 1)';
    c.fillRect(i*10, i*10, 100, 100);

}

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "green";
c.stroke();