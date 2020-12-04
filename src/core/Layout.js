import React from 'react'
import './core.css'
import './blog.jpeg'

const Layout=({title='Title',description='', img=" " ,className,children})=>{
	return (
<div className="container" >
	<div className="jumbotron" style={{backgroundColor:"#151515"}}>
	<div id="jumbotron"  >
	<div className={className}>{children}</div>
	</div>
</div>
	
</div>
		)

}
export default Layout