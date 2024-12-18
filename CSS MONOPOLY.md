
body {
  background: #fff;
  font-family: 'Comfortaa', sans-serif;
}

* {
	box-sizing: border-box;
}

aside.context {
  text-align: center;
  color: #333;
	line-height: 1.7;
  a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
		&:hover {
			border-bottom: 1px solid;
		}
  }
  .explanation {
    max-width: 700px;
    margin: 6em auto 0;
  }
}


footer {
  text-align: center;
  margin: 2em auto 4em;
  width: 100%;
  a {
    text-decoration: none;
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: transparent;
		border: 1px dashed #333;
    color: #333;
    margin: 5px;
    &:hover {
      background: rgba(255,255,255,0.1);
    }
    .icons {
      margin-top: 12px;
      display: inline-block;
      font-size: 20px;
    }
  }
}


.main-content {
	margin: 4em auto 0;
	display: grid;
	width: 1089px;
	grid: 125px repeat(9,90px) 125px / 125px repeat(9,90px) 125px;
	grid-gap: 2px;
	border: 2px solid #ccc;
	//background: linear-gradient(to bottom right, rgb(15, 32, 39), rgb(18, 48, 77));
	background: #fff;
	padding: 2px;
	grid-auto-flow: dense;
	font: 11px/1.2 'Delius';
	text-transform: uppercase;
	text-align: center;
	color: #fff;
	> div:not(.middle-space) {
		background: linear-gradient(to bottom, rgb(15, 32, 39), rgb(18, 48, 77));
	}
}

.middle-space {
	grid-column: 2 / span 9;
	grid-row: 2 / span 9;
	background: url('https://i.ibb.co/WvnhfBk/monopolyx-bg.png') center center / cover;
	position: relative;
	.stack {
		width: 200px;
		height: 120px;
		border: 3px dotted #fff; 
		position: absolute;
		&--community {
			top: 0;
			left: 0;
			transform: translateY(100px) translateX(70px) rotate(135deg);
			img {
				max-width: 70px;
				margin-top: 20px;
			}
		}
		&--chance {
			bottom: 0;
			right: 0;
			transform: translateY(-100px) translateX(-70px) rotate(-45deg);
			img {
				max-width: 110px;
				transform: rotate(25deg);
			}
		}
	}
}

.parking {
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	font-size: 14px;
	height: 125.5px;
	> div {
		transform: rotate(135deg);
		margin: 23px 0px 0 3px;
	}
	img {
		width: 40%;
		transform: rotate(20deg);
		margin: 3px 0;
	}
}

.go-to-jail {
	grid-column: 11;
	grid-row: 1;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	font-size: 14px;
	width: 126px;
	height: 125.5px;
	> div {
		transform: rotate(-135deg);
		margin: 20px 0px 0 -5px;
	}
	img {
		width: 40%;
		margin: 6px 0 2px;
	}
}

.jail {
	grid-column: 1;
	grid-row: 11;
	position: relative;
	> div {
		position: absolute;
		width: 75%;
		height: 75%;
		top: 0;
		right: 0;
		padding-left: 15px;
		border: solid #fff;
		border-width: 0 0 2px 2px;
		img {
			width: 80%;
			margin: 10px;
			transform: rotate(45deg);
		}
	}
	span {
		position: absolute;
		font-size: 14px;
		&:nth-child(2) {
			transform: rotate(90deg);
			left: 0px;
			top: 50px;
		}
		&:nth-child(3) {
			bottom: 8px;
			left: 45px;
		}
	}
}

.pass-go {
	grid-column: 11;
	grid-row: 11;
	position: relative;
	width: 126px;
	> div {
		transform: rotate(-45deg);
		margin: 25px 0 0 -5px;
	}
	p:nth-child(2) {
		font-size: 38px;
		font-weight: 700;
	}
	img {
		width: 50%;
		margin-top: -25px;
		transform: rotate(-132deg);
	}
}

.chance {
	p {
		margin: 15px 0 20px;
	}
	figure {
		background: url('https://i.ibb.co/8xS2Db9/ouro.png') no-repeat center center / contain; 
		
		width: 100%;
		height: 45%;
		transform: rotate(-15deg);
	}
	&:nth-child(6) {
		grid-column: 3;
		grid-row: 1;
		transform: rotate(180deg);
	}
	&:nth-child(7) {
		grid-column: 11;
		grid-row: 7;
		transform: rotate(-90deg);
	}
	&:nth-child(8) {
		grid-column: 3 / span 1;
		grid-row: 11;
	}
}

.community {
	p {
		margin: 15px 0 20px;
	}
	figure {
		background: url('https://i.ibb.co/L1nVJqG/cruz.png') no-repeat center center / contain;
		width: 60%;
		height: 45%;
		margin: auto;
	}
	&:nth-child(9) {
		grid-column: 1;
		grid-row: 4;
		transform: rotate(90deg);
	}
	&:nth-child(10) {
		grid-column: 11;
		grid-row: 4;
		transform: rotate(-90deg);
	}
	&:nth-child(11) {
		grid-column: 9;
		grid-row: 11;
	}
}

.railroad {
	&:nth-child(12) {
		grid-column: 6;
		grid-row: 1;
		transform: rotate(180deg);
	}
	&:nth-child(13) {
		grid-column: 1;
		grid-row: 6;
		transform: rotate(90deg);
	}
	&:nth-child(14) {
		grid-column: 11;
		grid-row: 6;
		transform: rotate(-90deg);
	}
	&:nth-child(15) {
		grid-column: 6;
		grid-row: 11;
		img {
			margin-top: 12px;
    	width: 55%;
		}
	}
}

.utility {
	&:nth-child(16) {
		grid-column: 9;
		grid-row: 1;
		transform: rotate(180deg);
	}
	&:nth-child(17) {
		grid-column: 1;
		grid-row: 9;
		transform: rotate(90deg);
	}
	&:nth-child(18) {
		grid-column: 11;
		grid-row: 9;
		transform: rotate(-90deg);
		img {
    	width: 50%;
			margin-top: 12px;
		}
	}
	&:nth-child(19) {
		grid-column: 7;
		grid-row: 11;
	}
}

.property {
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	&__color {
		background: var(--color);
		width: 100%;
		height: 30px;
		border-bottom: 2px solid #fff;
	}
	&__name {
		margin: 10px 0;
		word-break: break-word;
		text-transform: uppercase;
		padding: 0 5px;
	}
	&__price {
		margin-top: auto;
		margin-bottom: 8px;
		display: block;
		width: 100%;
	}
	&.top {
		transform: rotate(180deg);
	}
	&.left {
		transform: rotate(90deg);
		grid-column-start: 1;
		height: 125px;
    width: 90px;
    margin-top: -17px;
    margin-left: 18px;
	}
	&.right {
		transform: rotate(-90deg);
		grid-column-start: 11;
		height: 125px;
    width: 90px;
    margin-top: -17px;
    margin-left: 18px;
	}
}

.community:nth-child(9), .community:nth-child(10), .railroad:nth-child(13), .railroad:nth-child(14), .chance:nth-child(7), .utility:nth-child(17), .utility:nth-child(18),{
	height: 125px;
	width: 90px;
	margin-top: -17px;
	margin-left: 18px;
}

.non-property {
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	p { padding: 0 8px; margin: 15px 0 2px;}
	img {
    width: 60%;
    object-fit: contain;
		margin: auto;
	}
	span {
		display: block;
		margin-top: auto;
    margin-bottom: 8px;
	}
}
