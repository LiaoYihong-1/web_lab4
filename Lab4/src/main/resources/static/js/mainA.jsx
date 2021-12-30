import {createStore} from "redux";
import {addDotReducer} from "./mainHelper/reducer";
import {addDotAction} from "./mainHelper/action";
import {dostState} from "./mainHelper/reducer";

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.drawBackground();
    }

    drawBackground(){
        const x = 175;
        const y = 150;
        const r = 100;
        const pen = this.refs.canvas.getContext("2d");
        //background
        pen.fillStyle = "white" ;
        pen.beginPath();
        pen.clearRect(0,0,2*x,2*y);
        pen.rect(0,0,2*x, 2*y);
        pen.closePath();
        pen.fill();

        //axis
        pen.beginPath();
        pen.strokeStyle = "black";
        pen.font = "20px Verdana";
        pen.strokeRect(0,0,2*x,2*y);
        //y
        pen.moveTo(x, 0);
        pen.lineTo(x, 2*y);
        //x
        pen.moveTo(0, y);
        pen.lineTo(2*x, y);
        //arrow of y
        pen.moveTo(x-7,7);
        pen.lineTo(x,0);
        pen.moveTo(x+7,7);
        pen.lineTo(x,0);
        //arrow of x
        pen.moveTo(2*x-7,y-7);
        pen.lineTo(2*x,y);
        pen.moveTo(2*x-7,y+7);
        pen.lineTo(2*x,y);
        pen.stroke();

        //clear a range and set it's transparency
        pen.fillStyle = "orange";
        pen.globalAlpha = 0.5;

        //fourth quadrant
        pen.beginPath();
        pen.rect(x,y,r,r);
        pen.closePath();
        pen.fill();

        //first quadrant
        pen.beginPath();
        pen.moveTo(x,y);
        pen.arc(x,y,r,1.5*Math.PI,2*Math.PI);
        pen.closePath();
        pen.fill();

        //third quadrant
        pen.beginPath();
        pen.moveTo(x,y);
        pen.lineTo(x,y+100);
        pen.lineTo(x-r/2,y);
        pen.fill();
        pen.closePath();

        //find R
        //onx
        const length = 2.5
        pen.beginPath();
        pen.font = "20px Verdana";
        pen.moveTo(x-3/2*r,y+length);
        pen.lineTo(x-3/2*r,y-length);
        pen.moveTo(x-r,y+length);
        pen.lineTo(x-r,y-length);
        pen.moveTo(x-r/2,y+length);
        pen.lineTo(x-r/2,y-length);
        pen.moveTo(x-r/2,y+length);
        pen.lineTo(x-r/2,y-length);
        pen.moveTo(x+r/2,y+length);
        pen.lineTo(x+r/2,y-length);
        pen.moveTo(x+r,y+length);
        pen.lineTo(x+r,y-length);
        pen.moveTo(x+3/2*r,y+length);
        pen.lineTo(x+3/2*r,y-length);
        //ony
        pen.moveTo(x-length,y-r);
        pen.lineTo(x+length,y-r);
        pen.moveTo(x-length,y-1/2*r);
        pen.lineTo(x+length,y-1/2*r);
        pen.moveTo(x-length,y+1/2*r);
        pen.lineTo(x+length,y+1/2*r);
        pen.moveTo(x-length,y+r);
        pen.lineTo(x+length,y+r);
        pen.stroke();
        //put R
        pen.fillStyle = "black";
        pen.font = "15px Verdana";
        pen.fillText("-1.5", x-1.5*r-20, y+8*length);
        pen.fillText("-1", x-r-10, y+8*length);
        pen.fillText("-0.5", x-0.5*r-15, y+8*length);
        pen.fillText("0.5", x+0.5*r-10, y+8*length);
        pen.fillText("0.5", x-10, y+8*length);
        pen.fillText("1", x+r-5, y+8*length);
        pen.fillText("1.5", x+1.5*r-15, y+8*length);

        pen.fillText("1",x+8,y-r+5);
        pen.fillText("0.5",x+8,y-0.5*r+5);
        pen.fillText("-0.5",x+8,y+0.5*r+5);
        pen.fillText("-1",x+8,y+r+5);
        pen.stroke();
        pen.closePath();
    }

    componentWillUnmount(){
        this.clearCanvas();
    }

    clearCanvas(){
        const x = 175;
        const y = 150;
        const rubbish = this.refs.canvas.getContext("2d");
        rubbish.clearRect(0,0,2*x,2*y);
    }

    render() {
        return (
            <canvas ref={"canvas"} width={350} height={300}/>
        );
    }
}
class CanvasForm extends React.Component{
    constructor(pros) {
        super(pros);
        this.state={
            X:"0",
            Y:"0",
            R:"0"
        }
        this.handleY=this.handleY.bind(this);
        this.submit=this.submit.bind(this);
    }

    handleY(event){
        this.setState({Y:event.target.value});
    }

    submit(){
        $.ajax({
            url:"/getDot",
            data: {
              X:this.state.X,
                Y:this.state.Y,
                R:this.state.R
            },
            async:false,
            type:"POST",
            success:function (data){
                if(data.wrong){
                    alert(data.message);
                }else {
                    alert("x="+data.x+" y="+data.y+" r="+data.r);
                }
            }
        })
    }

    render(){
        return(
            <form id={"canvas_form"}>
                    choose your x:<br/>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"-5"})}>-5</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"-4"})}>-4</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"-3"})}>-3</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"-2"})}>-2</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"-1"})}>-1</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"0"})}>0</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"1"})}>1</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"2"})}>2</button>
                    <button type={"button"} name={"X"} className={"X"} onClick={()=>this.setState({X:"3"})}>3</button>
                <br/>
                    input Y:<br/>
                    <input type={"text"} value={this.state.Y} onChange={this.handleY}/>
                <br/>
                    choose your R:<br/>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"0"})}>0</button>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"1"})}>1</button>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"2"})}>2</button>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"3"})}>3</button>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"4"})}>4</button>
                    <button type={"button"} name={"R"} className={"R"} onClick={()=>this.setState({R:"5"})}>5</button>
                <br/>
                <button onClick={this.submit}>Add</button>
            </form>
        )
    }
}
ReactDOM.render(<CanvasComponent/>, document.getElementById('canvas'));
ReactDOM.render(<CanvasForm/>, document.getElementById('canvas_form_div'));