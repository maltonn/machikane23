import React from 'react';
import { useState } from 'react';
import "../css/ContactForm.css";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [warnMessages, setWarnMessages] = useState({
    "name": "",
    "email": "",
    "category": "",
    "contents": "",
    "other":"",
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [contents, setContents] = useState('')

  const handleSubmit = () => {
    const newWarnMessages={
      "name": "",
      "email": "",
      "category": "",
      "contents": "",
      "other":"",
    }

    if (name === '') {
      newWarnMessages.name = "氏名を入力してください"
    }
    if (email === '' || !email.match(/.+@.+\..+/)) {
      newWarnMessages.email = "メールアドレスを入力してください"
    }
    if (!category) {
      newWarnMessages.category = "種類を選択してください"
    }
    if (contents === '') {
      newWarnMessages.contents = "お問い合わせ内容を入力してください"
    }
    
    if(name === '' || email === '' || category === '' || contents === ''){
      setWarnMessages(newWarnMessages)
      return
    }

    fetch(`https://wwlza1v509.execute-api.ap-northeast-1.amazonaws.com/default/SendEmail?name=${name}&email=${email}&category=${category}&body=${contents}`).then((res) => {
      return res.json()
    }
    ).then((res) => {
      setContents('')
      setIsSubmitted(true)
    }).catch((e) => {
      console.log(e.toString())
      setWarnMessages({...warnMessages, "other": "送信に失敗しました。時間をおいて再度お試しください。"})
    })
  }

  return (
    <div>
      {
        !isSubmitted ? (
          <form className='contactForm'>
            <p>氏名（必須）</p>
            <div className='inqury-warn'>{warnMessages.name}</div>
            <input value={name} onChange={(e) => { setName(e.target.value) }} />
            <p>メールアドレス（必須）</p>
            <div className='inqury-warn'>{warnMessages.email}</div>
            <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <p>種類（必須）</p>
            <div className='inqury-warn'>{warnMessages.category}</div>
            <p>
              <input type="radio" id="cat1" name="category" value={category} onChange={(e) => { setCategory('まちかね祭へのご来場について') }} /><label for="cat1">まちかね祭へのご来場について</label><br></br>
              <input type="radio" id="cat2" name="category" value={category} onChange={(e) => { setCategory('協賛について') }} /><label for="cat2">協賛について</label><br></br>
              <input type="radio" id="cat3" name="category" value={category} onChange={(e) => { setCategory('取材について') }} /><label for="cat3">取材について</label><br></br>
              <input type="radio" id="cat4" name="category" value={category} onChange={(e) => { setCategory('その他') }} /><label for="cat4">その他</label>
            </p>
            <p>お問い合わせ内容（必須）</p>
            <div className='inqury-warn'>{warnMessages.contents}</div>
            <textarea value={contents} className="inquiry-content" onChange={(e) => { setContents(e.target.value) }} /><br></br>
            <div className='inqury-warn'>{warnMessages.other}</div>
            <input type='button' value='送信' className="contact-submit-button" onClick={handleSubmit} />
            
          </form>
        ) : (
          <div className='after-submit'>
            ◆送信完了
            <div onClick={() => { setIsSubmitted(false) }} className='another-inquiry'>別のお問い合わせを送る</div>
          </div>
        )
      }
    </div>
  );
}