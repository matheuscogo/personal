import Logo from '../../assets/Logo.png'

function SignInView() {
    return (
        <div className="box-signup">
            <forms className="form-signup">
                <img src={Logo} alt="Logo" width="220px" />
                <input type="text" placeholder="Username" />
                <div className="div-password">
                    <input type="password" placeholder="Password" />
                    <a href="/">Esqueci minha senha.</a>
                </div>
                <button>Entrar</button>
            </forms>
        </div>
    )
}

export default SignInView