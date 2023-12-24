import AuthCard from "../components/AuthCard";

export default function Login() {

    const handleLogin = (formData)=>{
        // checking the credentials
        // decided wether merchant or not
        // respective routing
    }
    return (
        <div>
            <AuthCard onSubmit={handleLogin} actionType="Login"/>
        </div>
    )
}