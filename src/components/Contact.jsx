function Contact() {
    return (
        <div className="contact">
            <center><h1 id="contact"><br /> Find Us</h1>
            </center>
            <form>
                <div class="mb-3 pd-9">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" spellCheck="false" />
                    <div id="emailHelp" class="form-text"><p>We'll never share your email with anyone else.</p></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" spellCheck="false" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>



    )
}
export default Contact