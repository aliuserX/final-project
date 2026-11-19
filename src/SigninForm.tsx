import { useState, type FormEvent } from 'react'
import { supabase } from './lib/supabase'

export default function SigninForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        setMessage('')

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        setMessage(error ? `ورود ناموفق بود: ${error.message}` : 'ورود موفق بود!')
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>ورود</h2>
            <input type="email" placeholder="ایمیل" value={email}
                   onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" placeholder="رمز عبور" value={password}
                   onChange={(event) => setPassword(event.target.value)} required />
            <button type="submit" disabled={loading}>
                {loading ? 'در حال ورود…' : 'ورود'}
            </button>
            {message && <p role="status">{message}</p>}
        </form>
    )
}
