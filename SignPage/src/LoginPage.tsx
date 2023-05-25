

function Login () {

    return (
            <>
                <form>
                <label>Email</label>
                <input type="email" name="email" id="useremail" placeholder="User Email" />
                <label>Contraseña</label>
                <input type="password" name="password" id="userpassword" placeholder="Contraseña"/>
                <input id="button" type="submit" value="Submit" />
                </form>

            </>    
        )
}

export default Login