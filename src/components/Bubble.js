import "../css/Bubble.css"

export default function Bubble({bubbleSwitch}){
    if(bubbleSwitch){
        return (
            <div className="ocean-bubbles">
                <div className="bottom-bubbles">
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                    <div className="bubble-component"></div>
                </div>
            </div>
    )
    }else{
        return (
            <div className="ocean-bubbles">
                <div className="bottom-bubbles"></div>
            </div>
        )
    }
}