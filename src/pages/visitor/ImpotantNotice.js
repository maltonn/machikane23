import { Helmet } from "react-helmet";
import "../../css/Common.css"
import "../../css/About.css"
import PageTitles from "../../components/PageTitles";
import Bubble from "../../components/Bubble";
import { useEffect } from "react";

export default function About() {
    useEffect(()=>{
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    },[])
    
    return(
      <div className="main">
        <Helmet>
          <title>大阪大学からの重要なお知らせ|まちかね祭2023</title>
        </Helmet>
        <div className="about-sky">
            <PageTitles titles="大阪大学からの重要なお知らせ" kame={true}></PageTitles>
            <div className="about-mainpage">
                <h2>【重要】11月３日（金）まちかね祭でお配りした非常用飲料水への異物混入について</h2>
                <p> 令和５年11月３日（金）、大阪大学安全衛生管理部では、本学豊中キャンパスにおいて、まちかね祭来場者のうちの希望者に、大学備蓄として保管していた非常用の食品及び飲料水（＊）の配付を行いました。</p>
                <p>この度、配付した飲料水（500mlペットボトル）のうち１本について、内容物に白いカビ状の物質が混ざっているとの通報が寄せられました。</p>
                <p>つきまして、本日配付した飲料水は念のため飲用しないようにお願いします。また、仮に異物混入を確認された方は、開封せずそのままの状態にしておき、下記連絡先までご連絡をお願いいたします。</p>
                <p style={{textAlign:"center"}}>【連絡先】大阪大学安全衛生管理部  anzen-suisindai1@office.osaka-u.ac.jp</p>
                <p>この度は、ご迷惑及びご心配をおかけし、誠に申し訳ございません。</p>
                <p>＊当該飲料水はメーカーが定める賞味期限（2024.07.24）のものであり、期限到来まで
                の日数が１年に満たないことを明示したうえで配布を行ったものです。</p>
                <div className="name"><p>大阪大学理事  田中  敏宏<br></br>
                大阪大学理事  井上  惠嗣</p></div>
             </div>
          </div>
          <Bubble bubbleSwitch={false}></Bubble>
      </div>
    )
}
