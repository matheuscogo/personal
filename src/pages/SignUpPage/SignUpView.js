function SignUpView() {
    return (
        <div className="box-signup">
            <forms className="form-signup">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Cadastrar</button>
            </forms>
        </div>
    );
}

export default SignUpView;