import React from 'react'
import { Cart } from './Cart'

function Education() {
  return (
	<div className="flex flex-col items-start justify-start gap-2 ">
			<div className="text-xl font-bold">Education</div> 
			<div className="text-gray-500">
				<Cart type="education"/>
			</div>
		</div>
  )
}

export default Education