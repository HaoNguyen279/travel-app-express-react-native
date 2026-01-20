import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import CustomInput from  './components/CustomInput'


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      setMessage(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [message])
  return (
    <>
      <CustomInput label="Email" type="email" placeholder="Nhập email" setTextParent={setEmail}/>
      <CustomInput label="Mật khẩu" type="password" placeholder="Nhập mật khẩu" setTextParent={setPassword}/>
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}
      <Button email={email} password={password} setMessage={setMessage}/>
      
    </>
  )
}

export default App
