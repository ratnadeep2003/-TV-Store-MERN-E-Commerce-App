import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Contact() {
	const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");

function messageSent(e) {
  e.preventDefault();
  alert("Message sent, we will get in touch with you shortly");
  setName("");
  setEmail("");
  setMsg("");
}
  return (
    <div>
      <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center mb-3 mb-lg-5">
			<div class="col-lg-8 col-xxl-7">
				<h2 class="display-5 fw-bold mb-3">Contact Us</h2>
				<span class="text-muted">Let's Talk</span>
				
				<p class="lead">Have a question or facing an issue with your TV? We're here to help. Reach out to our support team and we'll make sure your viewing experience is nothing short of perfect.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<form>
					<div class="row">
						<div class="col-12">
							<div class="mb-3">
								<input value={name} onChange={(e) => setName(e.target.value)} class="form-control bg-light" placeholder="Full name" type="text"/>
							</div>
						</div>
						<div class="col-12">
							<div class="mb-3">
								<input value={email} onChange={(e) => setEmail(e.target.value)} class="form-control bg-light" placeholder="Email address" type="email"/>
							</div>
						</div>
						<div class="col-12">
							<div class="mb-3">
								<textarea value={msg} onChange={(e) => setMsg(e.target.value)} class="form-control bg-light" placeholder="Your message" rows="5"></textarea>
							</div>
						</div>
						<div class="col-4">
							<div class="d-grid">
								<button onClick={messageSent} class="btn btn-primary" type="submit">Send message</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-md-6">
				<div class="mt-4 mt-md-0"><img alt="Map" class="img-fluid" src="https://freefrontend.dev/assets/map-img-1.png"/></div>
				<div class="mt-3">
					<p>Looking to visit us in person? Click on the map below to find our nearest store and we'll be happy to welcome you.</p>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Contact
