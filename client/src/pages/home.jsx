import NavBar from "../components/navbar"
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()

    const newMessagePage = () => {
        navigate('/new-message')
    }
    return (
        <>
            <NavBar />
            <button onClick={newMessagePage}>New Message</button>
        </>
    )
}