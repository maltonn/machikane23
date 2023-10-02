import React from 'react';
import { useState } from 'react';
import "../css/ContactForm.css";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [warnMessage, setWarnMessage] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category,setCategory]=useState('')
  const [contents, setContents] = useState('')

  const handleSubmit = () => {
    if(name===''){
      setWarnMessage('氏名を入力してください')
      return
    }
    if(email===''){
      setWarnMessage('メールアドレスを入力してください')
      return
    }
    if(category===''){
      setWarnMessage('種類を入力してください')
      return
    }
    if(contents===''){
      setWarnMessage('お問い合わせ内容を入力してください')
      return
    }
    fetch(`https://wwlza1v509.execute-api.ap-northeast-1.amazonaws.com/default/SendEmail?name=${name}&email=${email}&category=${category}&body=${contents}`).then((res) => {
      return res.json()
  }
  ).then((res) => {
    setContents('')
    setIsSubmitted(true)
  }).catch((e)=>{
    console.log(e.toString())
    setWarnMessage(e.toString())
  })
  }

  return (
    <div>
      {
        !isSubmitted ? (
          <form >
            <p>氏名（必須）</p>
              <input value={name} onChange={(e) => { setName(e.target.value)}} />
            <p>メールアドレス（必須）</p>
              <input value={email} onChange={(e) => { setEmail(e.target.value)}} />
            <p>種類（必須）</p>
              <p>
                <input type="radio" value={category} onChange={(e) => { setCategory(e.target.value)}} /><label>まちかね祭へのご来場について</label><br></br>
                <input type="radio" value={category} onChange={(e) => { setCategory(e.target.value)}} /><label>協賛について</label><br></br>
                <input type="radio" value={category} onChange={(e) => { setCategory(e.target.value)}} /><label>取材について</label><br></br>
                <input type="radio" value={category} onChange={(e) => { setCategory(e.target.value)}} /><label>その他</label>
              </p>
            <p>お問い合わせ内容（必須）</p>
            <textarea value={contents} onChange={(e) => { setContents(e.target.value) }} />
            <input type='button' value='送信' onClick={handleSubmit} />
            <div>{warnMessage}</div>
          </form>
        ) : (
          <div>
            送信完了
            <div onClick={()=>{setIsSubmitted(false)}}>別のお問い合わせを送る</div>
          </div>
        )
      }
    </div>
  );
}