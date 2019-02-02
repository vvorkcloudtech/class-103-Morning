import React from 'react'
import {Data} from './Data';

class Lg extends React.Component{
    state={
        data:Data
    }
    render(){
        var icon=this.state.data.map((index,i)=>{
            return(
            <li className="li" key={i}>
            {index.LGMObile.icon.map((i,index)=>{
                return(
             <i key={index} className={i.icon}></i>
             )})}</li>
)        })

        return(<div>
            <div className="main">
           
            <div className="img">
            
            </div>
            <div className="fixed"><i class="fab fa-facebook"></i><hr />
            <i class="fab fa-twitter"></i><hr />
            <i class="fab fa-google"></i><hr />
            <i class="fab fa-instagram"></i><hr />
            </div>
            <div className="commints">
            <ul>

<li><i class="fas fa-newspaper"></i><p>25th july 2019, 11:30pm</p></li>
<li><i class="fas fa-comments"></i><p>33 Comments</p></li>
<li><i class="fas fa-comments"></i><p>Mishal Rehman</p></li>

            </ul>
            </div>
            <div className="heading">
            <h1>Exclusive: This is the LG G8 ThinQ, LG’s First 2019 Flagship Smartphone</h1>
            <ul>
                <li>
                    <p>n 2018, smartphone manufacturers hopped on the notch bandwagon to trim as much of the top bezel as they could. Towards the end of the year, we saw device makers experiment with <span style={{color:"red"}}>slider mechanisms</span> and <span style={{color:"red"}}>punch hole displays</span>. While we haven’t seen any evidence that the Korean manufacturer LG will do away with the display notch on its upcoming G8 ThinQ, we have heard rumors that the company is experimenting with “Sound on Display” technology. This was corroborated last week when the first CAD renders of what’s purportedly the LG G8 ThinQ was published, and now, thanks to an anonymous source, we have the first press render of the G8 which matches what we saw last week.</p>
                </li>
                <li>
                    <p>n 2018, smartphone manufacturers hopped on the notch bandwagon to trim as much of the top bezel as they could. Towards the end of the year, we saw device makers experiment with slider mechanisms and punch hole displays. While we haven’t seen any <span style={{color:"red"}}>evidence</span> that the Korean manufacturer LG will do away with the display notch on its upcoming G8 ThinQ, we have heard rumors that the company is experimenting with <span style={{color:"red"}}>“Sound on Display” </span>technology. This was corroborated last week when the first CAD renders of what’s purportedly the LG G8 ThinQ was published, and now, thanks to an anonymous source, we have the first press render of the G8 which matches what we saw last week.</p>
                    <li>
                        <p>
                        n 2018, smartphone manufacturers hopped on the notch <span style={{color:"red"}}>bandwagon to trim </span>as much of the top bezel as they could. Towards the end of the year, we saw device makers <span style={{color:"red"}}>experiment with slider</span> mechanisms and punch hole displays. While we haven’t seen any evidence that the Korean manufacturer LG will do away with the display notch on its upcoming G8 ThinQ, we have heard rumors that the company is experimenting with “Sound on Display” technology. This was corroborated last week when the first CAD renders of what’s purportedly the LG G8 ThinQ was published, and now, thanks to an anonymous source, we have the first press render of the G8 which matches what we saw last week.
                        </p>
                    </li>

                </li>
                <li>
                    <p>
                    n 2018, smartphone manufacturers hopped on the notch bandwagon to trim as much of the top bezel as they could. Towards the end of the year, we saw device makers experiment with slider mechanisms and punch hole displays. While we haven’t seen any evidence that the <span style={{color:"red"}}>Korean manufacturer LG </span>will do away with the display notch on its upcoming G8 ThinQ, we have heard rumors that the company is experimenting with “Sound on<span style={{color:"red"}}>Display” technology</span> . This was corroborated last week when the first CAD renders of what’s purportedly the LG G8 ThinQ was published, and now, thanks to an anonymous source, we have the first press render of the G8 which matches what we saw last week.
                    </p>
                </li>
            </ul>
            <ul className="btn">
            <li>
        LG Gb ThinQ Forums
            </li><hr />
            <li>
        LG G7   ThinQ Forums
            </li><hr />
            <li>
LG V40 ThinQ Forums
            </li>



            </ul>
            </div>
            <div className="phone">
            </div>
            <div className="apple-phn">
            <div className="samsung">
            
            </div>
            <div className="samsung1">
            </div>
            
            </div>
            
            <h5>LG G8 ThinQ CAD renders. Source: OnLeaks.</h5>
            <p>We zoomed in on the image to see what LG is packing in the G8’s display cutout. The primary front-facing camera and lack of an earpiece speaker are obvious, but we aren’t too sure about the other sensors housed in the notch. Before its launch, the LG V40 was rumored to have face unlock support. While it does support facial recognition, it’s not as secure as Face ID on the latest Apple iPhone models or face unlock on the Huawei Mate 20 Pro and Xiaomi Mi 8 Explorer Edition. It’s possible that LG is revisiting the concept here, but this time with hardware sensors to provide for more secure facial authentication. That would necessarily include an IR camera, dot projector, and a Time of Flight camera, but we don’t know if the blurry sensors shown in the close-up below are for face unlock.</p>
            <div className="image-1">
            <p className="p">A close-up of the notch on the LG G8 ThinQ. (Image has been brightened in Photoshop.)</p>
            </div>
            <div className="para">
            <p className="para1">For comparison, here are close-ups of the notches on the LG G7 ThinQ and LG V40 ThinQ. You can clearly see that the earpiece that’s present on both of LG’s 2018 flagship devices is missing on the G8.</p>
            <div className="snap"></div>
            <div className="snap1"></div>
            </div>
            <div className="testify">
            
            <h1>Is this really the LG G8?</h1>
            <ul className="star">
<li>Given the track record of Steve Hemmerstoffer, also known as OnLeaks on Twitter, we had little reason to doubt his claim that the CAD renders he posted were of the G8. However, Ken Hong, the head of LG Electronics’ global corporate communications, quickly came out to dispute the accuracy of those renders, stating that they are “only a speculative rendering.” He went on to say that the renders are “not real” and that the renders aren’t showing the G8 ThinQ. David Ruddock from AndroidPolice believes that the CAD renders are mostly accurate. The LG G8 press renders that we posted today corroborate what OnLeaks posted. Thus, we now also believe that the CAD renders were accurate all along. We reached out to Ken Hong from LG for comment and will update this article if we hear back.</li>
                 <li>Update 1/26/19 at 10:58PM CT: Ken Hong declined to comment.</li>
                <li><h2>LG G8 ThinQ Specifications</h2></li>

                <li>Unfortunately, we don’t know much about the hardware specifications for the LG G8. OnLeaks told 91Mobiles that the device has a 6.1-inch display with an aspect ratio of 19.5:9. If the G8 really does have “Sound on Display” technology, then we would expect it to have an OLED panel as previously rumored. LG told AndroidHeadlines that the company was reserving OLED panels for their V series of smartphones, but it’s possible their plans have changed since then.

The dimensions of the LG G8 are purportedly 152 x 72 x 8.4mm. In comparison, the LG V40 ThinQ’s dimensions are 158.8 x 75.7 x 7.6 mm while the LG G7 ThinQ’s dimensions are 153.2 x 71.9 x 7.9 mm. If OnLeaks is correct, then the G8 will be shorter than both the V40 and the G7 but it’ll be thicker than both its predecessors.

CNET claims that LG will launch a smartphone that supports a second screen as an attachment, but we have no new information that corroborates that report. We’ve heard rumors that LG plans to launch a 5G flagship at Mobile World Congress 2019, but Korean publication ETNews reports that LG’s 5G flagship will launch separately from the LG G8 ThinQ. LG recently announced that they’ll be launching a 5G smartphone with the Qualcomm Snapdragon 855 mobile platform, a 4,000mAh battery, and improved cooling, but if ETNews is correct, this won’t be the G8. LG is also saying “goodbye to touch” in their latest MWC 2019 teaser video, which could be a hint that the company plans on pushing gestures on their upcoming flagship. The possible inclusion of a TOF sensor would support the theory that the G8 will have hover gesture support, given what we’ve seen the sensor is capable of with the Honor View 20’s 3D Motion-controlled Gaming.</li>
                <li>The dimensions of the LG G8 are purportedly 152 x 72 x 8.4mm. In comparison, the LG V40 ThinQ’s dimensions are 158.8 x 75.7 x 7.6 mm while the LG G7 ThinQ’s dimensions are 153.2 x 71.9 x 7.9 mm. If OnLeaks is correct, then the G8 will be shorter than both the V40 and the G7 but it’ll be thicker than both its predecessors.

CNET claims that LG will launch a smartphone that supports a second screen as an attachment, but we have no new information that corroborates that report. We’ve heard rumors that LG plans to launch a 5G flagship at Mobile World Congress 2019, but Korean publication ETNews reports that LG’s 5G flagship will launch separately from the LG G8 ThinQ. LG recently announced that they’ll be launching a 5G smartphone with the Qualcomm Snapdragon 855 mobile platform, a 4,000mAh battery, and improved cooling, but if ETNews is correct, this won’t be the G8. LG is also saying “goodbye to touch” in their latest MWC 2019 teaser video, which could be a hint that the company plans on pushing gestures on their upcoming flagship. The possible inclusion of a TOF sensor would support the theory that the G8 will have hover gesture support, given what we’ve seen the sensor is capable of with the Honor View 20’s 3D Motion-controlled Gaming.</li>
                 <li><h3>LG G8 ThinQ Announcement</h3></li>
                 <li>
We’re still a month away from LG’s scheduled press conference at MWC 2019, so expect to hear more about the device ahead of its launch. LG’s event is scheduled for Sunday, February 24, 2019. XDA-Developers will have a representative at MWC as will our partners at PocketNow, so stay tuned for more coverage on the LG G8 ThinQ.</li>
                 </ul>
            </div>

            <div className="icon">
            <ul>{icon}</ul>
            <button className="bot">Discuss the story</button>
            </div>

            <div className="last">
            <p className="txt">Want more posts like this delivered to your inbox? Enter your email to be subscribed to our newsletter.</p>
       <h2>Email Address</h2>
       <h3>Frequency</h3>
        <input className="ab" type="text"/> 
       <input className="bc" type="text"/>
       <button className="subscribe">subscribe</button>
            </div>
            </div>
        </div>)
    }
}
export default Lg;