export default () => {

    return (<form>
        <h1>Sign Up</h1>
        <div className="mb-3">
            <label for="email" className="form-label">Email Address</label>
            <input className="form-control" id="email" />
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
        </div>
        <button className="btn btn-primary">Sing Up</button>
    </form>);
};