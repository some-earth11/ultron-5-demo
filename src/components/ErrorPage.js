import React from 'react'
import './ErrorPage.css'
function ErrorPage() {
  return (
    <div>
      <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1 className='head'>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a href="/">Go To Homepage</a>
		</div>
	</div>
    </div>
  )
}

export default ErrorPage
