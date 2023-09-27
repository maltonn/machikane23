import React from 'react';
import { useState } from 'react';
export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [warnMessage, setWarnMessage] = useState('')

  const [email, setEmail] = useState('')
  const [contents, setContents] = useState('')
  const [category,setCategory]=useState('一般')

  const handleSubmit = () => {
    fetch(`https://wwlza1v509.execute-api.ap-northeast-1.amazonaws.com/default/SendEmail?email=${email}&body=${contents}&category=${category}`).then((res) => {
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
            <p>メールアドレス（必須）</p>
            <input value={email} onChange={(e) => { setEmail(e.target.value)}} />
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