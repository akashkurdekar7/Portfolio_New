.space-invader {
  /* Modify size here: */
  --block-size: 5px;

  box-shadow: 0 0 0 var(--block-size) #333,
  0 var(--block-size) 0 var(--block-size) #333,
  calc(var(--block-size) * -2.5) calc(var(--block-size) * 1.5) 0 calc(var(--block-size) * .5) #333,
  calc(var(--block-size) * 2.5) calc(var(--block-size) * 1.5) 0 calc(var(--block-size) * .5) #333,
  calc(var(--block-size) * -3) calc(var(--block-size) * -3) 0 0 #333,
  calc(var(--block-size) * 3) calc(var(--block-size) * -3) 0 0 #333,
  calc(var(--block-size) * -2) calc(var(--block-size) * -2) 0 0 #333,
  calc(var(--block-size) * 2) calc(var(--block-size) * -2) 0 0 #333,
  calc(var(--block-size) * -3) calc(var(--block-size) * -1) 0 0 #333,
  calc(var(--block-size) * -2) calc(var(--block-size) * -1) 0 0 #333,
  calc(var(--block-size) * 2) calc(var(--block-size) * -1) 0 0 #333,
  calc(var(--block-size) * 3) calc(var(--block-size) * -1) 0 0 #333,
  calc(var(--block-size) * -4) 0 0 0 #333,
  calc(var(--block-size) * -3) 0 0 0 #333,
  calc(var(--block-size) * 3) 0 0 0 #333,
  calc(var(--block-size) * 4) 0 0 0 #333,
  calc(var(--block-size) * -5) var(--block-size) 0 0 #333,
  calc(var(--block-size) * -4) var(--block-size) 0 0 #333,
  calc(var(--block-size) * 4) var(--block-size) 0 0 #333,
  calc(var(--block-size) * 5) var(--block-size) 0 0 #333,
  calc(var(--block-size) * -5) calc(var(--block-size) * 2) 0 0 #333,
  calc(var(--block-size) * 5) calc(var(--block-size) * 2) 0 0 #333,
  calc(var(--block-size) * -5) calc(var(--block-size) * 3) 0 0 #333,
  calc(var(--block-size) * -3) calc(var(--block-size) * 3) 0 0 #333,
  calc(var(--block-size) * 3) calc(var(--block-size) * 3) 0 0 #333,
  calc(var(--block-size) * 5) calc(var(--block-size) * 3) 0 0 #333,
  calc(var(--block-size) * -2) calc(var(--block-size) * 4) 0 0 #333,
  calc(var(--block-size) * -1) calc(var(--block-size) * 4) 0 0 #333,
  var(--block-size) calc(var(--block-size) * 4) 0 0 #333,
  calc(var(--block-size) * 2) calc(var(--block-size) * 4) 0 0 #333;
  background: #333;
  width: var(--block-size);
  height: var(--block-size);
  overflow: hidden;
}




// flag
.flag {
  width: 50px;
  height: 50px;
  box-sizing: content-box;
  padding-top: 15px;
  position: relative;
  background: #333;
}
.flag:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 13px solid #fff;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
}