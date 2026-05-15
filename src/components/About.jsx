import React from 'react'
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <section class="py-5">
	<div class="container">
		<div class="row gx-4 align-items-center justify-content-between">
			<div class="col-md-5 order-2 order-md-1">
				<div class="mt-5 mt-md-0">
					<h2 class="display-5 fw-bold">About Us</h2>
					<span class="text-muted">Our Story</span>
					
					<p class="lead">At VisionEdge, we bring the future of entertainment into your living room. From stunning 4K displays to immersive smart TVs, we offer a carefully curated range of televisions for every home and budget.</p>
					<p class="lead">We believe great picture quality shouldn't be a luxury. That's why we partner with the world's leading brands to deliver premium viewing experiences at prices that make sense.</p>
				</div>
			</div>
			<div class="col-md-6 offset-md-1 order-1 order-md-2">
				<div class="row gx-2 gx-lg-3">
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://hometriangle.com/imagecache/media/544629/package/cover-image.webp"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOFJR8Zb8dC9f5Gj4048SKBJD0TB04usieA&s"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://www.shutterstock.com/image-photo/columbus-ohio-december-5-2023-260nw-2399569107.jpg"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFwirc3PC0zRs0TA1R8wo1CnbCg2NrblqWg&s"/></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default About
